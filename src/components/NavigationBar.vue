<template>
  <div id="box">
    <div id="top-info">
      <img class="logo" src="../assets/logo.png" alt="vue logo" />

      <div class="contacts">
        <a class="phone" href="tel:+89165782648">8 (916) 578-26-48</a>
        <p class="email">email@mail.com</p>
      </div>
    </div>

    <div class="navigation">
      <router-link class="section" to="/">Главная</router-link>
      <router-link class="section" to="/catalog">Запчасти</router-link>
      <router-link class="section" to="/">Доставка и оплата</router-link>
      <router-link class="section" to="/">Информация</router-link>
      <router-link class="section" to="/about">Контакты</router-link>
      <div v-if="admin">
        <router-link class="section" to="/admin">Управление</router-link>
      </div>
    </div>
  </div>
</template>


<style scoped>
#box {
  display: flex;
  justify-content: center;
}

#top-info {
  display: flex;
}

.logo {
  width: 40px;
  height: 40px;
  padding: 10px;
}

.contacts {
  padding: 10px;
}

.contacts > .phone {
  margin: 1px;
}

.contacts > .email {
  margin: 1px;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.section {
  height: 40px;
  width: 120px;

  text-decoration: none;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
  

  color: black;
}

.section:hover {
  color: skyblue;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'navigation-bar',

  props: {
    admin: {
      type: Boolean,
      default: false,
    }
  },
})
</script>
