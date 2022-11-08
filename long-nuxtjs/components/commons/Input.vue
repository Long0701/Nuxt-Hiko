<template>
  <div class="custom-input">
    <input type="text" class="icon-arrow" :placeholder="placeholder">
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    placeholder: {
      type: String,
      default: null
    }
  }
})
</script>
