<template>
  <div class="custom-dropdown">
    <img class="logo" :src="setImage" alt="">
    <b-dropdown id="dropdown-right" right>
    <b-dropdown-item v-for="(item, i) in options" :key="i">
      <div class="flex align-items-center custom-dropdown__list" @click="selectLanguage(item.id)">
        <div class="select">
          <i :class="['icon icon-tick', { 'visibility-hidden': !item.isSelect }]" />
        </div>
        <img class="logo" :src="item.src" alt="">
        <span class="language-name">{{ item.name }}</span>
      </div>
    </b-dropdown-item>
  </b-dropdown>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    options: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    setImage (): any {
      return (this.options as any).filter((i: any) => { return i.isSelect })[0].src
    }
  },
  methods: {
    selectLanguage (id: number) {
      this.options.map((i: any) => {
        if (id === i.id) {
          i.isSelect = true
        } else {
          i.isSelect = false
        }
      })
      const locale = this.options.filter((i: any) => i.isSelect)[0]
      if ((locale as any).id === 2) {
        this.$i18n.setLocale('en')
      } else {
        this.$i18n.setLocale('vi')
      }
    }
  }
})
</script>
