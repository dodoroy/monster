<template>
  <div class="progress-bar" :style="`{width: ${progress}}%;}`"></div>
</template>

<script>
export default {
  name: 'progress-bar',
  props: {
    progress: String
  }
};
</script>

<style lang="scss">
.progress-bar {
  width: 100;
  height: 3px;
  background: orange;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
