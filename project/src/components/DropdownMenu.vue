<template>
  <nav id="menuVertical">
    <ul class="blocks">
      <li><a href="#m1">Первая услуга</a></li>
      <li>
        <a href="#m2">Вторая услуга</a>
        <ul>
          <li><a href="#m2_1">Выпадашка 1</a></li>
          <li><a href="#m2_2">Выпадашка 2</a></li>
        </ul>
      </li>
      <li>
        <a href="#m3">Третья</a>
        <ul>
          <li><a href="#m3_1">Выпадашка с третьей услуги 1</a></li>
          <li><a href="#m3_2">Выпадашка с третьей услуги 2</a></li>
          <li><a href="#m3_3">Краткая выпадашка</a></li>
        </ul>
      </li>
      <li><a href="#m4">4 услуга</a></li>
      <li>
        <a href="#m5">5 услуга</a>
        <ul>
          <li><a href="#m5_1">111111</a></li>
          <li><a href="#m5_2">2222 2222</a></li>
        </ul>
      </li>
      <li><a href="#m6">6 услуга</a></li>
      <li><a href="#m7">7 услуга</a></li>
      <li><a href="#m8">8 услуга</a></li>
    </ul>
  </nav>
  <!--menuVertical-->
</template>


<script >

import { defineComponent } from "vue";
export default defineComponent({
});
</script>


<style >
#menuVertical ul li:hover ul{display:block;}
#menuVertical {
  width: 20%;
  height: auto;
  box-sizing:border-box;
  float:left
}
#menuVertical ul {
  display: block;
  width: 100%;
  
  margin: 0px;
  padding: 0px;
  list-style: none;
  position: relative;
}
#menuVertical ul li {
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  ;
}
#menuVertical ul li a {
  position: relative;
  display: block;
  width: 100%;
  height: 39
vypadayushchiye menyu
dropdown menuspx;
  box-sizing: border-box;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: bold;
  color: #fbf7f7;
  line-height: 1.2em;
  padding: 10px 15px;
  background: #3a9cd3;
  border-top: 1px solid #236a92;
  text-decoration: none;
}
#menuVertical ul li:first-child a {
  border: 0px;
}
#menuVertical ul li a:hover,
#menuVertical ul li:hover a {
  background: #0a3cc1;
}
#menuVertical ul li ul {
  position: absolute;
  top: 0px;
  left: 100%;
  display: none;
  width: auto;
}
/*******показываем выпадашку при наведении ********/
#menuVertical ul li:hover ul {
  display: block;
}
#menuVertical ul li ul li a {
  white-space: nowrap;
  text-transform: none;
  padding: 5px 20px;
}
#menuVertical ul li ul li a:hover {
  background: #75c1d4;
  color: #0a3cc1;
}
</style>
