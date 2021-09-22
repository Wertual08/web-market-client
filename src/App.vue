<template>
  <div id="app">
    <app-header/>
    <router-view/>
    <app-footer/>
  </div>
</template>


<style>
@import url('https://rsms.me/inter/inter.css');

body {
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  max-height: 100%;

  font-family: Inter;
  text-align: center;

  display: flex;
  flex-direction: column;
  overflow: visible;
}

</style>


<script lang="ts">
import { defineComponent } from "vue"
import AppHeader from "@/components/header/AppHeader.vue"
import AppFooter from './components/AppFooter.vue'

export default defineComponent({
  components: {
    AppHeader,
    AppFooter
  },
})
</script>
