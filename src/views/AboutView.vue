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
    <img class="dislocation" src="@/assets/dislocation,.jpg" />
    <div class="cont">
      Остались Вопросы? <br />
      <div class="cont2">Закажите обратный звонок</div>
    </div>
    <!-- <div class="phoneback">
      <div class="column">
        <div>Как мы можем к вам обращаться?</div>
        <input class="text-input" placeholder="Поиск товара" />
      </div>
      <div class="column">
        <div>Как мы можем к вам обращаться?</div>
        <input class="text-input" placeholder="Поиск товара" />
      </div>
      <div class="column">
        <button>Отправить заявку на звонок</button>
      </div>
    </div>
  </div> -->
</template>


<style scoped>
.phoneback{
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.dislocation {
  box-sizing: border-box;
  width: 100%;
}
.page {
  background-color: rgba(25, 47, 96, 1);
  width: auto;
}
.cont2 {
  color: #5c6175;
}
.cont {
  background-color: rgba(25, 47, 96, 1);
  letter-spacing: 0em;
  text-align: left;
  position: relative;
  left: 134px;
  height: 200px;
  margin-top: 64px;
  width: 1080px;
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