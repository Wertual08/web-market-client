<template>
  <div class="product-card">
    <div class="fields">
      <p class="name">{{ product.name }}</p>
      <p class="id">Артикул: {{ product.id }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
    <div class="interaction">
      <prop/>
    </div>
  </div>
</template>


<style scoped>
.product-card {
  width: 100%;
  height: 100%;

  display: flex;
}

.fields {
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.name {
  color: #FAFAFA;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
}

.id {
  color: #8C929F;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
}

.description {
  color: #5C6175;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
}

.interaction {
  width: 30%;
}
</style>


<script lang="ts">
import Product from '@/models/product'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'product-card',

  props: {
    product: Product,
  },

  setup() {
    
  },
})
</script>
