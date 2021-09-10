<template>
  <div id="box">
    <router-link class="section" to="/">Главная</router-link>
    <router-link class="section" to="/catalog">Запчасти</router-link>
    <router-link class="section" to="/">Доставка и оплата</router-link>
    <router-link class="section" to="/">Информация</router-link>
    <router-link class="section" to="/about">Контакты</router-link>
    <div v-if="admin">
      <router-link class="section" to="/admin">Управление</router-link>
    </div>
  </div>
</template>


<style scoped>
#box {
  display: flex;
  align-items: center;
  justify-content: center;
}

.section {
  height: 30px;
  width: 120px;

  text-decoration: none;

  display: flex;
  justify-content: center;
  align-items: center;

  background: lightblue;
  color: teal;
  border: 1px solid teal;

  color: black;
}

.section:hover {
  background: skyblue;
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
