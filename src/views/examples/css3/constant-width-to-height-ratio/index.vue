<template>
  <div>
    <h1>constant-width-to-height-ratio</h1>
    <blockquote>
      Given an element of variable width, it will ensure its height remains proportionate in a responsive fashion (i.e.,
      its width to height ratio remains constant).
      <ul>
        <li>
          <code class="language-text">padding-top</code> on the
          <code class="language-text">::before</code> pseudo-element causes the height of the element to equal a
          percentage of its width. <code class="language-text">100%</code> therefore means the element's height will
          always be <code class="language-text">100%</code> of the width, creating a responsive square.
        </li>
        <li>This method also allows content to be placed inside the element normally.</li>
      </ul>
    </blockquote>
    <pre>
.constant-width-to-height-ratio {
  background: rgb(255, 102, 102);
  width: 30%;
  &::before {
    content: '';
    padding-top: 40%;
    float: left;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
    </pre>
    <div class="constant-width-to-height-ratio" />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.constant-width-to-height-ratio {
  background: #f66;
  width: 30%;
  &::before {
    content: '';
    padding-top: 40%;
    float: left;
  }
  &::after {
    content: '';
    display: block;
    clear: both;
  }
}
</style>
