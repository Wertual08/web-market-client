<template>
  <div class="container">
    <h3 class="p-3 text-center">Vue.js - Display a list of products with v-for</h3>
    <table class="table table-striped table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
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
    //console.log(axios.get('http://84.252.141.174/api/products'));
    return {
      products: null
    };
  },
  mounted () {
    axios.get('http://84.252.141.174/api/products')
      .then(response => (this.products = response))
  //.then(response => {this.nutrients = response.data})
  // [
  //   { Id: 121, Name: 'Murphy', Description: 'Go' },
  //   { Id: 666, Name: 'Sword', Description: 'Fuck' },
  //   { Id: 531, Name: 'Shit', Description: 'Yourself' },
  // ]
  }
}
</script>