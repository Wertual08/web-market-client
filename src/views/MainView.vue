<template>
  <div class="main-view">
    <main-slider class="slider" :images="slides"/>
    <main-navigator class="navigator"/>
    <call-back-card class="call"/>
    <main-reviews-list class="reviews"/>
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

.main-view > .slider {
  width: 100%;
  height: 680px;
}

.main-view > .navigator {
  width: 80%;
  margin: 64px 0;
}

.main-view > .call {
  background-color: rgba(25, 47, 96, 1);
  width: 100%;
}

.main-view > .reviews {
  width: 80%;
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
import CallBackCard from '@/components/main/CallBackCard.vue'
import MainReviewsList from '@/components/main/reviews/MainReviewsList.vue'

export default defineComponent({
  components: { MainSlider, MainNavigator, CallBackCard, MainReviewsList },

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
