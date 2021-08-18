<template>
  <div id="topInfo">
    <div id="logo" class="topBlock">
      <img src="../assets/logo.png" alt="vue logo" />
    </div>
    <div id="contacts" class="topBlock">
      <a class ='phone' href="tel:+89165782648">8 (916) 578-26-48</a>
      <p>email@mail.com</p>
    </div>
    <div id="cart" class="topBlock">Корзина</div>
    <div id="login" class="topBlock">
      <!-- тут надо прокидывать в компонент login -->
      <component :is="currentComponent" v-bind="currentProperties" @signed="signed" @logout="logout"/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NotSignedLoginPanel from "@/components/NotSignedLoginPanel.vue";
import SignedLoginPanel from "@/components/SignedLoginPanel.vue";

export default defineComponent({
  components: {
    NotSignedLoginPanel,
    SignedLoginPanel,
  },
  data() {
    return {
      currentComponent: 'NotSignedLoginPanel',
      user: {
        login: "",
        accessToken: "",
        refreshToken: ""
      }
    }
  },
  methods: {
    signed(login: any, accToken: any, refToken: any) {
      this.currentComponent = 'SignedLoginPanel'
      this.user.login = login
      this.user.accessToken = accToken
      this.user.refreshToken = refToken
    },
    logout() {
      this.user.login = "",
      this.user.accessToken = "",
      this.user.refreshToken = "",
      this.currentComponent = 'NotSignedLoginPanel'
    }
  },
  computed: {
    currentProperties: function() {
      if (this.currentComponent === 'SignedLoginPanel') {
        return { login: 'this.user.login' }
        //return { login: this.user.login }
      }
    }
  }
})
</script>

<style scoped>
#topInfo {
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

.topBlock {
  height: 60px;
  
}

img {
  width: 50px;
  height: 50px;
}
.phone{
  margin-bottom: 0ch;
}
</style>