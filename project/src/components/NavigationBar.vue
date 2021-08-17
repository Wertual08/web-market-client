<template>
  <div id="navigationBar">
    <div class="navbar__btns">
      <my-button @click="$router.push('/')">Главная</my-button>
      <my-button @click="$router.push('/catalog')">Запчасти</my-button>
      <my-button>Доставка и оплата</my-button>
      <my-button>Информация</my-button>
      <my-button @click="$router.push('/about')">Контакты</my-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// import TreeView from "@/components/TreeView.vue"

export default defineComponent({
  components: {
    // TreeView
  },
})
</script>

<style scoped>
#navigationBar {
  background-color: rgb(250, 250, 250);
}

button {
  height: 35px;
  width: 160px;
}
</style>
