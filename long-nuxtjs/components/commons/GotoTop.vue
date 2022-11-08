<template>
  <div :class="['btn-gotop clearfix', { 'rotate-icon': scY }]" @click="scrollToTop">
    <i class="icon-top icon-arrow-down" />
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data () {
    return {
      isScroll: true,
      scY: 0
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.scY = window.scrollY;
    },
    scrollToTop () {
      !this.scY ? window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' }) : window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
})
</script>
