<template>
  <form @submit.prevent>
    <h4>Вход</h4>
    <my-input
      v-model="user.login"
      type="text"
      placeholder="логин"
    />
    <my-input
      v-model="user.password"
      type="text"
      placeholder="Пароль"
    />
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="sendReq"
    >
      Войти
    </my-button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios"

export default defineComponent({
  data() {
    return {
      user: {
        login: "",
        password: ""
      },
      showError: false,
    }
  },
  methods: {
    sendReq: function () {
      console.log(this.user.login)
      let body = {
        Login: this.user.login,
        Password: this.user.password,
      };
      let json = JSON.stringify(body);
      axios
        .post("/api/auth/login", json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((Response) => {
          //this.refreshToken = Response.data.RefreshToken;
          //this.accessTokes = Response.data.AccessTokes;
        })
        .catch((err) => {
          console.log(err);
          this.showError = true;
          this.user.password = "";
        });
    },
  },
})
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>