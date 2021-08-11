<template>
  <div id="register">
    <p id="sign-in">
      <button сlass="show-modal-button" @click="showModal">Войти</button>
      <modal-window v-model:show="modalVisible" />
    </p>
    <p id="sign-up">
      <button @click="Registered">Регистрация</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import ModalWindow from "@/components/ModalWindow.vue";

export default defineComponent({
  data() {
    return {
      modalVisible: false
    }
  },
  components: {
    ModalWindow,
  },
  setup () {
    const modal = ref<InstanceType<typeof ModalWindow>>()
    return {modal}
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
