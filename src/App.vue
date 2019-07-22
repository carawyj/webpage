<template>
  <div id="app">
    <div class="nav-bar">
      <div class="nav-bar-left">
        <img class="logo-img" src="./assets/logo.png">
      </div>
      <div class="nav-bar-right">
        <div class="language">
          <div class="language-item"
            @click="changeLanguage('en')"
            v-bind:class="{selected: languageSelected['en']}"
          >
            EN
          </div>
          <div class="language-divider">|</div>
          <div class="language-item"
            @click="changeLanguage('zh')"
            v-bind:class="{selected: languageSelected['zh']}"
          >
            中文
          </div>
        </div>
        <div class="nav-bar-item">
          <div class="nav-bar-text"
            @click="changePage('contactUs')"
            v-bind:class="{selected: pageSelected['contactUs']}"
          >
            {{ languageData.contactUs }}
          </div>
        </div>
        <div class="nav-bar-item">
          <div class="nav-bar-text"
            @click="changePage('planning')"
            v-bind:class="{selected: pageSelected['planning']}"
          >
            {{ languageData.planning }}
          </div>
        </div>
        <div class="nav-bar-item">
          <div class="nav-bar-text"
            @click="changePage('course')"
            v-bind:class="{selected: pageSelected['course']}"
          >
            {{ languageData.course }}
          </div>
        </div>
        <div class="nav-bar-item">
          <div class="nav-bar-text"
            @click="changePage('team')"
            v-bind:class="{selected: pageSelected['team']}"
          >
            {{ languageData.team }}
          </div>
        </div>
        <div class="nav-bar-item">
          <div class="nav-bar-text"
            @click="changePage('about')"
            v-bind:class="{selected: pageSelected['about']}"
          >
            {{ languageData.about }}
          </div>
        </div>
        <div class="nav-bar-item">
          <div class="nav-bar-text"
            @click="changePage('home')"
            v-bind:class="{selected: pageSelected['home']}"
          >
            {{ languageData.home }}
          </div>
        </div>
      </div>
    </div>
    <router-view class="view"></router-view>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'app',
  components: {
  },
  computed: {
    ...mapGetters([
      'language',
      'page'
    ]),
    languageData() {
      let languageData = {};

      if(this.language === 'en') {
        languageData.home = 'HOME';
        languageData.about = 'ABOUT';
        languageData.team = 'TEAM';
        languageData.course = 'COURSE';
        languageData.planning = 'PLANNING';
        languageData.contactUs = 'CONTACT US';
      } else {
        languageData.home = '首頁';
        languageData.about = '關於';
        languageData.team = '團隊';
        languageData.course = '課程';
        languageData.planning = '計畫';
        languageData.contactUs = '聯絡我們';
      }
      return languageData;
    },
    languageSelected() {
      let languageSelected = {};
      let options = ['en', 'zh'];
      options.forEach((element) => {
        languageSelected[element] = (this.language === element);
      });
      return languageSelected;
    },
    pageSelected() {
      let pageSelected = {};
      let options = ['home', 'about', 'team', 'course', 'planning'];
      options.forEach((element) => {
        pageSelected[element] = (this.page === element);
      });
      return pageSelected;
    }
  },
  methods: {
    changePage(page) {
      this.$store.dispatch({
        type: 'setPage',
        page: page
      });
      this.$router.push({name:page});
    },
    changeLanguage(language) {
      this.$store.dispatch({
        type: 'setLanguage',
        language: language
      });
    }
  }
}
</script>

<style>
* {
  margin: 0;
  font-family: 'Abel', sans-serif;
  /* min-width: 1000px; */
}

.view {
  margin: 20px 40px;
}

.logo-img {
  height: 90px;
}

.nav-bar {
  margin: 0;
  padding-top: 20px;
  padding-left:40px;
  padding-right: 40px;
  display:inline-block;
  width: 100%;
}
.nav-bar-left {
  float: left
}
.nav-bar-right {
  float: right;
  display: block;
  padding-right: 80px;
}

.nav-bar-item {
  float: right;
  cursor: pointer;
  padding-top: 40px;
}

.nav-bar-item .nav-bar-text {
  color: #292929;
  font-size: 15px;
  display: block;
  text-align: center;
  padding: 16px 13px;
  text-decoration: none;
}

.nav-bar-item:hover {
  font-weight: bold;
}

.language {
  display:inline-flex;
  font-size: 12px;
  color: #292929;
  float: right;
  justify-content: center;
  padding-top: 30px;
  position: absolute;
  right: 0px;
  padding-right: 55px;
}
.language-divider {
  padding-right: 3px;
  padding-left: 3px;
}

.language-item {
  cursor: pointer;
}

.selected.language-item {
  font-size:15px;
  font-weight: bold;
}

.selected.nav-bar-text {
  font-weight: bold;
  border-bottom: 2px solid #D9DCE3;
}
</style>
