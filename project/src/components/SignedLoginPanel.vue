<template>
  <div id="signed-in-panel">
    <p id="login">
        логин
      <!--логин-->
    </p>
    <p id="log-out">
      <button @click="logOut">выйти</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'signed-login-panel',
  data() {
    return {
      
    }
  },
  methods: {

  },
});
</script>

<style scoped>
#sign-in {
  display: inline-block;
}

#sign-up {
  display: inline-block;
}
</style>
