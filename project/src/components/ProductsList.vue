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
      <div>
        <div class="prodCard" v-for="product in products" :key="product.Id">
          <button @click="$emit('load-product', product.Id)" class="prodId">
            артикул: {{ product.Id }}
          </button>
          <img src="../assets/meme.gif" alt="oops.jpg" />
          <p class="prodName">{{ product.Name }}</p>
          <p class="prodDesc">{{ product.Description }}</p>
          <img class="basket" src="../assets/basketball.jpg" alt="oops.jpg" />
        </div>
      </div>
    </table>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import axios from "axios";

export default defineComponent({
  data() {
    return {
      products: null,
    };
  },

  mounted() {
    axios.get("/api/products").then((response) => {
      this.products = response.data;
    });
  },

  methods: {
  },

  emits: [
    'load-product',
  ]
})
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
}

img {
  width: 200px;
  height: 100px;
  margin: 10px;
  align-content: center;
}
.basket {
  width: 50px;
  height: 50px;
  align-content: flex-end;
}
.prodName {
  height: 20px;
  margin-bottom: 20px;
  font-family: "Times New Roman", Times, serif;
  font-weight: bold;
  text-overflow: ellipsis;
  height: 38px;
  overflow: hidden;
}
.prodId {
  background: none;
  border: none;
  font-size: 20px;
}
</style>
