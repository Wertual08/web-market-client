<template>
  <div class="box">
    <div class="coverBox">
      <img class="coverImage" :src="coverImage"> 
    </div>
    <div class="properties">
      <p class="name">{{ product.name }}</p>
      <div>
        <div class="specifications">
          Id: {{ product.id }}<br>
          Price: {{ product.price }}<br>
          Created at: {{ product.createdAt }}<br>
          Updated at: {{ product.updatedAt }}<br>
          <!-- <div v-for="section in product.sections" :key="section.name">
            {{section}}
          </div> -->
        </div>
        <p class="description">{{ product.description }}</p>
      </div>
    </div>
  </div>
</template>


<style scoped>

.box {
  width: 100%;
  height: 100pt;
  margin: 2pt;
}

.coverBox {
  float: left;
  width: 256pt;
  height: 100%;
}

.coverImage {
  max-height: 100%;
  max-width: 100%;
}

.properties {
  width: 100%;
  height: 100%;
}

.name {
  vertical-align: top;
  font-weight: bold;
  font-size: 17pt;
  text-align: left;
}

.specifications {
  vertical-align: top;
  float: left;
  text-align: left;

  width: 200pt;
  height: 100%;
}

.description {
  vertical-align: top;
}
</style>


<script lang="ts">
import { defineComponent } from "vue";
import Product from "@/models/admin/product";
import SectionLabel from "./SectionLabel.vue";

export default defineComponent({
  components: { SectionLabel },
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
        return require('@/assets/placeholder.jpg')
      }
    },
  }
});
</script>