<template>
  <div>
    <div id="box">
      <input type="text" 
        class="query" 
        placeholder="Поиск товара..." 
        v-model="query" 
        @keyup.enter="submit"
      >
      <img src="@/assets/ic_search.svg" 
        alt="search" 
        class="search" 
        @click="submit"
      >
    </div>
  </div>
</template>


<style scoped>
#box {
  position: relative;
}

.query {
  width: 210px;
  height: 40px;
  box-sizing: border-box;

  padding-left: 16px;
  padding-right: 40px;

  color: white;
  background: #00174A;
  border-radius: 6px;
  border: none;

  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.query:focus {
  outline: none;
}

.query::placeholder {
  color: #C3C5CB;
  padding: 9px 16px;
}

.search {
  position: absolute;
  bottom: 12px;
  right: 14px;
  width: 16px;
  height: 16px;

  cursor: pointer;
}

.search:hover {
  filter: brightness(150%);
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'search-card',

  data() {
    return {
      query: '',
    }
  },

  methods: {
    submit() {
      this.$router.push({
        name: 'CatalogView',
        force: true,
        params: { 
          launch: this.query 
        },
      })
    }
  }
})
</script>
