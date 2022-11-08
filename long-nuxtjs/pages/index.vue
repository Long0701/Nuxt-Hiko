<template>
  <div class="home-page">
    <client-only>
      <CommonsGotoTop />
      <CommonsAboutUs />
      <CommonsOurGames :game-images="gameImages" />
      <CommonsCarousel :list-images="listImages" />
    </client-only>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data () {
    return {
      listImages: [
        require('@/assets/images/partners/logo-1.png'),
        require('@/assets/images/partners/logo-2.png'),
        require('@/assets/images/partners/logo-3.png'),
        require('@/assets/images/partners/logo-4.png'),
        require('@/assets/images/partners/logo-5.png'),
        require('@/assets/images/partners/logo-6.png'),
        require('@/assets/images/partners/logo-7.png')
      ],
      gameImages: [
        require('@/assets/images/games/image-1.png'),
        require('@/assets/images/games/image-2.png'),
        require('@/assets/images/games/image-3.png'),
        require('@/assets/images/games/image-4.png'),
        require('@/assets/images/games/image-5.png'),
        require('@/assets/images/games/image-6.png'),
        require('@/assets/images/games/image-7.png'),
        require('@/assets/images/games/image-8.png'),
        require('@/assets/images/games/image-9.png'),
        require('@/assets/images/games/image-10.png'),
        require('@/assets/images/games/image-11.png'),
        require('@/assets/images/games/image-12.png')
      ]
    }
  }
})
</script>
