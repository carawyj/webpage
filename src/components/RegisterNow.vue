<template>
  <div>
    <div class="info-block">
      <div class="info row-1">
        <div class="title">
          <span class="icon-chat"></span> {{ languageData.wechatId }}
        </div>
        <div class="text">
          sblthree
        </div>
      </div>
      <div class="info row-2">
        <div class="title">
          <span class="icon-phone"></span> {{ languageData.phone }}
        </div>
        <div class="text">
          +1 604 773 5255
        </div>
      </div>
      <div class="info row-3">
        <div class="title">
          <span class="icon-mail"></span> {{ languageData.email }}
        </div>
        <div class="text">
          sliu@ivyluxec.com
        </div>
      </div>
      <div class="info row-4">
        <div class="title">
          <span class="icon-location"></span> {{ languageData.address }}
        </div>
      </div>
      <div class="text">
        #173-2729 158 Street, Surrey, BC V3Z 1P4
      </div>
    </div>
    <div class="qr-code-block" v-show="isFullSize">
      <img class="qr-code" src="../assets/logo-02.png">
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'RegisterNow',
  props: {
    isFullSize: Boolean,
  },
  computed: {
    ...mapGetters([
      'language'
    ]),
    languageData() {
      let languageData = {};
      if(this.language === 'en') {
        languageData.wechatId = 'Wechat ID';
        languageData.phone = 'Phone';
        languageData.email = 'Email';
        languageData.address = 'Address';
      } else {
        languageData.wechatId = '微信';
        languageData.phone = '電話';
        languageData.email = '郵箱';
        languageData.address = '地址';
      }
      return languageData;
    }
  }
}
</script>

<style scoped>
.icon-chat:before {
  color: #746ADB;
}
.icon-phone:before {
  color: #746ADB;
}
.icon-mail:before {
  color: #746ADB;
}
.icon-location:before {
  color: #746ADB;
}
.info {
  padding-top: 10px;
}
.info:first-child {
  padding-top: 0px;
}
.text {
  margin-left: 24px;
}
.qr-code {
  height: 180px;
}

</style>
