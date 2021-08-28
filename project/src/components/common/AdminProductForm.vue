<template>
  <div style="box">
    <h1>{{ product.id }}</h1>
    <p>Name</p>
    <input v-model="product.name"/>
    <p>Price</p>
    <input type="number" v-model="product.price"/>
    <p>Description</p>
    <input v-model="product.description"/>
    <p>Created at: {{ product.createdAt }}</p>
    <p>Updated at: {{ product.updatedAt }}</p>
    <button class="save-button" @click="$emit('save')">Save</button>
  </div>
</template>

<script lang="ts">
import Product from '@/models/admin/product'
import { defineComponent } from "vue"

export default defineComponent({
  name: "admin-product-form",

  props: {
    product: Product
  },

  components: {
  },

  data() {
    return {
    }
  },

  mounted() {
  },

  methods: {
  },
});
</script>


<style scoped>
.box {
  width: 100%;
  height: 100%;
}

.save-button {
  width: 50pt;
  height: 20pt;
}
</style>
