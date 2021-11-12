<template>
  <div class="page">
    <div class="сontacts">
      <div class="column">
        <p class="header">Адрес</p>
        <div class="city">Москва</div>
        <div class="link">Ленинский проспект,</div>
        <div class="link">д. 12, к. 3</div>
        <router-link to="/" class="link1">посмотреть на карте ></router-link>
      </div>
      <div class="column">
        <p class="header">Основной номер телефона</p>
        <div class="link5">+7 (800) 100-09-08</div>
        <div to="/" class="link4">Заказ по телефону</div>
        <div to="/" class="link2">10:00 - 20:00</div>
        <div to="/" class="link3">пн - сб</div>
      </div>
      <div class="column">
        <p class="header">Дополнительные номера</p>
        <div class="link">+7 (495) 508-44-05</div>
        <div class="link6">
          Оперативно ответим на ваши вопросы <br />
          По Москве
        </div>
        <div class="link7">
          +7 (903) 508-44-05 +7
          <br />+7(925) 002-20-30 <br />+7 (916)196-77-02
        </div>
      </div>
      <div class="column">
        <p class="header">Электронная почта</p>
        <div class="link8">
          info@korea-bus.ru <br />
          sale@korea-bus.ru <br />
          parts@korea-bus.ru
        </div>
      </div>
    </div>
    
    <iframe 
      class="dislocation"
      src="https://api-maps.yandex.ru/frame/v1/-/CVh7YBYg?" 
      frameborder="0"
    />

    <call-back-card class="call">
      <template v-slot:title>Остались вопросы?</template>
      <template v-slot:subtitle>Закажите обратный звонок</template>
    </call-back-card>
  </div>
</template>


<style scoped>
.call {
  background-color: rgba(25, 47, 96, 1);
  width: 100%;
}
.but {
  background: #e04040;
  border-radius: 6px;
  color: #ffffff;
  position: relative;
  top: 33px;
  right: 20%;
  padding: 18px 16px;
  width: 120%;
  height: 48px;
  text-align: center;
  box-sizing: border-box;
  border: none;
}
.input {
  text-align: left;
  margin-bottom: 20px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #8c929f;
}
.text-input {
  background: #355396;
  border-radius: 6px;

  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  height: 48px;
  width: 470px;
  text-align: left;
  border: none;
}
.phoneback {
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.dislocation {
  box-sizing: border-box;
  width: 90%;
  height: 700px;
}
.page {
  background-color: rgba(25, 47, 96, 1);
  width: auto;
}

.cont2 {
  padding: 1px;
  color: #5c6175;
}
.cont {
  box-sizing: border-box;
  padding: 1px;
  position: relative;
  width: 100%;
  background-color: rgba(25, 47, 96, 1);
  letter-spacing: 0em;
  text-align: left;
  left: 3%;
  position: relative;
  height: 200px;
  margin-top: 10%;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
}
.link8 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 180%;
  color: rgba(255, 255, 255, 1);
}
.link7 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  margin-top: 15px;
  color: rgba(255, 255, 255, 1);
  line-height: 34px;
}
.link6 {
  font-weight: 500;
  font-size: 12px;
  line-height: 180%;
  color: #8c929f;
  margin-top: 10px;
}
.link5 {
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: rgba(255, 255, 255, 1);
}
.link4 {
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  margin-top: 10px;
  color: #8c929f;
}
.link3 {
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #8c929f;
}
.link2 {
  margin-top: 40px;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: rgba(255, 255, 255, 1);
}
.link1 {
  color: rgba(224, 64, 64, 1);
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 160%;
  margin-top: 20px;
  text-decoration: none;
}
.city {
  font-weight: bold;
  font-size: 36px;
  color: rgba(255, 255, 255, 1);
}
.сontacts {
  height: 400px;
  background: rgba(25, 47, 96, 1);
  width: 100%;
  margin-bottom: 0px;
  padding: 0px;

  display: flex;
  justify-content: space-around;
  align-items: center;
}

.сontacts > .column {
  height: 80%;

  display: flex;
  flex-direction: column;
  text-align: left;
}

.сontacts > .column > .header {
  padding: 0px;
  margin: 16px 0px;

  color: #757575;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
}

.сontacts > .column > .link {
  padding: 0px;
  margin: 0px;
  text-decoration: none;

  color: #fafafa;

  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 180%;
}
</style>
<script lang = 'ts'>
import { defineComponent } from "vue";
import CallBackCard from "@/components/main/CallBackCard.vue";
export default {
  components: { CallBackCard },
  setup() {},
};
</script>