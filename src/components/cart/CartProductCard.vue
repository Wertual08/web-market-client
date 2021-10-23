<template>
  <product-card :to="to" :product="product">
    <p class="amount">{{ amount }} шт.</p>
    <div class="controls">
      <action-button class="remove" @click="$emit('remove', product.id)">Удалить</action-button>
    </div>
  </product-card>
</template>


<style scoped>
.amount {
  color: #C3C5CB;

  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 160%;

  text-align: right;
}

.controls {
  width: 150px;
  max-width: 150px;
  height: 48px;

  margin: 16px 0px;
  padding: 0px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
}

.controls > .remove {
  width: 64px;
  height: 32px;
}
</style>


<script lang="ts">
import LiteProduct from '@/models/liteProduct'
import { defineComponent, PropType } from 'vue'
import ActionButton from '../common/ActionButton.vue'
import ProductCard from '../common/ProductCard.vue'

export default defineComponent({
  name: 'cart-product-card',

  components: { ProductCard, ActionButton },

  emits: ['remove'],

  optionalProps: true,

  props: {
    product: {
      type: Object as PropType<LiteProduct>,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    to: {
      type: String,
      required: true,
    }
  },
})
</script>
