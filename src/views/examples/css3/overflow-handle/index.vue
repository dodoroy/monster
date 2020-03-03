<template>
  <div>
    <h1>Overflow Handle</h1>
    <blockquote>
      <ol>
        <li>If the text is longer than one line, it will be truncated and end with an ellipsis ….</li>
        <li>If the text is longer than one line, it will be truncated for n lines and end with an gradient fade.</li>
        <li>
          Adds a fading gradient to an overflowing element to better indicate there is more content to be scrolled.
        </li>
      </ol>
    </blockquote>
    <h2>truncate text single line</h2>
    <p class="truncate-text">
      If I exceed one line's width, I will be truncated.
    </p>
    <h2>truncate text multiline</h2>
    <p class="truncate-text-multiline">
      Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et.
    </p>
    <h2>overflow scroll gradient</h2>
    <div class="wrapper">
      <div class="overflow-scroll-gradient">
        <div class="overflow-scroll-gradient__scroller">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. <br>
          Iure id exercitationem nulla qui repellat laborum vitae, <br>
          molestias tempora velit natus. Quas, assumenda nisi. <br>
          Quisquam enim qui iure, consequatur velit sit? <br>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br>
          Iure id exercitationem nulla qui repellat laborum vitae, <br>
          molestias tempora velit natus. Quas, assumenda nisi. <br>
          Quisquam enim qui iure, consequatur velit sit?
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.truncate-text {
  width: 200px;
  overflow: hidden;
  /* prevents the text from exceeding one line in height. */
  white-space: nowrap;
  text-overflow: ellipsis;
}

.truncate-text-multiline {
  position: relative;
  font-size: 1.6rem;
  width: 400px;
  height: 120px;
  line-height: 40px;
  overflow: hidden;
  background: #f5f6fa;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: 0;
    width: 150px;
    height: 40px;
    background: linear-gradient(to right, rgba(0, 0, 0, 0), #f5f6f9 50%);
  }
}

.wrapper {
  background: #f5f6fa;
  padding: 40px;
}
.overflow-scroll-gradient {
  position: relative;

  &::after {
    content: '';
    position: absolute;
    /* width 需要设置跟内容区宽度一致 */
    width: 300px;
    height: 30px;
    bottom: 0;
    /* transparent keyword is broken in Safari */
    background: linear-gradient(rgba(255, 255, 255, 0.001), #fff);
    /* specifies that the pseudo-element cannot be a target of mouse events, allowing text behind it to still be selectable/interactive.*/
    pointer-events: none;
  }

  .overflow-scroll-gradient__scroller {
    width: 300px;
    height: 200px;
    padding: 15px;

    overflow-y: scroll;
    background: #fff;
  }
}
</style>
