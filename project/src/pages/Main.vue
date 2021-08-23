<template>
  <div class = 'main'>
    <SearchBar/>
    <div id="container">
      <div class="work_in_progress">work in progress</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({});
</script>


<style>

.main{
   background-color: rgba(169, 241, 241, 0.377);
   width: auto;
    min-height: 1080px;
}
.work_in_progress {
  font: bold 10em "Fira Sans", serif;
}
#container {
  width: 1500px;
 background-color: rgba(98, 0, 255, 0.11);
  margin-left: auto;
  margin-right: auto;
  min-height: 1080px;
 
}
</style>