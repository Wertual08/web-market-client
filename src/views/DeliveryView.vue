<template>
  <div class="delivery-view">
    <p class="title">Рассчет стоимости доставки</p>
    <iframe
      src="https://widgets.dellin.ru/calculator?derival_to_door=off&arrival_to_door=on&disabled_calculation=on&insurance=0&package=1"
      width="332"
      height="390"
      scrolling="no"
      frameborder="0"
    />
    <iframe 
      src="https://калькулятор-сдэк.рф/виджет"  
      frameborder="0" 
      name="Калькулятор СДЭК" 
      height="460" 
      width="100%" 
      scrolling="no"
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

iframe {
  
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'delivery-view',

  setup() {
        
  },
})
</script>
