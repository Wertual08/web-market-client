<template>
  <div class="admin-product-card">
    <div class="cover-box">
      <img class="cover-image" :src="coverImage"> 
    </div>
    <div class="vertical-box">
      <p class="name" @click="$emit('edit', product)">
        {{ product.name }}
      </p>
      <div class="horizontal-box">
        <div class="specifications-box">
          Id: {{ product.id }} Images: {{ product.records.length }}<br>
          Price: {{ product.price }}<br>
          Created at: {{ createdAt }}<br>
          Updated at: {{ updatedAt }}
          <div class="sections-box">
            <p class="section-label" v-for="section in product.sections" :key="section.name">
              {{ section.name }}
            </p>
          </div>
        </div>
        <p class="description">{{ product.description }}</p>
        <p class="description">{{ product.privateInfo }}</p>
        <action-button class="delete-button" @click="$emit('delete', product)">Удалить</action-button>
      </div>
    </div>
  </div>
</template>


<style scoped>
.admin-product-card {
  width: 100%;
  height: 250px;
  border-bottom: 1px solid #355396;
  color: white;
  display: flex;
  
  overflow: hidden;
}

.admin-product-card > .cover-box {
  width: 200px;
  height: 100%;
  margin: 0px;
  
  display: flex;
  justify-content: center;
  align-items: center;
}

.admin-product-card > .cover-box > .cover-image {
  max-height: 90%;
  max-width: 90%;
  margin: auto;
  display: block;
  border-radius: 5px;
  border: black;
  border-width: 1px;
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
  align-items: flex-end;
  
  overflow: hidden;
}

.name {
  width: 100%;
  margin: 0px;

  color: white;

  font-weight: bold;
  font-size: 17px;
  text-align: left;
  text-decoration: none;

  cursor: pointer;
}

.name:hover {
  color: lightgray;
}

.specifications-box {
  width: 800px;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  font-size: 16px;
  font-weight: normal;

  overflow: hidden;
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
  background: #00174A;
  border-radius: 5px;
  padding: 0px 4px;
  margin: 2px;

  font-size: 14px;
  font-weight: normal;
}

.delete-button {
  width: 64pt;
  height: 32px;
  margin: 16px;
}
</style>


<script lang="ts">
import { defineComponent, PropType } from 'vue'
import Product from '@/models/admin/product'
import { dateToString } from '@/services/datetime'
import ActionButton from '@/components/common/ActionButton.vue';

export default defineComponent({
  components: { ActionButton },
  name: 'admin-product-card',

  emits: ['edit', 'delete'],

  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },

  computed: {
    coverImage(): string {
      let records = this.product?.records ?? []
      if (records.length > 0) {
        return records[0].url;
      } else {
        return require('@/assets/placeholder.jpg')
      }
    },

    createdAt(): string {
      return dateToString(this.product.createdAt)
    },

    updatedAt(): string {
      return dateToString(this.product.updatedAt)
    },
  }
});
</script>