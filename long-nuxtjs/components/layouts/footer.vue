<template>
  <div class="page-footer">
    <div class="bg-footer">
      <div class="wrapper-footer">
        <div class="footer-logo">
          <div class="logo">
            <img src="~assets/images/logo-company.png" alt="">
          </div>
          <div class="footer-icon footer-network flex-between">
            <img src="~assets/images/network/twitter.png" alt="">
            <img src="~assets/images/network/facebook.png" alt="">
            <img src="~assets/images/network/in.png" alt="">
          </div>
        </div>
        <div class="footer-right">
          <div class="footer-address">
            <h3>{{ $t("title.address") }}</h3>
            <div class="footer-icon footer-icon__address flex">
              <img src="~assets/images/icon/address.png" alt="">
              <p>
                {{ $t("text.addresLetf") }}<br>{{ $t("text.addresRight") }}
              </p>
            </div>
            <div class="footer-icon footer-icon__phone flex">
              <img src="~assets/images/icon/phone.png" alt="">
              <p>
                (+1) 555-0108-000 {{ $t("text.or") }} (+236) 555-0108
              </p>
            </div>
          </div>
          <div class="footer-subscribe">
            <h3>{{ $t("title.subscribe") }}</h3>
            <p>{{ $t("text.subscribe") }}</p>
            <CommonsInput :placeholder="`${$t('placeholder.email')}`" />
          </div>
        </div>
      </div>
    </div>
    <p class="coppy-right text-center">
      2017 Copyright. Policy.
    </p>
  </div>
</template>
<script>
import Vue from 'vue'
export default Vue.extend({
  name: 'Footer',
  data () {
    return {
    }
  }
})
</script>
