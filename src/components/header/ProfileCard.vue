<template>
  <div id="box" @click="activate()">
    <img src="@/assets/ic_profile.svg">
    <p v-if="profile === null">Войти</p>
    <p v-if="profile !== null">{{profile.email}}</p>
    <div v-if="profile !== null" class="dropdown">
      <profile-dropdown @logout="performLogout"/>
    </div>
  </div>
</template>


<style scoped>
#box {
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

#box:hover > .dropdown {
  display: inline;
}

.dropdown {
  width: 200px;
  height: 300px;

  position: absolute;
  top: 100%;

  color: black;
  background: #192F60;

  border-radius: 10px;

  box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.6);

  display: none;
}

</style>


<script lang="ts">
import Profile from '@/models/profile'
import { defineComponent } from 'vue'
import AuthRepository from '@/repositories/authRepository'
import ProfileRepository from '@/repositories/profileRepository'
import ProfileDropdown from './ProfileDropdown.vue'

export default defineComponent({
  name: 'profile-card',

  components: { ProfileDropdown },

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
  },
})
</script>
