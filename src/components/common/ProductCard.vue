<template>
  <div class="product-card">
    <div class="fields">
      <p class="name">{{ product.name }}</p>
      <p class="id">Артикул: {{ product.id }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
    <div class="interaction">
      <p class="price-full" v-if="true">{{ 'AssPlug' }}₽</p>
      <p class="price-current">{{ product.price }}₽</p>
      <div class="controls">
        <quantity-input class="quantity" v-model="selectedQuantity"/>
        <action-button class="submit" @add-to-cart="addCart">Добавить в корзину</action-button>
      </div>
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

.controls {
  max-width: 245px;
  height: 48px;

  margin: 16px 0px;
  padding: 0px;

  display: flex;
}

.quantity {
  width: 40%;
  margin-right: 8px; 
}

.submit {
  width: 60%;
}
</style>


<script lang="ts">
import QuantityInput from '@/components/common/QuantityInput.vue'
import ActionButton from '@/components/common/ActionButton.vue'
import SearchProduct from '@/models/searchProduct'
import CartRepository from '@/repositories/cartRepository'
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'product-card',

  components: {
    QuantityInput,
    ActionButton,
  },

  props: {
    product: {
      type: SearchProduct,
      required: true,
    },
  },

  setup() {
    return {
      cartRepository: new CartRepository()
    }
  },

  data() {
    return {
      selectedQuantity: 1
    }
  },

  methods: {
    addCart() {
      let id = this.product.id
      this.cartRepository.addCart(id, this.selectedQuantity)
    }
  }
})
</script>
