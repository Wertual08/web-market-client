<template>
  <div id="register">
    <p id="sign-in">
      <button сlass="show-modal-button" @click="showModal">Войти</button>
      <my-modal v-model:show="modalVisible" @show_to_false="showToFalse">
        <sign-in-form @signed="signedIn"/>
      </my-modal>
    </p>
    <p id="sign-up">
      <button @click="Registered">Регистрация</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SignInForm from "@/components/SingInForm.vue"

export default defineComponent({
  name: 'not-signed-login-panel',
  // props: {
  //   login: {
  //     type: String,
  //     default: "login not found"
  //   }
  // },
  data() {
    return {
      modalVisible: false
    }
  },
  components: {
    SignInForm
  },
  methods: {
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
