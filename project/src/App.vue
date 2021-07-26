<template>
  <div id='app'>
    <Header/>
    <Container/>
    <Footer/>
    <modal-window ref="modalTwo">
        <template v-slot:title>
            <h3 class="modal-title">Добавить отзыв</h3>
        </template>
        <template v-slot:body>
            <textarea class="modal-textarea"                   
                      placeholder="Добавьте отзыв">
            </textarea>
        </template>
        <template v-slot:footer>
            <button class="modal-footer__button" @click="sendDataFunction">Отправить</button>
        </template>
    </modal-window>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Container from './components/Container.vue'
  import Footer from './components/Footer.vue'

  export default {
    name: 'App',
    components: {
      Header,
      Container,
      Footer
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