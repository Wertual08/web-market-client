<template>
  <form @submit.prevent>
    <h4>Регистрация</h4>
    <my-input
      v-model="newUser.login"
      type="text"
      placeholder="логин"
    />
    <my-input
      v-model="newUser.password"
      type="texe"
      placeholder="пароль"
    />
    <my-input
      v-model="newUser.email"
      type="text"
      placeholder="email"
    />
    <my-input
      v-model="newUser.phone"
      type="text"
      placeholder="телефон"
    />
    <my-input
      v-model="newUser.name"
      type="text"
      placeholder="имя"
    />
    <my-input
      v-model="newUser.surname"
      type="text"
      placeholder="фамилия"
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
  name: 'registration-form',
  data() {
    return {
      newUser: {
        login: "",
        password: "",
        email: "",
        phone: "",
        name: "",
        surname: ""
      }
    }
  },
  methods: {
    sendReq() {
      let body = {
        Login: this.newUser.login,
        Password: this.newUser.password,
        Email: this.newUser.email,
        Phone: this.newUser.phone,
        Name: this.newUser.name,
        Surname: this.newUser.surname
      };
      let json = JSON.stringify(body);
      axios
        .post("/api/auth/register", json, {
          headers: { "Content-Type": "application/json" }
        })
        .then((Response) => {
          console.log(Response)
        })
        .catch((err) => {
          console.log(err);
        })
    }
  }
})
</script>

<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>