<template>
  <div class="main-view">
    <div class="container">
      <main-slider class="slider" :images="slides"/>
      <main-navigator class="navigator"/>
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
.main-view {
  width: 100%;

  background: #e5e5e5;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
.main-view > .container {
  width: 90%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main-view > .container > .slider {
  width: 100%;
  height: 512px;
}
.main-view > .container > .navigator {
  width: 80%;
  margin: 64px 0;
}

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
</style>


<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/models/section'
import SectionsRepository from '@/repositories/sectionsRepository'
import RecordsRepository from '@/repositories/recordsRepository'
import PublicRepository from '@/repositories/publicRepository'
import MainSlider from '@/components/main/MainSlider.vue'
import MainNavigator from '@/components/main/MainNavigator.vue'

export default defineComponent({
  components: { MainSlider, MainNavigator },

  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
      publicRepository: new PublicRepository(),
    };
  },

  data() {
    return {
      sections: [] as Section[],
      slides: [] as string[],
    };
  },

  mounted() {
    this.sectionsRepository.getSections().then((result: Section[]) => {
      this.sections = result;
    });

    this.publicRepository.getMainSlides()
      .then(models => this.slides = models)
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
