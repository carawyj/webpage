<template>
  <div>
    <div class="row-1">
      <div class="home-pic-container">
        <img class="home-pic" src="../assets/image1.jpg"/>
      </div>
      <div class="info-container">
        <div class="content">
          <p> {{ languageData.courseInfoText }}</p>
          <div class="course-button" @click="goToCourse()"> {{ languageData.goToCourseButton }} </div>
        </div>
      </div>
    </div>
    <div class="row-2 title-row" v-show="isFullSize">
      <div class="title-column"> {{ languageData.previousCase }} </div>
      <div class="title-column"> {{ languageData.featuredCourses }} </div>
      <div class="title-column"> {{ languageData.registerNow }} </div>
      <div class="title-column"> {{ languageData.hiring }} </div>
    </div>
    <div class="row-3">
      <div class="column column-1">
        <div class="title-row" v-show="!isFullSize"> {{ languageData.previousCase }} </div>
        <PreviousCases v-bind:isFullSize="isFullSize"></PreviousCases>
      </div>
      <div class="column column-2">
        <div class="title-row" v-show="!isFullSize"> {{ languageData.featuredCourses }} </div>
        <FeaturedCourses v-bind:isFullSize="isFullSize"></FeaturedCourses>
      </div>
      <div class="column column-3">
        <div class="title-row" v-show="!isFullSize"> {{ languageData.registerNow }} </div>
        <RegisterNow v-bind:isFullSize="isFullSize"></RegisterNow>
      </div>
      <div class="column column-4">
        <div class="title-row" v-show="!isFullSize"> {{ languageData.hiring }} </div>
      </div>
    </div>
    <div class="footer">
      {{ languageData.footer }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PreviousCases from '../components/PreviousCases.vue'
import FeaturedCourses from '../components/FeaturedCourses.vue'
import RegisterNow from '../components/RegisterNow.vue'

export default {
  name: 'Home',
  components: {
    PreviousCases,
    FeaturedCourses,
    RegisterNow
  },
  data() {
    return {
      windowWidth: window.innerWidth,
      isFullSize: window.innerWidth >= 800,
    }
  },
  computed: {
    ...mapGetters([
      'language'
    ]),
    languageData() {
      let languageData = {};
      if(this.language === 'en') {
        languageData.courseInfoText = "Introductio...";
        languageData.goToCourseButton = "EXPLORE COURSES";
        languageData.footer = "2019© All Rights Reserved - IvyLux Education Connsulting";
        languageData.previousCase = "PREVIOUS CASE";
        languageData.featuredCourses = "FEATURED COURSES";
        languageData.registerNow = "REGISTER NOW!";
        languageData.hiring = "WE ARE HIRING";
      } else {
        languageData.courseInfoText = "簡介。。。";
        languageData.goToCourseButton = "看課程";
        languageData.footer = "2019© 版權所有 - IvyLux Education Connsulting";
        languageData.previousCase = "成功案例";
        languageData.featuredCourses = "熱門課程";
        languageData.registerNow = "聯繫方式";
        languageData.hiring = "招賢納士";
      }
      return languageData;
    },
  },
  methods: {
    goToCourse() {
      this.$store.dispatch({
        type: 'setPage',
        page: 'course'
      });
      this.$router.push({name:'course'});
    }
  },
  watch: {
    windowWidth(newWidth, oldWidth) {
     this.isFullSize = newWidth >= 800;
    }
  },
  mounted() {
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowWidth = window.innerWidth
      });
    })
  },
}
</script>

<style scoped>
.row-1 {
  height: 600px;
  width: 100%;
  border: 1px solid #D9DCE3;
}
.home-pic-container {
  height: 60%;
  overflow: hidden;
}
.home-pic {
  width:100%;
  height: 100%;
}
.info-container {
  background-color: #E5E8F9;
  height: 40%;
}
.content {
  align-items: center;
  justify-content: center;
  text-align: center;
  padding-top: 70px;
  color: #413F58
}
.course-button {
  border: 1px solid #413F58;
  width: 150px;
  padding-top: 2px;
  padding-bottom: 2px;
  border-radius: 3px;
  margin: auto;
  margin-top: 20px;
  cursor: pointer;
}

.row-2 {
  width: 100%;
  display: inline-flex;
}
.title-column {
  width: 25%;
  margin-top: 10px;
  margin-bottom: 10px;
  text-align: center;
}

.row-3 {
  height: 1000px;
  width: 100%;
}
.column {
  height: 25%;
  border-top: 1px solid #D9DCE3;
  padding: 0px 10px;
}
.column:first-child {
  border-top: 0px;
  border-left: 0px;
}
.title-row {
   margin-top: 10px;
   margin-bottom: 10px;
}

.footer {
  text-align: center;
  font-size: 12px;
}
@media screen and (min-width:800px) {
  .row-1 {
    display: inline-flex;
    height: 500px;
  }
  .home-pic-container {
    height: 100%;
    width: 60%;
    overflow: hidden;
    justify-content: center;
  }
  .info-container {
    height: 100%;
    width: 40%;
  }
  .content {
    padding-top: 100px;
  }

  .row-3{
    display: inline-flex;
    height: 400px;
    width: 100%;
  }
  .column {
    height: 100%;
    width: 25%;
    border-top: 0px;
    border-left: 1px solid #D9DCE3;
    padding: 10px 10px;
    padding-top: 0px;
  }

  .footer {
    margin-top: 20px;
  }
}
</style>
