<template>
  <div class="catalog-product-details">
    <div class="left">
      <slider class="slider">    
        <div class="slide" v-for="(image, index) in product.records" :key="index">
          <img class="image" :src="image"/>
        </div>
      </slider>
      <p class="id">Артикул: {{ product.id }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
    <div class="right">
      <p class="name">{{ product.name }}</p>
      <div class="bottom">
        <p class="old-price">{{ product.oldPrice }}</p>
        <p class="price">{{ product.price }}</p>
        <div class="controls">
          <quantity-input class="quantity" v-model="selectedQuantity" :min="1"/>
          <action-button class="submit" @click="addCart">Добавить в корзину</action-button>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.catalog-product-details {
  display: flex;
}

.catalog-product-details > .left {
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.catalog-product-details > .left > .slider {
  width: 100%;
  height: 350px;

  border-radius: 10pt;
  background: #355396;
}

.slide {
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
}

.slide > .image {
  max-width: 100%;
  max-height: 100%;
}

.catalog-product-details > .left > .id {
  color: #8C929F;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
}

.catalog-product-details > .left > .description {
  color: #5C6175;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
}

.catalog-product-details > .right {
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.catalog-product-details > .right > .name {
  color: #FAFAFA;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
}

.catalog-product-details > .right > .bottom {
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.catalog-product-details > .right > .bottom > .controls {
  max-width: 245px;
  height: 48px;

  display: flex;
}

.catalog-product-details > .right > .bottom > .controls > .quantity {
  width: 40%;
  margin-right: 8px; 
}

.catalog-product-details > .right > .bottom > .controls > .submit {
  width: 60%;
}

.catalog-product-details > .right > .bottom > .old-price {
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

.catalog-product-details > .right > .bottom > .price {
  padding: 0px;
  margin: 16px 0px;
  
  color: #FAFAFA;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;

  text-align: right;
}
</style>


<script lang="ts">
import Product from '@/models/product'
import { defineComponent, PropType } from 'vue'
import Slider from '@/components/common/Slider.vue'
import QuantityInput from '@/components/common/QuantityInput.vue'
import ActionButton from '@/components/common/ActionButton.vue'

export default defineComponent({
  name: 'catalog-product-details',

  components: {
    Slider,
    QuantityInput,
    ActionButton,
  },

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    }
  },

  setup() {
        
  },

  data() {
    return {
      selectedQuantity: 1,
    }
  },

  methods: {
    addCart() {

    }
  }
})
</script>
