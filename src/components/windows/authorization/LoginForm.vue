<template>
  <div class="login-form">
    <text-input class="spacer" type="email" placeholder="Логин" v-model="login"/>
    <password-input class="spacer" placeholder="Пароль" v-model="password"/>
    <submit-button class="spacer" @click="performLogin">Войти в личный кабинет</submit-button>
    <div class="bottom">
      <p v-if="invalidCredentials" class="error">Неправильный логин или пароль</p>
      <router-link to="" class="forgot">Забыли пароль?</router-link>
    </div>
  </div>
</template>


<style scoped>
.login-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.spacer {
  margin: 0px 0px 16px 0px;
  width: 100%;
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
import TextInput from './TextInput.vue'
import SubmitButton from './SubmitButton.vue'

export default defineComponent({
  components: { TextInput, PasswordInput, SubmitButton },
  name: 'login-form',

  setup() {
    return {
      authRepository: new AuthRepository(),
      profileRepository: new ProfileRepository(),
    }
  },

  data() {
    return {
      login: 'admin@admin.sru',
      password: 'admin',
      invalidCredentials: false,
    }
  },

  methods: {
    performLogin() {
      this.authRepository.login(this.login, this.password)
        .then(() => {
          this.$router.go(0)
        })
        .catch(error => {
          if (error.response) {
            this.password = ''
            this.invalidCredentials = true
          }
        })
    },
  }
})
</script>
