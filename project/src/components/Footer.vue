<template class = 'footer'>
  <div class="back">
    <div class="contact">
      <p class="phone">Звоните: 8 (800) 100-09-08</p>
    </div>
    <div class="but">
      <a class="mail" href="mailto:info@korea-bus.ru">info@korea-bus.ru</a>
      <button>Главная</button>
      <button>Запчасти</button>
      <button>Доставка и оплата</button>
      <button>Полезная информация</button>
      <button>Контакты</button>
    </div>
  </div>
</template>

<style scoped>
.but {
  background: #030b3a;
  margin-top: 5px;
  position: relative;
  text-align: center;
}
button {
  margin-inline: 10px;
  color: rgb(0, 0, 0);
  background-color: #0f8397;
  border: none;
  color: white;
  padding: 8px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  border-radius: 4px;
}
.back {
  height: 90px;
  padding: 10px;
  background: #030b3a; /* Цвет фона */
  width: 100%; /* Ширина слоя */
}
.contact {
  height: 2ex;
  float: none;
  margin-right: 20px;
  text-align: left;
  margin-bottom: 0px;
}
.phone {
  color: rgb(0, 189, 247);
  margin-top: 0ex;
  font: 1em "Fira Sans", serif;
  margin-bottom: 1ex;
  text-align: center;
  position: relative;
  left: 25px;
}
.mail {
  margin-top: 5ex;
  font: 1em "Fira Sans", serif;
  position: relative;
  text-align: left;
  left: -400px;
  
}
a {
  color: rgb(0, 189, 247);
}
</style>
