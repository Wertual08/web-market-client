<template>
  <div class="mini-page">
    <div class="title">
      Остались Вопросы? <br />
      <div class="subtitile">Закажите обратный звонок</div>
    </div>
    <div class="phoneback">
      <div class="column">
        <div class="input">Как мы можем к вам обращаться?</div>
        <input
          class="text-input"
          placeholder="Константин Васильевич Константинов"
        />
      </div>
      <div class="column">
        <div class="input">Как мы можем к вам обращаться?</div>
        <input class="text-input" placeholder="+7 (___) ___ __ __" />
      </div>
      <div class="column">
        <submit-button class="button">Отправить заявку на звонок</submit-button>
      </div>
    </div>
  </div>
</template>



<style scoped>
.column {
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: flex-end;
}
.button:hover {
  background: #c03535;
}

.button:active {
  background: #a03030;
}
.button {
  padding: 1px;
  width: 100%;
  position: relative;
  top: 32px;
  background: #e04040;
  border-radius: 6px;
  color: #ffffff;
  padding: 15px 16px;
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
  padding-inline: 16px;
  background: #355396;
  border-radius: 6px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  height: 48px;
  width: 470px;
  text-align: left;
  border: none;
  color: #ffffff;
}
.text-input :active,
:hover,
:focus {
  outline: #e04040;
  outline-offset: #e04040;
}
.phoneback {
  width: auto;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.dislocation {
  box-sizing: border-box;
  width: 100%;
}

.subtitile {
  width: 100%;
  padding: 1px;
  color: #5c6175;
}
.title {
  width: 100%;
  width: 560px;
  background-color: rgba(25, 47, 96, 1);
  letter-spacing: 0em;
  text-align: left;
  left: 5.7%;
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
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "call-back-card",
  setup() {},
});
</script>
