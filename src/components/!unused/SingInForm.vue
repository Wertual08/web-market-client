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
      type="password"
      placeholder="Пароль"
    />
    <div v-if="showError">
      Неправильный логин или пароль
    </div>
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
  name: 'sign-in-form',
  data() {
    return {
      user: {
        login: "",
        password: "",
        refreshToken: 0,
        accessToken: 0
      },
      showError: false,
    }
  },
  methods: {
    sendReq: function () {
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
          this.showError = false
          this.user.refreshToken = Response.data.RefreshToken;
          this.user.accessToken = Response.data.AccessToken;
          this.$emit('signed', this.user.login, this.user.accessToken, this.user.refreshToken)
          this.user.login = "",
          this.user.password = ""
        })
        .catch((err) => {
          console.log(err);
          this.showError = true;
          this.user.password = ''
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