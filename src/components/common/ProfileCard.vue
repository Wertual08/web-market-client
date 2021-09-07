<template>
  <div id="card" v-if="profile === null">
    <label>Login</label>
    <input v-model="login">
    <label>Password</label>
    <input type="password" v-model="password">
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

  emits: ['register'],

  setup() {
    return {
      authRepository: new AuthRepository(),
      store: useStore(),
    }
  },

  data() {
    return {
      login: 'admin',
      password: 'admin',
      invalidCredentials: false,
      profile: null as Profile|null,
    }
  },

  mounted() {
    if (this.store.state.auth != null) {
      this.store.dispatch('profile')
        .then(model => this.profile = model)
    }
  },

  methods: {
    performLogin() {
      this.authRepository.login(this.login, this.password)
        .then(model => {
          this.store.commit('auth', model)
          this.store.dispatch('profile')
            .then(model => {
              this.profile = model
              this.$router.go(0)
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
      this.store.commit('auth', null)
      this.profile = null
      this.$router.go(0)
    }
  },
})
</script>
