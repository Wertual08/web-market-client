<template>
  <div id="card" v-if="profile === null">
    <label>Login</label>
    <input v-model="login">
    <label>Password</label>
    <input type="password" v-model="password">
    <div id="controls">
      <button @click="performLogin">Log in</button>
      <button @click="$emit('register')">Register</button>
    </div>
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

#controls {
  display: flex;
}
</style>


<script lang="ts">
import Profile from '@/models/profile'
import { defineComponent } from 'vue'
import AuthRepository from '@/repositories/authRepository'
import ProfileRepository from '@/repositories/profileRepository'

export default defineComponent({
  name: 'profile-card',

  emits: ['register'],

  setup() {
    return {
      authRepository: new AuthRepository(),
      profileRepository: new ProfileRepository(),
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
    this.profileRepository.get()
      .then(model => this.profile = model)
  },

  methods: {
    performLogin() {
      this.authRepository.login(this.login, this.password)
        .then(() => {
          this.profileRepository.get()
            .then(() => {
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
      this.authRepository.logout()
      this.$router.push('/')
      this.$router.go(0)
    }
  },
})
</script>
