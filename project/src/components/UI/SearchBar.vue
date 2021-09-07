<template>
  <h1 class="ff">
    <input
      class="search"
      id="ff"
      type="search"
      name="query"
      placeholder="Поиск по сайту"
      v-model="request"
    />
    <input
      class="but"
      type="submit"
      value="Найти"
      v-on:keyup="
        $router.replace({
          name: 'SearchPage',
          params: { query: request },
        })
      "
      @click="
        $router.replace({
          name: 'SearchPage',
          params: { query: request },
        })
      "
    />
  </h1>
</template>
<script lang = 'ts'>
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchBar",
  data() {
    return { request: "" };
  },
});
</script>

<style  scoped>
.but {
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
.ff {
  margin-top: 0px;
}
.search {
  border: 1px outset;
  text-align: center;
  width: 1000px;
  margin: 0px;
  height: 30px;
  position: relative;
  margin-bottom: 10px;
  background-color: rgba(204, 207, 207, 0.356);
}
.search:focus {
  border: 3px inset #555;
}
</style>