<template>
  <div id="main">
    <div id="container">
      <main-slider />
      <img class="SliderImg" src=@/assets/slideImg.jpg/>
      <table class="table">
        <div class="sections" v-for="section in sections" :key="section.id">
          <router-link class="productCardContent" :to="{ path: '/catalog' }">
            <div class="prodCardContent">
              <img class="sectionImg" :src="sectionImage(section.record)" />
              <p class="prodName">{{ section.name }}</p>
            </div>
          </router-link>
        </div>
      </table>
      <div class = 'mini-page'>
        <div class="cont">
          Остались Вопросы? <br />
          <div class="cont2">Закажите обратный звонок</div>
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
            <button class="but">Отправить заявку на звонок</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.mini-page{
    background-color: rgba(25, 47, 96, 1);
  width: auto;
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
.SliderImg {
  width: auto;
  height: auto;
  min-height: 124px;
  min-width: 293px;
  align-content: center;
}
#main {
  background: #e5e5e5;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
}
#container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  min-height: 1080px;
  background: #f7f7f7;
}
.sectionImg {
  width: 150pt;
  height: 150pt;
  margin-top: 30pt;
}
.table {
  margin-top: 50px;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1184px;
}
.productCardContent {
  text-decoration: none;
}
.prodCardContent {
  width: 100%;
  height: 100%;
}
.sections {
  width: 293px;
  height: 423px;
  left: 0%;
  right: 0%;
  top: 0%;
  bottom: 0%;
  background: #ffffff;
  border: 1px solid #e3ecf3;
  display: inline;
  float: left;
  overflow: hidden;
}
.prodName {
  height: 78px;
  /* Headline / H4 */
  font-family: Inter;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 130%;
  /* or 26px */
  color: #363f53;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";
import Section from "@/models/section";
import SectionsRepository from "@/repositories/sectionsRepository";
import RecordsRepository from "@/repositories/recordsRepository";
import MainSlider from "@/components/main/MainSlider.vue";

export default defineComponent({
  components: { MainSlider },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
    };
  },

  data() {
    return {
      sections: [] as Section[],
    };
  },

  mounted() {
    this.sectionsRepository.getSections().then((result: Section[]) => {
      this.sections = result;
    });
  },

  methods: {
    sectionImage(record: string): string {
      return RecordsRepository.toUrl(record) ?? require("@/assets/meme.gif");
    },
  },

  computed: {
    test() {},
  },
});
</script>
