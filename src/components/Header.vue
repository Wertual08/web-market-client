<template>
  <div id="header">
    <TopInfo />
    <navigation-bar :admin="isAdmin"/>
  </div>
</template>


<style scoped>
#header {
  padding: 8px 60px;
  background-color: rgba(169, 241, 241, 0.377);
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import TopInfo from "@/components/TopInfo.vue"
import NavigationBar from "@/components/NavigationBar.vue"
import { useStore } from '@/store'
import Profile from '@/models/profile'

export default defineComponent({
  components: {
    TopInfo,
    NavigationBar,
  },

  setup() {
    return {
      store: useStore(),
    }
  },

  data() {
    return {
      isAdmin: false
    }
  },

  mounted() {
    this.store.dispatch('profile')
      .then((profile: Profile|null) => {
        this.isAdmin = profile?.role.toLowerCase() == 'admin' ?? false
      })
  },
})
</script>