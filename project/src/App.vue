<template>
  <div id="app">
    <Header />
    <component :is="dynamicComponent" @changeFlag="jopa" ref="KOLA" ></component>
    <Footer />
  </div>
</template>

<script>
import { nextTick } from 'vue';
import Container from "./components/Container.vue";
import Container2 from "./components/Container2.vue";

export default {
  name: "App",
  methods: {
    jopa(c) {
      console.log(c);
      this.Flag = true;
      nextTick()
      this.$refs.KOLA.setId(c)
      console.log(this.$refs.KOLA)
      // Container2.setId(c)

      
    },
  },
  data() {
    return { Flag: false};
  },

  computed: {
    dynamicComponent() {
      console.log("Flag" + this.Flag)
      if (this.Flag) {
        return Container2;
      } else {
        return Container;
      }
    },
  },
};
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