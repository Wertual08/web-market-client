<template>
  <form @submit.prevent>
    <h4>Регистрация</h4>
    <my-input
      id="login"
      v-model="newUser.login"
      type="text"
      placeholder="логин"
      required
      minLength="5"
      maxLength="16"
      pattern="^[a-z\d_]+$"
    />
    <my-input
      id="password"
      v-model="newUser.password"
      type="text"
      placeholder="пароль"
      required
      minLength="5"
    />
    <my-input
      id="email"
      v-model="newUser.email"
      type="email"
      placeholder="email"
      required
      minLength="5"
      maxLength="320"
      pattern="^..*@..*\...*$"
    />
    <my-input
      id="telephone"
      v-model="newUser.phone"
      type="text"
      placeholder="телефон"
      minLength="4"
      maxLength="16"
      pattern="^\+\d*$"
      nullLable: true
    />
    <my-input
      id="name"
      v-model="newUser.name"
      type="text"
      placeholder="имя"
      maxLength="128"
      nullLable: true
    />
    <my-input
      id="surname"
      v-model="newUser.surname"
      type="text"
      placeholder="фамилия"
      maxLength="128"
      nullLable: true
    />
    <div class="badRequestMessage" v-if="badRequest">
      Ошибка регистрации<br>Проверьте введенные данные
    </div>
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="sendReq"
    >
      Войти
    </my-button>
  </form>
</template>


<style scoped>
form {
  width: 300px;
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  border-color: black;
  border: solid;
  border-width: 2px;;
}

my-input:focus:invalid {
  box-shadow: none;
}

my-input:invalid {
  box-shadow: 0 0 5px 1px red;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios"

export default defineComponent({
  name: 'registration-form',
  data() {
    return {
      badRequest: false,
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
      this.badRequest = false
      let body = {
        Login: this.newUser.login,
        Password: this.newUser.password,
        Email: this.newUser.email,
        Phone: this.newUser.phone,
        Name: this.newUser.name,
        Surname: this.newUser.surname
      };
      let json = JSON.stringify(body);
      console.log(json);
      axios
        .post("/api/auth/register", json, {
          headers: { "Content-Type": "application/json" }
        })
        .then((Response) => {
          console.log(Response)
          this.$emit('reg', this.newUser.login)
          this.newUser.login = ""
          this.newUser.password = ""
          this.newUser.email = ""
          this.newUser.phone = ""
          this.newUser.name = ""
          this.newUser.surname = ""
        })
        .catch((err) => {
          console.log(err)
          this.badRequest = true
        })
    }
  }
})
</script>