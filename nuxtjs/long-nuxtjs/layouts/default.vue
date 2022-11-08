<template>
  <div>
    <LayoutsHeader />
    <main class="page-main">
      <Nuxt />
    </main>
    <LayoutsFooter />
  </div>
</template>

<script>
import Vue from 'vue'

export default Vue.extend({
  beforeCreate () {
    this.$i18n.setLocale('en')
  }
})
</script>
