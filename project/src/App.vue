<template>
  <div id='app'>
    <Header/>
    <component :is="dynamicComponent"></component> 
    <Footer/>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Container from './components/Container.vue'
  import Footer from './components/Footer.vue'
  import Container2 from './components/Container2.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Footer,
      
    },
    computed: {     
      dynamicComponent() {       
        if(Math.random() > 0.5) {         
          return Container;       
        } else {         
          return Container2;       
        }
      }
    } 
  }
</script>

<style>
  * {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin: 0;
    padding: 0;
  }
</style>