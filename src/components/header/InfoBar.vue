<template>
  <div class="info-bar">
    <div class="content">
      <div class="info">
        <region-card/>
        <div class="items">
          <router-link class="item" to="/sales">Акции</router-link>
          <router-link class="item" to="/about">Контакты</router-link>
          <router-link class="item admin" to="/admin" v-if="admin">Управление</router-link>
        </div>
      </div>

      <div class="phone">
        <a href="tel:+7(916)578-26-48">+7 (916) 578-26-48</a>
        <img src="@/assets/ic_down.svg">
      </div>
    </div>
  </div>
</template>


<style scoped>
.info-bar {
  height: 38px;

  background: #00174A;

  display: flex;
  justify-content: center;
  
  font-family: Inter;
  font-style: normal;
}

.info-bar > .content {
  width: 90%;
  
  display: flex;
  justify-content: space-between;
}

.info-bar > .content > .info {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  align-items: center;
  
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  
  user-select: none;
}

.info-bar > .content > .info > .items {
  padding-left: 30px;
}

.info-bar > .content > .info > .items > .item {
  padding: 0px 12px;

  text-decoration: none;
  color: #8C929F;
}

.info-bar > .content > .info > .items > .item:hover {
  padding: 0px 12px;

  text-decoration: none;
  color: #DDDDDD;
}

.info-bar > .content > .info > .items > .admin {
  color: red;
}

.info-bar > .content > .info > .items > .admin:hover {
  color: darkred;
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
import RegionCard from '@/components/header/RegionCard.vue'

export default defineComponent({
  components: { 
    RegionCard,
  },
  name: 'tool-bar',

  emits: ['register'],

  props: {
    admin: {
      type: Boolean,
      default: false,
    }
  },

  setup() {
    
  },
})
</script>
