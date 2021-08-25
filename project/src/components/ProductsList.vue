<template>
  <div class="box">
    <h3 class="p-3 text-center"></h3>
    <table class="table table-striped table-bordered">
      <!-- <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead> -->
      <!-- TODO: move product card to separate component -->
      <div class="prodCard" v-for="product in products" :key="product.id">
        <!--  <button @click="$emit('load-product', product.Id)" class="prodId">
            артикул: {{ product.Id }}
          </button> -->
        <router-link
          class-active="prodId"
          class="prodId"
          :to="{ path: '/productpage/' + product.id }"
        >
          <div class="prodCardContent">
            артикул: {{ product.id }}
            <img
              :src="getCoverImage(product)"
              alt="../assets/meme.gif"
              style="display: block"
            />
            <p class="prodName">{{ product.name }}</p>
            <p class="prodDesc">{{ product.description }}</p>
          </div>
        </router-link>
        <div class="addToCart" @click="cartAdd">
          <img class="basket" src="../assets/cart.png" alt="oops.jpg" />
        </div>
      </div>
    </table>
  </div>
</template>

<script lang = 'ts'>
import { defineComponent } from "vue";
import Product from "@/models/product";
import productsRepository from "@/repositories/productsRepository";

export default defineComponent({
  data() {
    return {
      products: [] as Product[],
    };
  },
  mounted() {
    productsRepository.getProducts()
      .then((result: Product[]) => {
        this.products = result;
      });
  },
  methods: {
    getCoverImage(product: Product): string {
      if (product.records.length > 0) {
        return product.records[0];
      } else {
        return require("@/assets/meme.gif");
      }
    },
    cartAdd() {
      alert("Добавлено в корзину");
    },
  },
});
</script>

<style scoped>
.prodCard {
  width: 220px;
  height: 300px;
  display: inline;
  float: left;
  overflow: hidden;
  background: lightblue;
  margin: 10px;
}

.prodDesc {
  text-overflow: ellipsis;
  height: 38px;
  overflow: hidden;
  margin-top: 10px;
}

img {
  width: 200px;
  height: 100px;
  margin: 10px;
  align-content: center;
  margin-bottom: 0ch;
}
.addToCart {
  background-color: rgb(245, 245, 245);
}
.basket {
  margin: 2px;
  width: 40px;
  height: 40px;
  align-content: flex-end;
}
.prodName {
  height: 20px;
  margin-top: 1px;
  margin-bottom: 0px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  text-overflow: ellipsis;
  height: 38px;
  overflow: hidden;
}
.prodId {
  padding-right: 25px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  display: inline;
  margin-right: 5px;
  color: black;
  text-decoration: none;
  text-align: center;
  margin-left: 25px;
}
</style>
