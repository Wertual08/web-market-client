<template>
  <div v-if="show" class="modal-shadow" @click.self="closeModal">
    <div class="modal">
      <div class="modal-close" @click="closeModal">&#10006;</div>
      <slot name="title">
        <h3 class="modal-title">Ввведите данные пользователя</h3>
      </slot>
      <slot name="body">
        <div class="modal-content">
          <div>Введите никнейм:</div>
          <input v-model="message_user" placeholder="username" />
          <div>Введите пароль:</div>
          <input
            v-model="message_password"
            placeholder="password"
            type="password"
          />
          <div v-if="showError" class="wrong-login">
            Неверный логин или пароль
          </div>
        </div>
      </slot>
      <slot name="footer">
        <div class="modal-footer">
          <button class="modal-footer__button" v-on:click="sendReq">
            Войти
          </button>
        </div>
      </slot>
    </div>
  </div>
</template>
 
<script lang="ts">
import { defineComponent } from 'vue'
import axios from "axios"

export default defineComponent({
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      showError: false,
      message_user: "",
      message_password: "",
      submitted: false,
      refreshToken: "",
      accessTokes: "",
    };
  },
  methods: {
    closeModal: function () {
      console.log("closing started")
      this.$emit('update:show', false)
    },
    sendReq: function () {
      let body = {
        Login: this.message_user,
        Password: this.message_password,
      };
      let json = JSON.stringify(body);
      axios
        .post("/api/auth/login", json, {
          headers: { "Content-Type": "application/json" },
        })
        .then((Response) => {
          this.refreshToken = Response.data.RefreshToken;
          this.accessTokes = Response.data.AccessTokes;
          // тут закрываем модальное окно и обновляем TopInfo
          this.message_password = "";
          this.closeModal();
        })
        .catch((err) => {
          console.log(err);
          this.showError = true;
          this.message_password = "";
        });
    },
  },
})
</script>
 
<style scoped>
.modal-shadow {
  position: absolute;
  top: 0;
  left: 0;
  min-height: 100%;
  width: 100%;
  background: rgba(207, 8, 8, 0.39);
}
.modal {
  background: #fff;
  border-radius: 8px;
  padding: 15px;
  min-width: 420px;
  max-width: 480px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.modal-close {
  border-radius: 50%;
  color: #fff;
  background: #2a4cc7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 7px;
  right: 7px;
  width: 30px;
  height: 30px;
  cursor: pointer;
}
.modal-title {
  color: #0971c7;
  margin-bottom: 20px;
}
.modal-content {
  margin-bottom: 20px;
}
.modal-footer__button {
  background-color: #0971c7;
  color: #fff;
  border: none;
  text-align: center;
  padding: 8px;
  font-size: 17px;
  font-weight: 500;
  border-radius: 8px;
  min-width: 150px;
}
</style>