<template >
  <div class="box">
    <h3 class="p-3 text-center">Результаты поиска</h3>
    <table class="table table-striped table-bordered">
      <div
        class="productCardContainer"
        v-for="product in products"
        :key="product.id">
        <search-product-card :product="product" @add-cart="addCart" />
      </div>
    </table>
  </div>
</template>
<script lang = 'ts'>
import { defineComponent } from "vue";
import SearchProduct from "@/models/searchProduct";
import SearchRepository from "@/repositories/searchRepository";
import SearchProductCard from "@/components/common/SearchProductCard.vue"


export default defineComponent({

  setup() {
    return {
      searchRepository: new SearchRepository(),
    }
  },

  mounted() {
    this.loadUp();
    window.onscroll = () => {
      this.onScroll();
    };
  },
  
  data() {
    return {
      products: [] as SearchProduct[],
      page: 0 as number,
      productsToLoad: true,
      loading: false,
    };
  },

  props: {
    query: {
      type: String,
      default: "",
    },
  },

  methods: {
    onScroll(): void {
      let height = document.documentElement.scrollTop + window.innerHeight;
      let bottomOfWindow = height === document.documentElement.offsetHeight;
      if (bottomOfWindow) {
        this.loadUp();
      }
    },

    loadUp(): void {
      if (!this.loading) {
        this.loading = true;
        this.searchRepository.Search(this.query, this.page).then((result) => {
          if (result.length > 0 && this.productsToLoad) {
            result.forEach((item) => this.products.push(item));
            this.page++;
          } else {
            this.productsToLoad = true;
          }
          this.loading = false;
          this.onScroll();
        });
      }
    },

    addCart(id: number): void {
      alert(`DEBUG_MESSAGE: Добавлено в корзину ${id}`);
    },
  },

  watch: {
    query() {
      this.products = []
      this.page = 0 
      this.productsToLoad = true
      this.loading = false
      this.loadUp();
    }
  },
});
</script>

<style scoped>
.box {
  height: 100%;
  min-height: 1080px;
}

.productCardContainer {
  width: 220px;
  height: 300px;
  display: inline;
  float: left;
  overflow: hidden;
  background: lightblue;
  margin: 10px;
}
</style>