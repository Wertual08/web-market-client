<template>
  <div class="product-card">
    <div class="fields">
      <p class="name">{{ cartProduct.product.name }}</p>
      <p class="id">Артикул: {{ cartProduct.product.id }}</p>
      <p class="description">{{ cartProduct.product.description }}</p>
    </div>
    <div class="interaction">
      <p class="price-full" v-if="true">{{ 'AssPlug' }}₽</p>
      <p class="price-current">{{ cartProduct.product.price }}₽</p>
      <p class="amount">{{ cartProduct.amount }} шт.</p>
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
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.price-full {
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

.price-current {
  padding: 0px;
  margin: 0px;
  
  color: #FAFAFA;

  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;

  text-align: right;
}

.amount {
  color: #C3C5CB;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;

  text-align: right;
}
</style>


<script lang="ts">
import CartProduct from '@/models/cartProduct'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cart-product-card',

  props: {
    cartProduct: CartProduct,
  },

  setup() {
    
  },
})
</script>
