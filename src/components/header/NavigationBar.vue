<template>
  <div id="box">
    <div class="content">
      <div class="navigation">
        <img class="logo" src="@/assets/logo.svg" alt="vue logo" />
        <router-link class="section" to="/">Главная</router-link>
        <router-link class="section" to="/catalog">Каталог товаров</router-link>
        <router-link class="section" to="/">Где купить?</router-link>
        <div v-if="admin">
          <router-link class="section admin" to="/admin">Управление</router-link>
        </div>
      </div>

      <div class="interaction">
        <search-card class="tool"/>
        <cart-card class="tool"/>
        <profile-card class="tool" @authorize="$emit('authorize')"/>
      </div>
    </div>
  </div>
</template>


<style scoped>
#box {
  position: sticky;
  top: 0px;

  height: 75;

  background: #192F60;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;

  display: flex;
  justify-content: center;
  user-select: none;
}

.content {
  width: 90%;
  
  display: flex;
  justify-content: space-between;
}

.navigation {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.logo {
  width: 120px;
  height: 39px;
  margin: 18px 18px 18px 0px;
}

.section {
  padding: 0px 12px;

  color: white;

  text-decoration: none;
  font-weight: bold;

  display: flex;
  justify-content: center;
  align-items: center;
}

.section:hover {
  color: #BBBBBB;
}

.admin {
  font-size: 20px;
  color: red;
}

.admin:hover {
  font-size: 20px;
  color: darkred;
}

.interaction {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.interaction > .tool {
  padding: 0px 14px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import SearchCard from './SearchCard.vue'
import ProfileCard from './ProfileCard.vue'
import CartCard from './CartCard.vue'

export default defineComponent({
  name: 'navigation-bar',
  
  components: {
    SearchCard,
    ProfileCard,
    CartCard,
  },

  emits: ['authorize'],

  props: {
    admin: {
      type: Boolean,
      default: false,
    }
  },
})
</script>
