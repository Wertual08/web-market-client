<template>
  <div id='app'>
    <Header/>
    <Container/>
    <Footer/>
    <div class="page">
 
        <button сlass="show-modal-button" @click="showModal">Показать модальное окно</button>
 
        <modal-window ref="modal"></modal-window>
        
    </div>
 
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Container from './components/Container.vue'
import Footer from './components/Footer.vue'
import ModalWindow from './components/modal-window.vue'


export default {
  name: 'App',
  components: {
    Header,
    Container,
    Footer,
    ModalWindow
    
  },
  methods: {
    showModal: function () {
        this.$refs.modal.show = true
    }
},

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


 


 
