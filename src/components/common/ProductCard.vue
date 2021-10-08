<template>
  <div class="product-card">
    <div class="fields">
      <router-link :to="to" class="name">{{ product.name }}</router-link>
      <p class="id">Артикул: {{ product.id }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
    <div class="interaction">
      <p class="price-full" v-if="product.oldPrice !== null">{{ product.oldPrice }}₽</p>
      <p class="price-current">{{ product.price }}₽</p>
      <slot/>
    </div>
  </div>
</template>


<style scoped>
.product-card {
  width: 100%;
  height: 100%;

  display: flex;
}

.product-card > .fields {
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.product-card > .fields > .name {
  color: #FAFAFA;

  margin: 8px 0px;
  padding: 0px;
  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;

  cursor: pointer;
}

.product-card > .fields > .name:hover {
  color: #AAAAAA;
}

.product-card > .fields > .id {
  color: #8C929F;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
}

.product-card > .fields > .description {
  color: #5C6175;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
}

.product-card > .interaction {
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.product-card > .interaction > .price-full {
  padding: 0px;
  margin: 0px;

  color: #C3C5CB;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;

  text-align: right;
  text-decoration-line: line-through;
}

.product-card > .interaction > .price-current {
  padding: 0px;
  margin: 0px;
  
  color: #FAFAFA;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;

  text-align: right;
}
</style>


<script lang="ts">
import LiteProduct from '@/models/liteProduct'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'product-card',

  props: {
    to: {
      type: String,
      required: true,
    },
    product: {
      type: Object as PropType<LiteProduct>,
      required: true,
    },
  },
})
</script>
