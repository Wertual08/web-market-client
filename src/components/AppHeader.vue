<template>
  <tool-bar/>
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
import NavigationBar from '@/components/NavigationBar.vue'
import ToolBar from './ToolBar.vue'
import ModalWindow from './windows/ModalWindow.vue'
import RegistrationForm from './DEPRECATEDRegistrationForm.vue'
import AuthorizationWindow from './windows/authorization/AuthorizationWindow.vue'

export default defineComponent({
  name: 'app-header',

  components: {
    NavigationBar,
    ToolBar,
    ModalWindow,
    RegistrationForm,
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