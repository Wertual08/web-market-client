<template>
  <div id="box" @click="">
    <img src="@/assets/ic_profile.svg">
    <p v-if="profile === null">Войти</p>
    <p v-else>{{profile.login}}</p>
  </div>
</template>


<style scoped>
#box {
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

#box:hover {
  color: lightgray;
}

#box > img {
  width: 20px;
  height: 20px;
}

#box > p {
  padding-left: 12px;
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
