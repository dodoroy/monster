<template>
  <div>
    <h1>Shape Separator</h1>
    <blockquote>
      Uses an SVG shape to separate two different blocks to create more a interesting visual appearance compared to
      standard horizontal separation.
      <br>
      background-image: url(...) adds the SVG shape (a 24x12 triangle) as the background image of the pseudo element,
      which repeats by default. It must be the same color as the block that is being separated. For other shapes, we can
      use the URL-encoder for SVG.
      <br>https://css.30secondsofcode.org/snippet/shape-separator
    </blockquote>
    <div class="shape-separator" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.shape-separator {
  position: relative;
  height: 48px;
  background: #333;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 12px;
    bottom: 0;
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 12'%3E%3Cpath d='m12 0l12 12h-24z' fill='%23fff'/%3E%3C/svg%3E");
  }
}
</style>
