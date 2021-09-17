<template>
  <div class="box">
    <div class="tabs">
      <div :class="{ tab: true, selected: selected(0) }" @click="select(0)">
        Вход
      </div>
      <div :class="{ tab: true, selected: selected(1) }" @click="select(1)">
        Регистрация
      </div>
    </div>
    <login-form v-if="selected(0)" class="form"/>
    <registration-form v-if="selected(1)" class="form"/>
  </div>
</template>

<style scoped>

.box {
  width: 570px;
  height: 370px;
  
  background: #00174A;
  border-radius: 12px;

  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 150%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.tabs {
  flex: 0 0 auto;
  width: 290px;
  height: 32px;
  padding-top: 40px;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  
  user-select: none;
}

.tab {
  flex: 1 0 auto;
  height: 100%;
  box-sizing: border-box;

  color: #5C6175;
  border-bottom: 1px solid #434D63;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}

.tab:hover {
  color: #7C8195;
}

.selected {
  color: white;
  border-bottom: 2px solid #E04040;

  cursor: default;
}

.selected:hover {
  color: white;
  border-bottom: 2px solid #E04040;

  cursor: default;
}

.form {
  flex: 1 1 auto;
  padding: 40px;
}

</style>


<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from './LoginForm.vue'
import RegistrationForm from './RegistrationForm.vue'

export default defineComponent({
  name: 'authorization-window',

  components: {
    LoginForm,
    RegistrationForm,
  },

  setup() {
        
  },

  data() {
    return {
      selectedIndex: 0,
    }
  },

  methods: {
    select(index: number) {
      this.selectedIndex = index
    },
    selected(index: number): boolean {
      return index == this.selectedIndex
    },
  }
})
</script>
