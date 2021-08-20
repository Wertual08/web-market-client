<template class = 'card'>
  <div class="abc">
    <Menu />
    <img
      class="magamed"
      :src="getCoverImage(product)"
      alt="../assets/meme.gif"
    />
    <div style="overflow: hidden" class="line">
      <p style="float: left" class="id">Артикул товара: {{ product.id }}</p>
      <p style="float: right" class="name">{{ product.name }}</p>
    </div>
    <div class="description">
      <p class="des">Описание товара:</p>
    <div>{{ product.description }} </div>
    </div>
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
.des{
  margin-top: 100px;
  position: relative;
  right: 285px;
  margin-bottom: 20px;
}
.abc {
  font-weight: 1000;
  background: rgb(186, 186, 214);
  min-height: 1080px;
  background: -moz-linear-gradient(
    90deg,
    rgba(186, 186, 214, 1) 0%,
    rgba(0, 255, 252, 0.16290266106442575) 20%
  );
  background: -webkit-linear-gradient(
    90deg,
    rgba(186, 186, 214, 1) 0%,
    rgba(0, 255, 252, 0.16290266106442575) 20%
  );
  background: linear-gradient(
    90deg,
    rgba(186, 186, 214, 1) 0%,
    rgba(0, 255, 252, 0.16290266106442575) 20%
  );
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#babad6",endColorstr="#00fffc",GradientType=1);
}
.magamed {
  float: right;
  top: 0pc;
  width: auto;
  width: 500px;
  height: auto;
}
.line {
  margin-bottom: 10px;
}
.name {
  position: relative;
  text-align: center;
  right: 200px;
  margin-top: 2px;
  font-size: 21px;
  font-weight: 1000;
  font-family: Arial (sans-serif);
}
.id {
  font-family: Arial (sans-serif);
  font-size: 20px;
  padding: 4px;
  border: solid;
  font-weight: 1000;
  border-width: 1px;
  position: relative;
  left: 40px;
}
.description {
  position: relative;
  right: 100px;
}
</style>
