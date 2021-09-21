<template>
  <div class="admin-product-card">
    <div class="cover-box">
      <img class="cover-image" :src="coverImage"> 
    </div>
    <div class="vertical-box">
      <router-link class="name" :to="`/admin/products/${product.id}`">
        {{ product.name }}
      </router-link>
      <div class="horizontal-box">
        <div class="specifications-box">
          Id: {{ product.id }}<br>
          Price: {{ product.price }}<br>
          Created at: {{ product.createdAt }}<br>
          Updated at: {{ product.updatedAt }}
          <div class="sections-box">
            <p class="section-label" v-for="section in product.sections" :key="section.name">
              {{ section }}
            </p>
          </div>
        </div>
        <p class="description">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

.admin-product-card {
  width: 90%;
  height: 200px;
  margin: 5px;
  background: white;
  border-radius: 10px;
  display: flex;
}

.vertical-box {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.horizontal-box {
  width: 100%;
  height: 100%;
  display: flex;
}

.cover-box {
  float: left;
  width: 200px;
  height: 100%;
  margin: 0px;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover-image {
  max-height: 90%;
  max-width: 90%;
  margin: auto;
  display: block;
  border-radius: 5px;
  border: black;
  border-width: 1px;
}

.name {
  width: 100%;
  vertical-align: top;
  font-weight: bold;
  font-size: 17px;
  text-align: left;
  text-decoration: none;
  margin: 0px;
  color: black;
}

.specifications-box {
  width: 250px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.description {
  vertical-align: top;
  text-align: left;
  margin: 0px;
  width: 100%;
  height: 100%;
}

.sections-box {
  display: flex;
  flex-wrap: wrap;
}

.section-label {
  background: lightgray;
  border-radius: 5px;
  padding: 0px 2px;
  margin: 2px;
}
</style>


<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/models/admin/product";

export default defineComponent({
  name: 'admin-product-card',

  emits: ['add-cart'],

  data() {
    return {
    }
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
        return require('@/assets/placeholder.jpg')
      }
    },
  }
});
</script>