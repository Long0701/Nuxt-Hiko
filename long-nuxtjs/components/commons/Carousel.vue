<template>
  <section class="custom-carousel-bg">
    <div class="custom-carousel">
      <div class="carousel">
        <h3 class="page-heading text-center heading-carousel">{{ $t("title.ourPartners") }}</h3>
          <client-only>
            <carousel 
              :nav="true"
              :loop="true" 
              :responsive="responsiveCarousel"
              :dots="false"
            >
              <div v-for="(item, index) in listImages" :key="index" class="image-list">
                <img :src="item">
              </div>
            </carousel>
          </client-only>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    listImages: {
      type: Array,
      default: Array
    }
  },
  data () {
    return {
      responsiveCarousel: {
        1280: { items: 5, stagePadding: 0 },
        1024: { items: 5, stagePadding: 0 },
        768: { items: 3, stagePadding: 0 },
        375: { items: 1, stagePadding: 0 }
      }
    }
  }
})
</script>
