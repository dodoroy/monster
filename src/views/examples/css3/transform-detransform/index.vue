<template>
  <div>
    <h1>Transform - Detransform</h1>
    <blockquote>
      Sets a transform on the parent element and de-transforms the child elements, so they are not affected by the
      transform. This allows for some neat effects such as skewed buttons.
      <ul>
        <li>
          <code class="language-text">--transform: 10deg</code> sets a CSS variable we can later use to prevent
          duplicate code.
        </li>
        <li>
          <code class="language-text">calc(-1 * var(--transform))</code> on the child element negates the transform from
          the parent.
        </li>
        <li>
          Note: the <code class="language-text">display</code> property of the child element may not be
          <code class="language-text">inline</code>, otherwise the transform will be ignored.
        </li>
      </ul>
    </blockquote>

    <div class="parent">
      <div class="child">
        Child content
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
:root {
  --transform: 20deg;
}

.parent {
  display: inline-block;
  padding: 1rem;
  border: 1px solid;
  transform: skewX(var(--transform));
}

.child {
  /* 注意calc的使用*/
  transform: skewX(calc(-1 * var(--transform)));
}
</style>
