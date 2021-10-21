<template>
  <router-link class="link" to="/cart">
    <div class="box">
      <img src="@/assets/ic_cart.svg">
      <p>Корзина</p>
      <div class="count">
        {{ cartAmount }}
      </div>
    </div>
  </router-link>
</template>


<style scoped>
.link {
  text-decoration: none;
}

.box {
  cursor: pointer;
  color: white;
  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.box:hover {
  color: lightgray;
}

.box > img {
  width: 18px;
  height: 20px;
}

.box > p {
  padding: 0px 16px;
}

.box > .count {
  width: 16px;
  height: 16px;

  background: #E04040;
  border-radius: 50%;

  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import CartRepository from '@/repositories/cartRepository'

export default defineComponent({
  name: 'cart-card',

  setup() {
    return {
      cartRepository: new CartRepository(),
    }
  },

  computed: {
    cartAmount(): number {
      return this.cartRepository.getAmount() ?? 0
    }
  }
})
</script>
