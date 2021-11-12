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
  min-height: 100%;
} 

body {
  width: 100%;
  min-height: 100%;
  margin: 0;
  padding: 0;
  background: red;
}

#app {
  width: 100%;
  min-width: 1130px;
  min-height: 100vh;

  background: lightseagreen;

  font-family: Inter;
  text-align: center;
}

#content {
  width: 100%;
  min-height: calc(100vh - 425px);

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
