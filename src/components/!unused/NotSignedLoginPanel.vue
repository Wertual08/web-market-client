<template>
  <div id="register">
    <p id="sign-in">
      <button @click="showModal">Войти</button>
      <my-modal v-model:show="modalVisible" @show_to_false="showToFalse">
        <sign-in-form @signed="signedIn"/>
      </my-modal>
    </p>
    <p id="sign-up">
      <button @click="showRegModal">Регистрация</button>
      <my-modal v-model:show="regModalVisible" @show_to_false="showRegToFalse">
        <registration-form @reg="registered"/>
      </my-modal>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import SignInForm from "./SingInForm.vue"
import RegistrationForm from "./DEPRECATEDRegistrationForm.vue"

export default defineComponent({
  name: 'not-signed-login-panel',
  data() {
    return {
      modalVisible: false,
      regModalVisible: false
    }
  },
  components: {
    SignInForm,
    RegistrationForm
  },
  methods: {
    // sign-in modal methods
    showModal() {
      this.modalVisible = true
    },
    signedIn(login: any, accToken: any, refToken: any) {
      this.modalVisible = false
      this.$emit('signed', login, accToken, refToken)
    },
    hideModal() {
      this.modalVisible = false
    },
    showToFalse() {
      this.modalVisible = false
    },
    // registration modal methods
    showRegModal() {
      this.regModalVisible = true
    },
    registered(login: String) {
      this.regModalVisible = false
    },
    hideRegModal() {
      this.regModalVisible = false
    },
    showRegToFalse() {
      this.regModalVisible = false
    }
  },
});
</script>

<style scoped>
#sign-in {
  display: inline-block;
}

#sign-up {
  display: inline-block;
}
</style>
