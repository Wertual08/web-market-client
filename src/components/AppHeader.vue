<template>
  <tool-bar @register="openRegister()"/>
  <navigation-bar :admin="isAdmin"/>
  
  <modal-window :visible="registerOpened" @close="closeRegister()">
    <registration-form/>
  </modal-window>
</template>


<style scoped>
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import ProfileRepository from '@/repositories/profileRepository'
import Profile from '@/models/profile'
import NavigationBar from '@/components/NavigationBar.vue'
import ToolBar from './ToolBar.vue'
import ModalWindow from './common/ModalWindow.vue'
import RegistrationForm from './RegistrationForm.vue'

export default defineComponent({
  name: 'app-header',

  components: {
    NavigationBar,
    ToolBar,
    ModalWindow,
    RegistrationForm,
  },

  setup() {
    return {
      profileRepository: new ProfileRepository(),
    }
  },

  data() {
    return {
      isAdmin: false,
      registerOpened: false,
    }
  },

  mounted() {
    this.profileRepository.get()
      .then((profile: Profile|null) => {
        this.isAdmin = profile?.isAdmin() ?? false
      })
  },

  methods: {
    openRegister() {
      console.log('shit')
      this.registerOpened = true
    },
    closeRegister() {
      this.registerOpened = false
    },
  },
})
</script>