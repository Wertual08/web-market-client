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
</style>


<script lang="ts">
import PasswordInput from './PasswordInput.vue'
import TextInput from './TextInput.vue'
import { defineComponent } from 'vue'
import SubmitButton from './SubmitButton.vue'
import AuthRepository from '@/repositories/authRepository'

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
      email: '',
      password: '',
      repeat: '',
    }
  },

  methods: {
    register() {
      this.authRepository.register(
        this.email,
        this.password,
        null,
        null,
        null,
      )
      .then(() => this.$router.go(0))
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
