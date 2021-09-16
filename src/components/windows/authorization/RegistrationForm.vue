<template>
  <div class="registration-form">
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
    <submit-button class="submit" :disabled="!allValid" @click="register()">Зарегистрироваться</submit-button>
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
  margin: 0px 0px 16px 0px;
}

.passwords {
  width: 100%;
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
import TextInput from './TextInput.vue'
import { defineComponent } from 'vue'
import SubmitButton from './SubmitButton.vue'
import AuthRepository from '@/repositories/authRepository'
import Conflict from '@/models/conflict'

export default defineComponent({
  name: 'registration-form',

  components: { TextInput, PasswordInput, SubmitButton, },

  setup() {
    return {
      authRepository: new AuthRepository(),
      emailRegExp: /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i,
      passwordRegExp: /^.{5,}$/,
    }
  },
    
  data() {
    return {
      email: 'a@a.aa',
      password: 'aaaaa',
      repeat: 'aaaaa',
      emailConflict: false,
      unknownError: false,
    }
  },

  methods: {
    register() {
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
      .catch((conflict: Conflict) => {
        if (conflict.field == "Email") {
          this.emailConflict = true
        } else {
          this.unknownError = true
        }
      })
      .catch(() => this.unknownError = true)
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
