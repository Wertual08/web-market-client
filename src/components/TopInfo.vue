<template>
  <modal-window :visible="registerOpened" @close="closeRegister()">
    <registration-form/>
  </modal-window>
  <div id="topInfo">
    <div id="logo" class="topBlock">
      <img src="../assets/logo.png" alt="vue logo" />
    </div>
    <div id="contacts" class="topBlock">
      <a class ='phone' href="tel:+89165782648">8 (916) 578-26-48</a>
      <p>email@mail.com</p>
    </div>
    <div class="topBlock" @click="$router.push('/cart')">Корзина</div>
    <div id="login" class="topBlock">
      <profile-card @register="openRegister"/>
    </div>
  </div>
</template>


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


<script lang="ts">
import { defineComponent } from 'vue'
import ProfileCard from '@/components/common/ProfileCard.vue'
import ModalWindow from '@/components/common/ModalWindow.vue'
import RegistrationForm from './RegistrationForm.vue'
export default defineComponent({
  components: {
    ProfileCard,
    ModalWindow,
    RegistrationForm,
  },
  data() {
    return {
      registerOpened: false,
    }
  },
  methods: {
    openRegister() {
      this.registerOpened = true
    },
    closeRegister() {
      this.registerOpened = false
    },
  },
})
</script>