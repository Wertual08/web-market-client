<template>
  <div class="app-footer">
    <img class="bottom-logo" src="@/assets/logo-bottom.svg"/>
    <div class="column">
      <p class="header">БЫСТРЫЕ ССЫЛКИ</p>
      <router-link to="/" class="link">Главная</router-link>
      <router-link to="/" class="link">Возврат и обмен</router-link>
      <router-link to="/" class="link">Где купить</router-link>
      <router-link to="/" class="link">Акции</router-link>
      <router-link to="/" class="link">Контакты</router-link>
    </div>
    <div class="column">
      <p class="header">КАТАЛОГ</p>
      <router-link to="/" class="link">Запчасти КМУ</router-link>
      <router-link to="/" class="link">Грузовики Hyndai</router-link>
      <router-link to="/" class="link">Автобусы Hyndai</router-link>
      <router-link to="/" class="link">Автобусы Daewoo</router-link>
      <router-link to="/" class="link">Грузовики Kia</router-link>
      <router-link to="/" class="link">Автобусы  Kia</router-link>
      <router-link to="/" class="link">Автобусы Ssang Yong</router-link>
    </div>
    <div class="column">
      <p class="header">КОНТАКТЫ</p>
      <router-link to="/" class="link">г. Рязань улица Связи</router-link>
      <router-link to="/" class="link">дом 25, строение 2</router-link>
      <router-link to="/" class="link">помещение Н9 офис №2</router-link>
      <router-link to="/" class="link"><br>пн-пт: 09:00-18:00</router-link>
      <router-link to="/" class="link"><br>123@mail.result</router-link>
      <router-link to="/" class="link">123@mail.result</router-link>
      <router-link to="/" class="link">123@mail.result</router-link>
    </div>
    <div class="column">
      <p class="info">
        ООО ЗЕЛЕНОГЛАЗОЕ ТАКСИ<br>
        НЕ ТОРМОЗИ НЕ ТОРМОЗИ<br>
        OOO И ОТВЕЗИ МЕНЯ ТУДА
      </p>
    </div>
  </div>
</template>


<style scoped>
.app-footer {
  height: 312px;
  background: #00174a;
  width: 100%;
  margin-bottom: 0px;
  padding: 0px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.app-footer > .bottom-logo {
  width: 128px;
  height: 64px;
}

.app-footer > .column {
  height: 80%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  text-align: left;
}

.app-footer > .column > .header {
  padding: 0px;
  margin: 16px 0px;

  color: #757575;

  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
}

.app-footer > .column > .link {
  padding: 0px;
  margin: 0px;
  text-decoration: none;

  color: #FAFAFA;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 180%;
}

.app-footer > .column > .info {
  padding: 0px;
  margin: 48px 0px;

  color: #757575;

  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
}
</style>


<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "app-footer",
});
</script>
