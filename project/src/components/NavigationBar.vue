<template>
  <div id="navigationBar">
    <p>{{TreeView}}</p>
    <button>Главная</button>
    <button>Запчасти</button>
    <button>Доставка и оплата</button>
    <button>Полезная информация</button>
    <button>Контакты</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TreeView from "@/components/TreeView.vue"

export default defineComponent({
  components: {
    TreeView
  },
})
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
