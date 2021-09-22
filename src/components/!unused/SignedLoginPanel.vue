<template>
  <div id="signed-in-panel">
    <p id="login">
      {{ login }}
    </p>
    <p id="log-out">
      <my-button @click="logOut">
        выйти
      </my-button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyButton from '../UI/MyButton.vue'

export default defineComponent({
  components: { MyButton },
  name: 'signed-login-panel',
  props: {
    login: {
      type: String,
      default: "login not found"
    }
  },
  methods: {
    logOut() {
      this.$emit('logout')
    }
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
