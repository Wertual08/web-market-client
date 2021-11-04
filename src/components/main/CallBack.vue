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
        <submit-button class="but"><href>Отправить заявку на звонок</href></submit-button>
      </div>
    </div>
  </div>
</template>



<style>
.but:hover {
  background: #C03535;
}

.but:active {
  background: #A03030;
}
.but {
  background: #e04040;
  border-radius: 6px;
  color: #ffffff;
  position: relative;
  padding: 18px 16px;
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
  color: #ffffff;

}
.text-input :active, :hover, :focus {
    outline:#e04040;
    outline-offset: #e04040;
}
.phoneback {
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-content: center;
}
.dislocation {
  box-sizing: border-box;
  width: 100%;
}

.subtitile {
  padding: 1px;
  color: #5c6175;
}
.title {
  position: relative;
  width: 1000px;
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

<script>
import Button from "@/components/common/ActionButton.vue"
export default {
    components: {Button},
    name: 'callbackcard',
}
</script>