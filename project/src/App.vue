<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="The fucking ugly list of products (there... below)"/>
  <ProductsList/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ProductsList from './components/ProductsList.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    ProductsList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
