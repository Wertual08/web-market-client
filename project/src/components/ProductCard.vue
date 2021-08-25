<template>
  <div class="box">
    <div>
      <router-link
        class-active="product-link"
        class="product-link"
        :to="{ path: `/product/${product.id}` }"
        tag="div"
      >
        <a>Артикул: {{ product.id }}</a>
        <img class="product-image" :src="coverImage" style="display: block"/>
        <p class="product-name">{{ product.name }}</p>
        <p class="product-description">{{ product.description }}</p>
      </router-link>
    </div>
    
    <div class="cart-button" @click="$emit('add-cart', product.id)">
      <img class="cart-image" src="@/assets/cart.png">
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/models/product";

export default defineComponent({
  emits: ['add-cart'],

  data() {
    return {
    };
  },
  
  mounted() {
  },

  props: {
    product: Product
  },

  methods: {
  },

  computed: {
    coverImage(): string {
      let records: string[] = this.product?.records ?? []
      
      if (records.length > 0) {
        return records[0];
      } else {
        return require('@/assets/meme.gif')
      }
    },
  }
});
</script>


<style scoped>
.box {
  display: flex;
  flex-flow: column;
  height: 100%;
}

.product-link {
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: inline;
  color: black;
  text-decoration: none;
  text-align: center;
}

.product-name {
  height: 20px;
  margin-top: 1px;
  margin-bottom: 0px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  text-overflow: ellipsis;
  height: 38px;
  overflow: hidden;
}

.product-description {
  text-overflow: ellipsis;
  height: 38px;
  overflow: hidden;
  margin-top: 10px;
}

.product-image {
  width: 200px;
  height: 100px;
  margin: 10px;
  align-content: center;
  margin-bottom: 0ch;
}

.cart-button {
  margin: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden
}

.cart-image {
  max-width: 100%;
  max-height: 100%
}
</style>