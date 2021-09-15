<template>
  <div class="tool-bar">
    <!-- <div class="profile">
      <dropdown text="Профиль">
        <profile-card @register="$emit('register')"/>
      </dropdown>
    </div> -->
    <div class="info">
      <region-card/>
      <div class="items">
        <router-link class="item" to="/">Информация</router-link>
        <router-link class="item" to="/about">Контакты</router-link>
      </div>
    </div>

    <div class="phone">
      <a href="tel:+7(800)100-09-08">8 (916) 578-26-48</a>
      <img src="@/assets/ic_down.svg">
    </div>
  </div>
</template>


<style scoped>
.tool-bar {
  height: 38px;

  background: #00174A;

  display: flex;
  justify-content: space-around;
  
  font-family: Inter;
  font-style: normal;
}

.info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
}

.info > .items {
  padding-left: 30px;
}

.info > .items > .item {
  padding: 0px 12px;

  text-decoration: none;
  color: #8C929F;
}

.info > .items > .item:hover {
  padding: 0px 12px;

  text-decoration: none;
  color: #DDDDDD;
}

.phone {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
}

.phone > a {
  text-decoration: none;
  color: white;
  
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;
}

.phone > img {
  widows: 8px;
  height: 4px;
  padding-left: 3px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import RegionCard from '@/components/miscellaneous/RegionCard.vue'

export default defineComponent({
  components: { 
    RegionCard,
  },
  name: 'tool-bar',

  emits: ['register'],

  setup() {
    
  },
})
</script>
