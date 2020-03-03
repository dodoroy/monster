<template>
  <div>
    <h1>Hairline Border</h1>
    <blockquote>
      Gives an element a border equal to 1 native device pixel in width, which can look very sharp and crisp.<br>
      Chrome does not support subpixel values on border. Safari does not support subpixel values on box-shadow. Firefox
      supports subpixel values on both.
      <ul>
        <li>
          <code class="language-text">box-shadow</code>, when only using spread, adds a pseudo-border which can use
          subpixels*.
        </li>
        <li>
          Use <code class="language-text">@media (min-resolution: ...)</code> to check the device pixel ratio (<code
            class="language-text"
          >1dppx</code>
          equals 96 DPI), setting the spread of the <code class="language-text">box-shadow</code> equal to
          <code class="language-text">1 / dppx</code>.
        </li>
      </ul>
    </blockquote>
    <div class="hairline-border">
      hairline border
    </div>
    <br>
    <div class="common-border">
      common border
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.hairline-border,
.common-border {
  box-shadow: 0 0 0 1px;
}

@media (min-resolution: 2dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.5px;
  }
}

@media (min-resolution: 3dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.33333333px;
  }
}

@media (min-resolution: 4dppx) {
  .hairline-border {
    box-shadow: 0 0 0 0.25px;
  }
}
</style>
