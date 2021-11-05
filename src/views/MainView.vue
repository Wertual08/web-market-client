<template>
  <div class="main-view">
    <div class="container">
      <main-slider class="slider" :images="slides"/>
      <main-navigator class="navigator"/>
    </div>
    <call-back-card class="call" >
      <template v-slot:title>Хотите оставить заявку?</template>
      <template v-slot:subtitle>Заполните форму</template>
    </call-back-card>
  </div>
</template>


<style scoped>
.call {
  background-color: rgba(25, 47, 96, 1);
  width: 100%;
}
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
</style>


<script lang="ts">
import { defineComponent } from "vue";
import Section from "@/models/section";
import SectionsRepository from "@/repositories/sectionsRepository";
import RecordsRepository from "@/repositories/recordsRepository";
import PublicRepository from "@/repositories/publicRepository";
import MainSlider from "@/components/main/MainSlider.vue";
import MainNavigator from "@/components/main/MainNavigator.vue";
import CallBackCard from "@/components/main/CallBackCard.vue";

export default defineComponent({
  components: { MainSlider, MainNavigator, CallBackCard },

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

    this.publicRepository
      .getMainSlides()
      .then((models) => (this.slides = models));
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
