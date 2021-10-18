<template>
  <div class="cart">
    <cart-product-list/>
  </div>
</template>

<style scoped>

.cart {
  background: hsl(221, 59%, 24%);
  height: 100%;
  min-height: 1080px;

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