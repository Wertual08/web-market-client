<template>
  <div class="product-card">
    <div class="picture-box">
      <img :src="productImage" class="picture">
    </div>
    <div class="fields">
      <router-link :to="to" class="name">{{ product.name }}</router-link>
      <p class="id">Артикул: {{ product.code }}</p>
      <p class="description">{{ product.description }}</p>
    </div>
    <div class="interaction">
      <p class="price-full" v-if="product.oldPrice !== null">{{ product.oldPrice.toFixed(2) }}₽</p>
      <p class="price-current">{{ product.price.toFixed(2) }}₽</p>
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

.product-card > .picture-box {
  width: 20%;
  height: 100%;

  margin: 8px;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
}

.product-card > .picture-box > .picture {
  max-width: 100%;
  max-height: 100%;
  border-radius: 8px;

  pointer-events: none;
  user-select: none;
}

.product-card > .fields {
  width: 70%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.product-card > .fields > .name {
  color: #FAFAFA;

  margin: 8px 0px;
  padding: 0px;
  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;

  cursor: pointer;
}

.product-card > .fields > .name:hover {
  color: #AAAAAA;
}

.product-card > .fields > .id {
  color: #8C929F;

  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
}

.product-card > .fields > .description {
  color: #5C6175;

  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 160%;
}

.product-card > .interaction {
  width: 30%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
}

.product-card > .interaction > .price-full {
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

.product-card > .interaction > .price-current {
  padding: 0px;
  margin: 0px;
  
  color: #FAFAFA;

  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 140%;

  text-align: right;
}
</style>


<script lang="ts">
import LiteProduct from '@/models/liteProduct'
import RecordsRepository from '@/repositories/recordsRepository'
import { defineComponent, PropType } from 'vue'

export default defineComponent({
  name: 'product-card',

  props: {
    to: {
      type: String,
      required: true,
    },
    product: {
      type: Object as PropType<LiteProduct>,
      required: true,
    },
  },

  computed: {
    productImage() {
      return RecordsRepository.toUrl(this.product.image)
    }
  }
})
</script>
