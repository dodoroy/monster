<template>
  <div>
    <h1>Dynamic Shadow</h1>
    <blockquote>Creates a shadow similar to box-shadow but based on the colors of the element itself.</blockquote>
    <div class="dynamic-shadow" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.dynamic-shadow {
  position: relative;
  width: 10rem;
  height: 10rem;
  background: linear-gradient(75deg, #6d78ff, #00ffb8);
  z-index: 1; // establishes a new stacking context.
}

.dynamic-shadow::after {
  content: '';
  width: 100%;
  height: 100%;
  position: absolute;
  background: inherit; //causes the pseudo-element to inherit the linear gradient specified on the element.
  top: 0.5rem;
  filter: blur(0.4rem);
  opacity: 0.7;
  z-index: -1; //positions the pseudo-element behind the parent but in front of the background.
}
</style>
