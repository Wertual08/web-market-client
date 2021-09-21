<template>
  <div class="cart">
    <cart-product-list/>
  </div>
</template>

<style scoped>
.cart {
  background: #192F60;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue'
import CartProductList from '@/components/cart/CartProductsList.vue'

export default defineComponent({
  name: 'cart-view',

  components: {
    CartProductList
  }
});
</script>