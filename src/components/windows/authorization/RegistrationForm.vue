<template>
  <div class="registration-form">
    <text-input class="spacer" type="email" placeholder="E-mail"/>
    <div class="passwords spacer">
      <password-input class="password main-password" placeholder="Пароль"/>
      <password-input class="password" placeholder="Повторите пароль"/>
    </div>
    <submit-button class="submit">Зарегистрироваться</submit-button>
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

export default defineComponent({
  name: 'registration-form',

  components: { TextInput, PasswordInput, SubmitButton, },

  setup() {
    
  },
    
})
</script>
