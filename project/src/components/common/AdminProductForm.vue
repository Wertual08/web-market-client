<template>
  <div style="box">
    <slider class="slider">    
      <img class="slide" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg">
      <img class="slide" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg">
      <img class="slide" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg">
      <img class="slide" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg">
      <img class="slide" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMl4_ScwHun3sWMAmlDsshDOzMCpJIWXsXQ">
    </slider>
    <div class="properties">
      <h1>{{ product.id }}</h1>
      <label>Name</label>
      <input v-model="product.name"/><br>
      <label>Price</label>
      <input type="number" v-model="product.price"/><br>
      <label>Description</label>
      <input v-model="product.description"/><br>
      <p>Created at: {{ product.createdAt }}</p>
      <p>Updated at: {{ product.updatedAt }}</p>
      <button class="save-button" @click="$emit('save')">Save</button>
    </div>
  </div>
</template>

<script lang="ts">
import Product from '@/models/admin/product'
import { defineComponent } from "vue"
import Slider from './Slider.vue';

export default defineComponent({
  name: "admin-product-form",

  props: {
    product: Product
  },

  components: {
    Slider,
  },

  data() {
    return {
    }
  },

  mounted() {
  },

  methods: {
  },
});
</script>


<style scoped>
.box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-flow: column;
}

.slider {
  width: 260pt;
  height: 260pt;
}

.slide {
  width: 100%;
  height: 100%;
}

.save-button {
  width: 50pt;
  height: 20pt;
}
</style>
