<template>
  <section class="about-us">
    <div class="about-us-des">
      <div class="about-us-des__left">
        <h3 class="page-heading">{{ $t("title.aboutUs") }}</h3>
        <p class="text">{{ $t("text.aboutUs") }}</p>
        <div class="about-us-amount">
          <div class="amount">
            <p class="number">600+</p>
            <p class="name">{{ $t("title.users") }}</p>
          </div>
          <div class="amount">
            <p class="number">135+</p>
            <p class="name">{{ $t("title.games") }}</p>
          </div>
        </div>
      </div>
      <div class="about-us-des__right">
        <div class="about-us-des__right__bg">
          <div class="detail flex mt-0">
            <img src="~assets/images/icon/hour.png" alt="">
            <div class="des">
              <h4>24 - {{ $t("title.hour") }}</h4>
              <p>{{ $t("text.hourDes") }}</p>
            </div>
          </div>
          <div class="detail flex">
            <img src="~assets/images/icon/design.png" alt="">
            <div class="des">
              <h4>{{ $t("title.design") }}</h4>
              <p>{{ $t("text.designDes") }}</p>
            </div>
          </div>
          <div class="detail flex">
            <img src="~assets/images/icon/team.png" alt="">
            <div class="des">
              <h4>{{ $t("title.team") }}</h4>
              <p>{{ $t("text.teamDes") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us-image">
      <img src="~assets/images/about-us-image.png" alt="">
    </div>
    <div class="about-us-bg"></div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
    }
  }
})
</script>
