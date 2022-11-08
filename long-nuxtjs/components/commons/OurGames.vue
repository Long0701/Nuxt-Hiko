<template>
  <section class="our-games">
    <h3 class="page-heading text-center heading-carousel">{{ $t("title.ourGames") }}</h3>
    <p class="des">{{ $t("text.ourGames") }}</p>
    <div class="image-list">
      <div class="grid-container">
        <div v-for="(item, index) in gameImages" :key="index" class="image-game">
          <div class="image-detail">
            <h3>E-Space</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <img :src="item">
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    gameImages: {
      type: Array,
      default: Array
    }
  },
  data () {
    return {
    }
  }
})
</script>
