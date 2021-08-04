<template>
  <div id="header">
    <TopInfo />
    <NavigationBar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopInfo from "@/components/TopInfo.vue"
import NavigationBar from "@/components/NavigationBar.vue"

export default defineComponent({
  components: {
    TopInfo,
    NavigationBar,
  },
})
</script>

<style scoped>
#header {
  background-color: lightcyan;
  padding: 8px 60px;
}
</style>