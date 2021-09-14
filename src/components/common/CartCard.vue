<template>
  <div class="box">
    <img src="@/assets/ic_cart.svg">
    <p>Корзина</p>
    <div class="count">
      0
    </div>
  </div>
</template>


<style scoped>
.box {
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

.box:hover {
  color: lightgray;
}

.box > img {
  width: 16px;
  height: 18px;
}

.box > p {
  padding: 0px 16px;
}

.box > .count {
  width: 16px;
  height: 16px;

  background: #E04040;
  border-radius: 50%;

  font-style: normal;
  font-weight: 600;
  font-size: 10px;
  line-height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
}
</style>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'cart-card',

  setup() {
        
  },
})
</script>
