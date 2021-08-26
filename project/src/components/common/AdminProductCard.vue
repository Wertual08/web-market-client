<template>
  <div class="box">
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
          <tr>
            <td class="section-label" v-for="section in product.sections" :key="section.name">
              {{ section }}
            </td>
          </tr>
        </div>
        <p class="description">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

.box {
  width: 90%;
  height: 100pt;
  margin: 5pt;
  background: white;
  border-radius: 10pt;
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
  width: 200pt;
  height: 100%;
  margin: 0pt;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.cover-image {
  max-height: 90%;
  max-width: 90%;
  margin: auto;
  display: block;
  border-radius: 5pt;
  border: black;
  border-width: 1pt;
}

.name {
  width: 100%;
  vertical-align: top;
  font-weight: bold;
  font-size: 17pt;
  text-align: left;
  text-decoration: none;
  margin: 0pt;
  color: black;
}

.specifications-box {
  width: 250pt;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;
}

.description {
  vertical-align: top;
  text-align: left;
  margin: 0pt;
  width: 100%;
  height: 100%;
}

.section-label {
  background: gray;
  border-radius: 5pt;
}
</style>


<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/models/admin/product";

export default defineComponent({
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