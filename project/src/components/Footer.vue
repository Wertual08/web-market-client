<template class = 'footer'>
  <div class="back">
    <div class="contact">
      <p class="phone">8 (800) 100-09-08</p>
      <p class="mail">
        <a href="mailto:info@korea-bus.ru">info@korea-bus.ru</a>
      </p>
    </div>
    <div>
      <button>Главная</button>
      <button>Запчасти</button>
      <button>Доставка и оплата</button>
      <button>Полезная информация</button>
      <button>Контакты</button>
    </div>
  </div>
</template>

<style scoped>
button {
  margin-inline: 10px;
  color: rgb(0, 0, 0);
  background-color: rgb(0, 225, 255);
  margin-top: 11px;
}
.back {
  height: 60px;
  font: bold 1em "Fira Sans", serif;

  padding: 10px; /* Поля вокруг текста */
  background: #030b3a; /* Цвет фона */
  width: 100%; /* Ширина слоя */
}
.contact {
  height: 2ex;
  float: none;
  margin-right: 20px;
  text-align: left;
}
.phone {
  color: rgb(0, 189, 247);
  margin-top: 0ex;
  font: 1em "Fira Sans", serif;
  margin-bottom: 1ex;
  text-align: center;
}
.mail {
  margin-top: 4ex;
  font: 1em "Fira Sans", serif;
  text-align: center;
}
a {
  color: rgb(0, 189, 247);
}
.footer {
  position: relative;
  left: 0;
  bottom: 0;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  margin-bottom: 0ch;
  margin-block-end: 0em;

}
</style>
