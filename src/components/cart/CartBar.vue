<template>
  <div class="cart-bar">
    <div class="content">
      <p class="cartInfo" v-if="totalAmount > 0">
        Стоимость заказа: {{ totalPrice.toFixed(2) }}₽
      </p>
      <p class="cartInfo" v-else>Корзина пуста</p>
      <div class="cartTools">
        <action-button class="tool" v-if="totalAmount > 0" @click="$emit('empty-cart')">Очистить корзину</action-button>
        <action-button class="tool" v-if="totalAmount > 0" @click="$emit('submit-cart')">Оформить заказ</action-button>
      </div>
    </div>
  </div>
</template>

<style>
  .cart-bar {
    width: 100%;
    height: 75px;
    background-color: #192F60;

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
import { defineComponent } from 'vue'
import ActionButton from '@/components/common/ActionButton.vue'

export default defineComponent({
  name: 'cart-bar',

  components: {
    ActionButton
  },

  emits: ['empty-cart', 'submit-cart'],

  props: {
    totalPrice: {
      type: Number,
      required: true,
    },
    totalAmount: {
      type: Number,
      required: true,
    }
  },
})
</script>