<template class = 'footer'>
  <div class="back">
    <img class="logo" src="/img/logo.ff5cf2ac.svg" alt="vue logo" data-v-d1a7e442="">
    <div class="h1">
      <div class="fast">БЫСТРЫЕ ССЫЛКИ</div>
      <div class="h11">Главная</div>
      <div class="h11">Возврат и обмен</div>
      <div class="h11">Где купить</div>
      <div class="h11">Акции</div>
      <div class="h11">Контакты</div>
    </div>
    <div class="h2">
      <div class="fast">КАТАЛОГ</div>
      <div class="h12">DAEWOO ULTRA</div>
      <div class="h12">Запчасти КМУ</div>
      <div class="h12">Грузовики Hyndai</div>
      <div class="h12">Автобусы Hyndai</div>
      <div class="h12">Автобусы Daewoo</div>
      <div class="h12">Грузовики Kia</div>
      <div class="h12">Автобусы  Kia</div>
      <div class="h12">Автобусы Ssang Yong</div>
    </div>
    <div class="h3">
      <div class="fast">КОНТАКТЫ</div>
      <div class="h13">г. Рязань улица Связи</div>
      <div class="h13">дом 25, строение 2</div>
      <div class="h13">помещение Н9 офис №2</div>

      <div class="h133">пн-пт: 09:00-18:00</div>

      <div class="h13">123@mail.ru</div>
      <div class="h13">123@mail.ru</div>
      <div class="h13">123@mail.ru</div>
   </div>
   <div class="h4">
      <div>ООО ЗЕЛЕНОГЛАЗОЕ ТАКСИ</div>
      <div>НЕ ТОРМОЗИ НЕ ТОРМОЗИ</div>
      <div>OOO И ОТВЕЗИ МЕНЯ ТУДА</div>
    </div>
  </div>
</template>


<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "footer",
});
</script>



<style scoped>
.h133{
  margin-top: 30px;
  margin-bottom: 30px;
}
.logo{
  display: inline-block;
  position: relative;
  bottom: 10%;
  right: 15%;
  height: auto;
  width: auto;
  height: 15%;
}
.h4 {
  bottom: 20%;
  left: 10%;
  text-align: left;
  position: relative;
  display: inline-block;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: rgba(193, 193, 193, 1);
  opacity: 0.5;
  margin-left: 20px;
}
.h3 {
  top: 20px;
  left: 80px;
  position: relative;
  text-align: left;
  display: inline-block;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #fafafa;
  margin-left: 20px;
}
.h2 {
  bottom: 30px;
  left: 40px;
  position: relative;
  display: inline-block;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  color: #fafafa;
}
.h1 {
  bottom: 60px;
  right: 40px;
  display: inline-block;
  position: relative;
  text-align: left;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 100%;
  color: #fafafa;

}
.h13 {
  margin-top: 5px;
  font-size: 12px;
  text-align: left;
}

.fast {
  text-align: left;
  opacity: 0.5;
}
.h12 {
  text-align: left;
  font-size: 12px;
  margin-top: 5px;
}
.h11 {
  text-align: left;
  margin-top: 10px;
  font-size: 12px;
}


.back {
  height: 312px;
  background: #00174a;
  width: 100%; /* Ширина слоя */
  width: auto;
  margin-bottom: 0px;
}
</style>
