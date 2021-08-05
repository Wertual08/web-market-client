<template>
  <div>{{  getID() }}</div>
  <div>{{getDesc()}}</div>
  <div>{{ getName()}}</div>
  <div>{{ getPrice()}}</div>
</template>

/* гори в аду Коля */
<script lang="ts">
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "ff",
  methods: {
    getID() {return this.product?.Id;},
    getDesc() {return this.product?.Description},
    getName() {return this.product?.Name},
    getPrice() {return this.product?.Price},

  },
  data() {
    return { product: null as any };
  },

  mounted() {
    console.log("/api/products/" + this.$route.params.id);
    axios.get("/api/products/" + this.$route.params.id).then((response) => {
      this.product = response.data;
      console.log(this.product?.Id);
    });
  },
});
</script>


<style scoped>
</style>
