<template class = 'card'>
<div class="abc">
  <Menu />
  <img class="magamed" :src="getCoverImage(product)" alt="../assets/meme.gif" />
  <div>{{ product.id }}</div>
  <nobr>{{ product.name }}</nobr>
  <div>{{ product.description }}</div>
  <p>1</p>
</div>

  <div></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Repa from "@/repositories/repository";
import Product from "@/models/product";
import Menu from "@/components/DropdownMenu.vue";

export default defineComponent({
  name: "ff",
  components: {
    Menu,
  },
  data() {
    return { product: new Product(), id: null as any };
  },

  mounted() {
    this.id = this.$route.params.id;
    Repa.getProdById(this.id).then((result: Product) => {
      this.product = result;
    });
  },
  methods: {
    getCoverImage(product: Product): String {
      if (product.records.length > 0) {
        return product.records[0];
      } else {
        return require("@/assets/meme.gif");
      }
    },
  },
});
</script>


<style scoped>
.abc{
background: rgb(9,9,121);
background: linear-gradient(90deg, rgba(9,9,121,1) 0%, rgba(0,129,255,0.16290266106442575) 79%, rgba(2,0,36,1) 100%);
}
.magamed {
  float: right;
  top: 0pc;
  width: auto;
  width: 500px;
  height: auto;
}

</style>
