<template>
  <div>
    <h1>Gradient Text</h1>

    <blockquote>
      Gives text a gradient color.
      <ul>
        <li>
          <code class="language-text">background: -webkit-linear-gradient(...)</code> gives the text element a gradient
          background.
        </li>
        <li>
          <code class="language-text">webkit-text-fill-color: transparent</code> fills the text with a transparent
          color.
        </li>
        <li>
          <code class="language-text">webkit-background-clip: text</code> clips the background with the text, filling
          the text with the gradient background as the color.
        </li>
      </ul>
    </blockquote>
    <pre>
    .gradient-text {
      background: -webkit-linear-gradient(pink, red);
      -webkit-text-fill-color: transparent;
      -webkit-background-clip: text;
    }
    </pre>
    <span class="gradient-text">I am Gradient text</span>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.gradient-text {
  padding: 2rem;
  background: linear-gradient(left, green, red);
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
</style>
