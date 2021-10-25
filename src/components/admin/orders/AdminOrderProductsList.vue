<template>
  <div class="admin-order-products-list">
    <div class="card" v-for="product in products" :key="product.id">
      <p class="info">Артикул: {{ product.code }}</p>
      <router-link :to="`/catalog/${product.id}`" class="name">{{ product.name }}</router-link>
      <p class="info">Количество: {{ amounts.get(product.id) }} </p>
      <p class="info">Цена: {{ product.price.toFixed(2) }}₽</p>
    </div>
    <p class="total">Общая стоимость заказа: {{ totalPrice.toFixed(2) }}₽</p>
  </div>
</template>


<style scoped>
.admin-order-products-list {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.admin-order-products-list > .card {
  width: 90%;

  overflow: hidden;

  border-bottom: 1px solid #355396;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.admin-order-products-list > .card > .name {
  color: #FAFAFA;

  margin: 8px 0px;
  padding: 0px;
  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 130%;

  cursor: pointer;
}
.admin-order-products-list > .card > .name:hover {
  color: #AAAAAA;
}

.admin-order-products-list > .card > .info {
  color: #8C929F;

  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
}

.admin-order-products-list > .total {
  width: 90%;
  color: white;

  margin: 32px 0px;
  padding: 0px;
  text-decoration: none;

  text-align: left;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
}
</style>


<script lang="ts">
import LiteProduct from '@/models/liteProduct'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'admin-order-products-list',

  props: {
    products: {
      type: Array as PropType<LiteProduct[]>,
      required: true,
    },
    amounts: {
      type: Object as PropType<Map<number, number>>,
      required: true,
    }, 
  },

  setup() {
        
  },

  computed: {
    totalPrice(): number {
      let price = 0
      this.products.forEach(product => {
        price += (this.amounts.get(product.id) ?? 0) * product.price
      });
      return price
    } 
  }
})
</script>
