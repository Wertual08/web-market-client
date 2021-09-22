<template>
  <div id="box">
    <slider id="image-slider">    
      <div class="slide">
        <input>
        <button>BUTTON</button>
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/rock.jpg">
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/grooves.jpg">
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/arch.jpg">
      </div>
      <div class="slide">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/5689/sunset.jpg">
      </div>
      <div class="slide">
        SUPERSHIT
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLMl4_ScwHun3sWMAmlDsshDOzMCpJIWXsXQ">
      </div>
    </slider>
    <div id="properties">
      <h1>{{ product.id }}</h1>
      <label>Name</label>
      <input v-model="product.name"/><br>
      <label>Price</label>
      <input type="number" v-model="product.price"/><br>
      <label>Description</label>
      <input v-model="product.description"/><br>
      <p>Created at: {{ product.createdAt }}</p>
      <p>Updated at: {{ product.updatedAt }}</p>
      <button class="save-button" @click="save">Save</button>
    </div>
  </div>
</template>


<style scoped>
#box {
  width: 100%;
  height: 100%;
  display: flex;
}

#image-slider {
  width: 250px;
  height: 300px;
}

#properties {
  width: 100%;
  /* display: flex;
  flex-direction: column;
  justify-content: flex-start; */
  text-align: left;
}
 
.slide {
  width: 100%;
}

img {
  width: 100%;
}
</style>


<script lang="ts">
import Product from '@/models/admin/product'
import { defineComponent } from 'vue'
import ProductsRepository from '@/repositories/admin/productsRepository'
import Slider from '@/components/common/Slider.vue'
import PutProductRequest from '@/repositories/requests/admin/putProductRequest';

export default defineComponent({
  name: "admin-product-page",

  setup() {
    return {
      productsRepository: new ProductsRepository(),
    }
  },

  components: {
    Slider,
  },

  data() {
    return {
      product: new Product()
    }
  },

  mounted() {
    this.productsRepository.getProduct(+this.$route.params.id)
      .then(product => this.product = product)
  },

  methods: {
    save() {
      const request = new PutProductRequest(this.product)
      this.productsRepository.putProduct(request)
        .then(response => this.product = response)
    }
  },
});
</script>