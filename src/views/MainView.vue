<template>
  <div id="main">
    <div id="container">
      <img class="SliderImg" src=@/assets/slideImg.jpg/> 
      <table class="table"> 
        <div class="sections" v-for="section in sections" :key="section.id"> 
          <router-link class="productCardContent" :to="{ path: '/catalog' }"> 
            <div class="prodCardContent"> 
              <img class="sectionImg" :src="sectionImage(section.record)">
              <p class="prodName">{{ section.name }}</p> 
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
  background: #F7F7F7;
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
  background: #FFFFFF;
  border: 1px solid #E3ECF3;
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
  color: #363F53;
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
    sectionImage(record: string): string {
      return RecordsRepository.toUrl(record) ?? require('@/assets/meme.gif')
    }
  },

  computed: {
    test() {
    }
  }
});
</script>
