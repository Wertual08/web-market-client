<template>
  <div id="register">
    <p id="sign-in">
      <button сlass="show-modal-button" @click="showModal">Войти</button>
      <my-modal v-model:show="modalVisible">
        <sign-in-form/>
      </my-modal>
    </p>
    <p id="sign-up">
      <button @click="Registered">Регистрация</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import MyModal from "@/components/UI/MyModal.vue";
import SignInForm from "@/components/SingInForm.vue"

export default defineComponent({
  name: 'not-signed-login-panel',
  data() {
    return {
      modalVisible: false
    }
  },
  components: {
    MyModal,
    SignInForm
  },
  methods: {
    showModal() {
      this.modalVisible = true
    },
    Registered() {
/*       if (this.$refs.modal.Flag) {
        document.getElementById("register").innerHTML =
          this.$refs.modal.message_user;
        console.log(1);
      } */
    },
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
