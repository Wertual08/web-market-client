<template>
  <div id="container">
    <div class="work_in_progress">work in progress</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>


<style>
.work_in_progress {
  font: bold 10em "Fira Sans", serif;
}
#container {
  width: 1500px;
  background-color: rgb(207, 204, 204);
  margin-left: auto;
  margin-right: auto;
  min-height: 1080px;
}
</style>