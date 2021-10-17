<template>
  <div class="login-form" @keyup.enter="performLogin()">
    <text-input class="spacer" type="email" placeholder="Логин" :valid="loginValid" v-model="login"/>
    <password-input class="spacer" placeholder="Пароль" :valid="passwordValid" v-model="password"/>
    <action-button class="spacer" :disabled="!inputValid" @click="performLogin()">Войти в личный кабинет</action-button>
    <div class="bottom">
      <p v-if="invalidCredentials" class="error">Неправильный логин или пароль</p>
      <router-link to="" class="forgot">Забыли пароль?</router-link>
    </div>
  </div>
</template>


<style scoped>
.login-form {
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.spacer {
  margin: 0px 0px 16px 0px;
  width: 100%;
  height: 48px;
  
  padding: 0px 16px;

  box-sizing: border-box;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.bottom {
  width: 100%;
  height: 24px;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.error {
  font-weight: 500;
  font-size: 12px;
  
  text-decoration: none;
  color: red;
}

.forgot {
  padding: 0px;
  margin: 0px;

  font-weight: 500;
  font-size: 12px;
  
  text-decoration: none;
  color: #5C6175;
  
  user-select: none;
}

.forgot:hover {
  color: #ACA1A5;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import AuthRepository from '@/repositories/authRepository'
import ProfileRepository from '@/repositories/profileRepository'
import PasswordInput from './PasswordInput.vue'
import TextInput from '@/components/common/TextInput.vue'
import ActionButton from '@/components/common/ActionButton.vue'
import UnouthorizedError from '@/models/errors/unouthorizedError'

export default defineComponent({
  components: { TextInput, PasswordInput, ActionButton },
  name: 'login-form',

  setup() {
    return {
      authRepository: new AuthRepository(),
      profileRepository: new ProfileRepository(),
    }
  },

  data() {
    return {
      login: '',
      password: '',
      invalidCredentials: false,
    }
  },

  methods: {
    performLogin() {
      if (this.inputValid) {
        this.authRepository.login(this.login, this.password)
          .then(() => {
            this.$router.go(0)
          })
          .catch((error: UnouthorizedError) => {
            this.password = ''
            this.invalidCredentials = true
          })
      }
    },
  },

  computed: {
    loginValid(): boolean {
      return this.login.length > 0
    },
    passwordValid(): boolean {
      return this.password.length > 0
    },
    inputValid(): boolean {
      return this.loginValid && this.passwordValid
    }
  },
})
</script>
