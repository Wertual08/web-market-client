<template>
  <div class="delivery-view">
    <p class="title">Рассчет стоимости доставки</p>
    <div class="tabs">
      <p :class="{ name: true, selected: selected(0) }" @click="select(0)">Деловые линии</p>
      <p :class="{ name: true, selected: selected(1) }" @click="select(1)">СДЭК</p>
      <p :class="{ name: true, selected: selected(2) }" @click="select(2)">ПЭК</p>
      <p :class="{ name: true, selected: selected(3) }" @click="select(3)">ЭНЕРГИЯ</p>
    </div>
    <iframe 
      v-show="selected(0)"
      class="frame"
      src="https://widgets.dellin.ru/calculator?derival_to_door=off&arrival_to_door=on&disabled_calculation=on&insurance=0&package=1"
      scrolling="no"
      frameborder="0"
      width="332"
      height="390"
    />
    <iframe 
      v-show="selected(1)"
      class="frame"
      src="https://калькулятор-сдэк.рф/виджет"  
      frameborder="0" 
      scrolling="no"
      width="100%" 
      height="460" 
    />
    <iframe 
      v-show="selected(2)"
      class="frame"
      src="https://calc.pecom.ru/iframe/calculator/?address-from=Россия, Москва&intake=1&address-to=Россия, Санкт-Петербург&delivery=1&weight=1&volume=0.01&declared-amount=100&packing-rigid=0&transportation-type=auto" 
      width="320" 
      height="552" 
      frameborder="0"
    />
    <iframe 
      v-show="selected(3)"
      src="https://c.sbl.su/calc/136"
      height="300" 
      width="320"  
      frameborder="0"
    />
  </div>
</template>


<style scoped>
.delivery-view {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.delivery-view > .title {
  padding: 0px;
  margin: 24px 0px;

  color: #E04040;

  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 120%;

  display: flex;
  align-items: center;
}

.delivery-view > .tabs {
  display: flex;
}

.delivery-view > .tabs > .name {
  color: white;

  margin: 0px;
  padding: 16px;
  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;

  border-bottom: 1px solid white;

  cursor: pointer;
}
.delivery-view > .tabs > .name:hover {
  color: lightgray;
}

.delivery-view > .tabs > .selected {
  color: #E04040;

  margin: 0px;
  padding: 16px;
  text-decoration: none;

  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;

  border-bottom: 2px solid #E04040;

  cursor: default;
}
.delivery-view > .tabs > .selected:hover {
  color: #E04040;
}

.delivery-view > .frame {
  max-width: 60%;

  margin: 10px;

  border-radius: 10px;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'delivery-view',

  setup() {
        
  },

  data() {
    return {
      selectedIndex: 0,
    }
  },

  methods: {
    select(i: number) {
      this.selectedIndex = i
    },
    selected(i: number): boolean {
      return this.selectedIndex == i
    },
  },
})
</script>
