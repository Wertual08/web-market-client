<template>
  <div class="profile-card">
    <modal-window v-if="passwordUpdateVisible" @close="stopChangePassword">
      <password-update-window @close="stopChangePassword"/>
    </modal-window>

    <div class="content" @click="activate()">
      <img src="@/assets/ic_profile.svg">
      <p v-if="profile === null">Войти</p>
      <p v-if="profile !== null">{{profile.email}}</p>
      <div v-if="profile !== null" class="dropdown">
        <profile-dropdown @logout="performLogout" @change-password="performChangePassword"/>
      </div>
    </div>
  </div>
</template>


<style scoped>
.profile-card {
  height: 100%;
}

.profile-card > .content {
  height: 100%;

  cursor: pointer;
  color: white;
  
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.profile-card > .content:hover {
  color: lightgray;
}

.profile-card > .content > img {
  width: 20px;
  height: 20px;
}

.profile-card > .content > p {
  padding-left: 12px;
}

.profile-card > .content:hover > .dropdown {
  display: inline;
}

.dropdown {

  position: absolute;
  top: 100%;

  color: black;
  background: #192F60;

  border-radius: 10px;

  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.6);

  display: none;

  cursor: default;
}

</style>


<script lang="ts">
import Profile from '@/models/profile'
import { defineComponent } from 'vue'
import AuthRepository from '@/repositories/authRepository'
import ProfileRepository from '@/repositories/profileRepository'
import ProfileDropdown from './ProfileDropdown.vue'
import ModalWindow from '@/components/windows/ModalWindow.vue'
import PasswordUpdateWindow from '@/components/windows/PasswordUpdateWindow.vue'

export default defineComponent({
  name: 'profile-card',

  components: { ProfileDropdown, ModalWindow, PasswordUpdateWindow },

  emits: ['authorize'],

  setup() {
    return {
      authRepository: new AuthRepository(),
      profileRepository: new ProfileRepository(),
    }
  },

  data() {
    return {
      profile: null as Profile|null,
      passwordUpdateVisible: false,
    }
  },

  mounted() {
    this.profileRepository.get()
      .then(model => this.profile = model)
  },

  methods: {
    activate() {
      if (this.profile === null) {
        this.$emit('authorize')
      }
    },

    performLogout() {
      this.authRepository.logout()
      this.$router.push('/')
      this.$router.go(0)
    },

    performChangePassword() {
      this.passwordUpdateVisible = true
    },
    stopChangePassword() {
      this.passwordUpdateVisible = false
    },
  },
})
</script>
