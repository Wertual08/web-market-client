<template>
  <div class = 'main'>
    <h1 class = 'ff'>
      <input class = 'search' type="search" name="q" placeholder="Поиск по сайту" />
      <input class = 'but' type="submit" value="Найти" />
    </h1>
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
.but{
  position: relative;
  left: 10px;
  background-color: #0f8397;
  border: none;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
}
.ff{margin-top: 0px;}
.search{
  border: 1px outset;
  text-align: center;
  width: 1000px;
  margin: 0px;
  height: 30px;
  position: relative;
  margin-bottom: 10px;
  background-color: rgba(204, 207, 207, 0.356);
}
.search:focus{
  border: 3px inset #555;
}
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