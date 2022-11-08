<template>
  <div class="page-header">
    <div class="bg-header">
      <div class="container wrapper-header">
        <div class="flex-between wrapper">
          <NLink to="/" class="logo">
            <img src="~assets/images/logo-company.png" alt="">
          </NLink>
          <div class="header-right">
            <b-navbar toggleable="lg" class="menu" type="dark">
              <b-navbar-toggle target="nav-collapse" />
              <b-collapse is-nav>
                <b-navbar-nav class="ml-auto header__right flex align-items-center">
                  <nuxt-link to="" class="menu-name">
                    {{ $t("title.upAboutUs") }}
                  </nuxt-link>
                  <nuxt-link to="" class="menu-name">
                    {{ $t("title.upGames") }}
                  </nuxt-link>
                  <nuxt-link to="" class="menu-name">
                    {{ $t("title.upPartners") }}
                  </nuxt-link>
                  <nuxt-link to="" class="menu-name">
                    {{ $t("title.upContactUs") }}
                  </nuxt-link>
                  <CommonsDropdown
                    :options="languageOptions"
                  />
                </b-navbar-nav>
              </b-collapse>
            </b-navbar>
          </div>
        </div>
        <div class="countdown-timer text-center">
          <h3 class="page-heading">{{ $t("title.gettingReady") }}</h3>
          <div class="countdown-timer__content flex">
            <div class="countdown-timer__text">{{ days }}<p>{{ $t("text.days") }}</p></div>
            <div class="countdown-timer__text">:</div>
            <div class="countdown-timer__text">{{ hours }}<p>{{ $t("text.hours") }}</p></div>
            <div class="countdown-timer__text">:</div>
            <div class="countdown-timer__text">{{ minutes }}<p>{{ $t("text.minutes") }}</p></div>
            <div class="countdown-timer__text">:</div>
            <div class="countdown-timer__text">{{ seconds }}<p>{{ $t("text.second") }}</p></div>
          </div>
          <p class="countdown-timer__explain">{{ $t("text.gettingReady") }}</p>
          <CommonsInput :placeholder="`${$t('placeholder.email')}`" />
        </div>
      </div>
    </div>
    <div class="header-image">
      <img src="~assets/images/header-image.png" alt="">
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

export default Vue.extend({
  name: 'Header',
  data () {
    return {
      countDownDate: new Date("Jan 1, 2023 00:00:00").getTime(),
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      interval: null,
      languageOptions: [
        { id: 1, name: 'Vietnamese', src: require('@/assets/images/language/vi.png'), isSelect: false },
        { id: 2, name: 'English', src: require('@/assets/images/language/en.png'), isSelect: true }
      ],
    }
  },
  created () {
    this.interval = setInterval(this.countTime, 1000)
  },
  methods: {
    countTime() {
      const now = new Date().getTime()
      var distance = this.countDownDate - now;
      // Time calculations for days, hours, minutes and seconds
      this.days = Math.floor(distance / (1000 * 60 * 60 * 24));
      this.hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      this.seconds = Math.floor((distance % (1000 * 60)) / 1000);
    }
  }
})
</script>
