<template>
  <info-bar/>
  <navigation-bar :admin="isAdmin" @authorize="openAuthorization()"/>
  
  <modal-window :visible="authorizationOpened" @close="closeAuthorization()">
    <authorization-window/>
  </modal-window>
</template>


<style scoped>
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import ProfileRepository from '@/repositories/profileRepository'
import Profile from '@/models/profile'
import NavigationBar from './NavigationBar.vue'
import InfoBar from './InfoBar.vue'
import ModalWindow from '@/components/windows/ModalWindow.vue'
import AuthorizationWindow from '@/components/windows/authorization/AuthorizationWindow.vue'

export default defineComponent({
  name: 'app-header',

  components: {
    NavigationBar,
    InfoBar,
    ModalWindow,
    AuthorizationWindow,
  },

  setup() {
    return {
      profileRepository: new ProfileRepository(),
    }
  },

  data() {
    return {
      isAdmin: false,
      authorizationOpened: false,
    }
  },

  mounted() {
    this.profileRepository.get()
      .then((profile: Profile|null) => {
        this.isAdmin = profile?.isAdmin() ?? false
      })
  },

  methods: {
    openAuthorization() {
      this.authorizationOpened = true
    },
    closeAuthorization() {
      this.authorizationOpened = false
    },
  },
})
</script>