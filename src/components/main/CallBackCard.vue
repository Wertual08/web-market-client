<template>
  <div class="mini-page">
    <div class="title">
      <slot name="title"/> <br />
      <div class="subtitile"><slot name="subtitle"/></div>
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
        <action-button class="button">Отправить заявку на звонок</action-button>
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
.button {
  width: auto;
  height: 48px;

  position: relative;
  top: 32px;
  padding: 0 16px;
  
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 100%;
}
.input {
  text-align: left;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 100%;
  color: #8c929f;
}
.text-input {
  width: 190%;
  padding-inline: 16px;
  background: #355396;
  border-radius: 6px;
  font-family: Inter;
  font-style: normal;
  font-weight: 500;
  margin-bottom: 50px;
  height: 48px;
  text-align: left;
  border: none;
  color: #ffffff;
}
.text-input :active,
:hover,
:focus {
  outline: #e04040;

}
.phoneback {
  display: flex;
  justify-content: space-around;
  align-content: center;
}

.subtitile {
  color: #5c6175;
}
.title {
  white-space: normal;
  background-color: rgba(25, 47, 96, 1);
  letter-spacing: 0em;
  text-align: left;
  margin-left: 170px;
  height: 200px;
  margin-top: 5%;
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 44px;
  color: #ffffff;
}
</style>

<script lang="ts">
import ActionButton from '@/components/common/ActionButton.vue'
import { defineComponent } from "vue";

export default defineComponent({
  name: "call-back-card",
  components: { ActionButton },
  setup() {},
});
</script>
