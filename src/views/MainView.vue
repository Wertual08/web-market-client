<template>
  <div id="main">
    <div id="container">
      <img class="SliderImg" src=@/assets/slideImg.jpg/> 
      <table class="table"> 
        <div class="sections" v-for="section in sections" :key="section.id"> 
          <router-link class="productCardContent" :to="{ path: '/catalog' }"> 
            <div class="prodCardContent"> 
              <p class="prodName">{{ section.name }}</p> 
              <img class="sectionImg" :src="sectionImage(section.record)"> 
            </div> 
          </router-link> 
        </div> 
      </table> 
    </div>
  </div>
</template>


<style scoped>
.SliderImg {
  width: auto;
  height: auto;
  min-height: 124px;
  min-width: 293px ;
  align-content: center;
}
#main {
  background: #E5E5E5;
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
}
.sectionImg {
  width: 150pt;
  height: 150pt;
  margin-top: 10pt;

}
.table {
 margin-left: 20px;
}
.prodCardContent {
  width: 100%;
  height: 100%;

}
.sections {
  width: 220px;
  height: 300px;
  display: inline;
  float: left;
  overflow: hidden;
  background: lightblue;
  margin: 10px;
}

</style>

<script lang="ts">
import { defineComponent } from 'vue'
import Section from '@/models/section'
import SectionsRepository from '@/repositories/sectionsRepository'
import RecordsRepository from '@/repositories/recordsRepository'

export default defineComponent({
  setup() {
    return {
      sectionsRepository: new SectionsRepository(),
    }
  },

  data() {
    return {
      sections: [] as Section[],
    };
  },

  mounted() {
    this.sectionsRepository.getSections()
      .then((result: Section[]) => {
        this.sections = result;
      });
  },

  methods: {
    sectionImage(record: string): string|null {
      return RecordsRepository.toUrl(record) ?? require('@/assets/meme.gif')
    }
  },

  computed: {
    test() {
    }
  }
});
</script>
