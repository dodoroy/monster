<template>
  <div
    class="progress-bar"
    :style="`{width: ${progress}}%;}`"
  />
</template>

<script>
export default {
  props: {
    progress: {
      type: Number,
      default: 0
    }
  }
}
</script>

<style lang="scss">
.progress-bar {
  width: 100;
  height: 3px;
  background: #f66;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
