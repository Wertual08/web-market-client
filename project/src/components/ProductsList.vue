<template>
  <div class="container">
    <h3 class="p-3 text-center">Vue.js - Display a list of products with v-for</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.Id">
          <td>{{product.Id}}</td>
          <td>{{product.Name}}</td>
          <td>{{product.Description}}</td>
        </tr>
      </tbody>
    </table>
  </div>    
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      products: null
    };
  },
  mounted () {
    axios.get('/api/products')
      .then(response => {
        this.products = response.data;
      })
  }
}
</script>