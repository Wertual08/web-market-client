<template>
  <div class="cartBar">
    <div class="content">
      <div class="cartInfo">
      В корзине X товаров на сумму Y
      </div>
      <div class="cartTools">
        <action-button class="tool">Очистить корзину</action-button>
        <action-button class="tool">Оформить заказ</action-button>
      </div>
    </div>
  </div>
</template>

<style>
  .cartBar {
    width: 100%;
    height: 75px;
    background-color: #355396;
    
    position: sticky;
    top: 75px;
    z-index: 100;

    color: white;
    font-family: Inter;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 22px;
    letter-spacing: 0em;
    text-align: left;

    display: flex;
    justify-content: center;
  }

  .content {
    width: 80%;

    display: flex;
    justify-content: space-between;
  }

  .cartInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
  }

  .cartTools {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 400px;
    height: 48px;

    margin: 16px 0px;
    padding: 0px;
  }

  .tool {
    margin-left: 16px;
  }
</style>

<script>
import ActionButton from '@/components/common/ActionButton.vue'

export default {
  name: 'cart-bar',

  components: {
    ActionButton
  }
}
</script>