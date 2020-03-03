<template>
  <div>
    <h1>Drop Cap</h1>
    <blockquote>
      Makes the first letter in the first paragraph bigger than the rest of the text - often used to signify the
      beginning of a new section.<br>
      Use the ::first-letter pseudo-element to style the first element of the paragraph, use the :first-child selector
      to select only the first paragraph.
    </blockquote>
    <div class="demo">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam commodo ligula quis tincidunt cursus. Integer
        consectetur tempor ex eget hendrerit. Cras facilisis sodales odio nec maximus. Pellentesque lacinia convallis
        libero, rhoncus tincidunt ante dictum at. Nullam facilisis lectus tellus, sit amet congue erat sodales commodo.
      </p>
      <p>
        Donec magna erat, imperdiet non odio sed, sodales tempus magna. Integer vitae orci lectus. Nullam consectetur
        orci at pellentesque efficitur.
      </p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.demo {
  width: 400px;
}

p:first-child::first-letter {
  font-variant: small-caps;
  font-size: 3rem;
  font-weight: bold;
  /* line-height 不设置的话会 很高 ？*/
  line-height: 1;
  color: salmon;
  /* 注意这里 float 的作用 */
  float: left;
  margin: 0 8px -4px 0;
}
</style>
