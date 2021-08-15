<template>
  <div id="navigationBar">
    <div class="navbar__btns">
      <button @click="$router.push('/')">Главная</button>
      <button @click="$router.push('/catalog')">Запчасти</button>
      <button>Доставка и оплата</button>
      <button>Полезная информация</button>
      <button @click="$router.push('/about')">Контакты</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>

<style scoped>
#navigationBar {
  background-color: lightslategray;
}

button {
  height: 35px;
  width: 160px;
}
</style>
