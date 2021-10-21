<template>
  <div class="password-update-window">
    <p class="title">Измение пароля</p>
    <password-input class="password" placeholder="Текущий пароль" v-model="currentPassword"/>
    <password-input 
      class="password"
      placeholder="Новый парль" 
      v-model="newPassword"
      :valid="passwordRegExp.test(newPassword)"
    />
    <password-input 
      class="password"
      placeholder="Повторите парль" 
      v-model="newRepeatPassword"
      :valid="samePasswords" 
    />
    <action-button class="apply-button" :disabled="!allValid" @click="applyPassword">Применить</action-button>
    <p class="wrong-password" v-if="wrongPassword">Неверный пароль</p>
  </div>
</template>


<style scoped>
.password-update-window {
  color: white;
  background: #00174A;
  border-radius: 12px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
}

.password-update-window > .title {
  margin: 16px;
}

.password-update-window > .password {
  width: 300px;
  height: 48px;

  margin: 0px 16px 16px 16px;
  padding: 0px 16px;

  box-sizing: border-box;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.password-update-window > .apply-button {
  width: 300px;
  height: 48px;
  
  margin: 0px 16px 16px 16px;
}

.password-update-window > .wrong-password {
  margin: 0px 16px 16px 16px;
  
  color: red;
  
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 100%;
}
</style>


<script lang="ts">
import ForbiddenError from '@/models/errors/forbiddenError'
import AuthRepository from '@/repositories/authRepository'
import { defineComponent } from 'vue'
import ActionButton from '../common/ActionButton.vue'
import PasswordInput from '../common/PasswordInput.vue'

export default defineComponent({
  components: { PasswordInput, ActionButton },
  name: 'password-update-window',

  emits: ['close'],

  setup() {
    return {
      authRepository: new AuthRepository(),
      passwordRegExp: /^.{5,}$/,
    }
  },

  data() {
    return {
      currentPassword: '',
      newPassword: '',
      newRepeatPassword: '',
      wrongPassword: false,
    }
  },

  computed: {
    samePasswords(): boolean {
      return this.newPassword == this.newRepeatPassword
    },
    allValid(): boolean {
      return this.passwordRegExp.test(this.newPassword) && this.newPassword == this.newRepeatPassword
    }
  },

  methods: {
    applyPassword() {
      this.authRepository.password(this.currentPassword, this.newPassword)
        .then(() => this.$emit('close'))
        .catch((error: ForbiddenError) => {
          this.wrongPassword = true
        })
    }
  },
})
</script>
