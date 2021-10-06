<template>
  <div class="registration-form" @keyup.enter="register()">
    <text-input class="spacer" placeholder="E-mail" 
      v-model="email" 
      :valid="emailRegExp.test(email)"
    />
    <div class="passwords spacer">
      <password-input class="password main-password" placeholder="Пароль" 
        v-model="password" 
        :valid="passwordRegExp.test(password)"
      />
      <password-input class="password" placeholder="Повторите пароль"
        v-model="repeat" 
        :valid="samePasswords" 
      />
    </div>
    <action-button class="submit" :disabled="!allValid" @click="register()">Зарегистрироваться</action-button>
    <div class="bottom">
      <p v-if="emailConflict" class="error">E-mail адрес уже используется</p>
      <p v-if="unknownError" class="error">Неизвестная ошибка, попробуйте позже</p>
    </div>
  </div>
</template>


<style scoped>
.registration-form {
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
}

.spacer {
  width: 100%;
  height: 48px;
  margin: 0px 0px 16px 0px;
  padding: 16px;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.passwords {
  width: 100%;
  height: 48px;
  display: flex;
}

.main-password {
  margin-right: 24px;
}

.password {
  width: 100%;
}

.submit {
  width: 100%;
  height: 48px;
}

.error {
  font-weight: 500;
  font-size: 12px;
  
  text-decoration: none;
  color: red;
}
</style>


<script lang="ts">
import PasswordInput from './PasswordInput.vue'
import TextInput from '@/components/common/TextInput.vue'
import { defineComponent } from 'vue'
import ActionButton from '@/components/common/ActionButton.vue'
import AuthRepository from '@/repositories/authRepository'
import ConflictError from '@/models/errors/conflictError'

export default defineComponent({
  name: 'registration-form',

  components: { TextInput, PasswordInput, ActionButton, },

  setup() {
    return {
      authRepository: new AuthRepository(),
      emailRegExp: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      passwordRegExp: /^.{5,}$/,
    }
  },
    
  data() {
    return {
      email: '',
      password: '',
      repeat: '',
      emailConflict: false,
      unknownError: false,
    }
  },

  methods: {
    register() {
      if (this.allValid) {
        this.emailConflict = false
        this.unknownError = false

        this.authRepository.register(
          this.email,
          this.password,
          null,
          null,
          null,
        )
        .then(() => this.$router.go(0))
        .catch((conflict: ConflictError) => {
          if (conflict.field == "Email") {
            this.emailConflict = true
          } else {
            this.unknownError = true
          }
        })
        .catch(() => this.unknownError = true)
      }
    }
  },

  computed: {
    allValid(): boolean {
      return this.emailRegExp.test(this.email) &&
        this.passwordRegExp.test(this.password) &&
        this.password == this.repeat
    },
    samePasswords(): boolean {
      return this.password == this.repeat
    }
  }
})
</script>
