<template>
  <app-header/>
  <div id="content">
    <router-view/>
  </div>
  <app-footer/>
</template>


<style>
@import url('https://rsms.me/inter/inter.css');

html {
  height: 100%;
} 

body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
}

#app {
  width: 100%;
  height: 100%;

  background: lightseagreen;

  font-family: Inter;
  text-align: center;

  overflow: auto;
}

#content {
  width: 100%;
  min-height: calc(100% - 425px);

  background: #192F60;
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
