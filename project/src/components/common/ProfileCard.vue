<template>
  <div id="card" v-if="profile === null">
    <label>Login</label>
    <input v-model="login">
    <label>Password</label>
    <input v-model="password">
    <button @click="performLogin">Log in</button>
    <button @click="$emit('register')">Register</button>
  </div>
  <div id="card" v-else>
    {{profile.login}}
    {{profile.email}}
    <button @click="performLogout">Log out</button>
  </div>
</template>


<style scoped>
#card {
  width: 100%;
  height: 100%;
  background: white;
  display: flex;
  flex-direction: column;
}
</style>


<script lang="ts">
import Profile from '@/models/profile'
import { useStore } from '@/store'
import { defineComponent } from 'vue'
import AuthRepository from '@/repositories/authRepository'
import ProfileRepository from '@/repositories/profileRepository'

export default defineComponent({
  name: 'profile-card',

  setup() {
    return {
      authRepository: new AuthRepository(),
      profileRepository: new ProfileRepository(),
      store: useStore(),
    }
  },

  data() {
    return {
      login: '',
      password: '',
      invalidCredentials: false
    }
  },

  methods: {
    performLogin() {
      this.authRepository.login(this.login, this.password)
        .then(model => {
          this.store.state.auth = model
          this.profileRepository.get()
            .then(model => {
              this.store.state.profile = model
            })
        })
        .catch(error => {
          if (error.response) {
            this.password = ''
            this.invalidCredentials = true
          }
        })
    },
    performLogout() {
      this.store.state.auth = null
      this.store.state.profile = null
    }
  },

  computed: {
    profile(): Profile|null {
      return this.store.state.profile
    },
  }
})
</script>
