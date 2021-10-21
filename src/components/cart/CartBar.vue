<template>
  <div class="cartBar">
    <div class="content">
      <div class="cartInfo" v-if="cartAmount > 0">
        В корзине видов товаров: {{ cartAmount }}, стоимость заказа: {{ cartTotalPrice.toFixed(2) }}₽
      </div>
      <div class="cartInfo" v-else>
        Корзина пуста
      </div>
      <div class="cartTools">
        <action-button class="tool" @click="$emit('empty-cart')">Очистить корзину</action-button>
        <action-button class="tool">Оформить заказ</action-button>
      </div>
    </div>
  </div>
</template>

<style>
  .cartBar {
    width: 100%;
    height: 75px;
    background-color: #355396;
    
    position: sticky;
    top: 75px;
    z-index: 100;

    color: white;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    display: flex;
    justify-content: center;
  }

  .content {
    width: 80%;

    display: flex;
    justify-content: space-between;
  }

  .cartInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cartTools {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 400px;
    height: 48px;

    margin: 16px 0px;
    padding: 0px;
  }

  .tool {
    margin-left: 16px;
  }
</style>

<script lang="ts">
import ActionButton from '@/components/common/ActionButton.vue'
import CartRepository from '@/repositories/cartRepository'

export default {
  name: 'cart-bar',

  components: {
    ActionButton
  },

  emits: ['empty-cart'],

  setup() {
    return {
      cartRepository: new CartRepository()
    }
  },

  computed: {
    cartAmount(): number {
      return this.cartRepository.getAmount() ?? 0
    },
    cartTotalPrice(): number {
      return this.cartRepository.getTotalPrice() ?? 0
    }
  }
}
</script>