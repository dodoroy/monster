<template>
  <div>
    <h1>Hover Underline Animation</h1>
    <blockquote>
      Creates an animated underline effect when the text is hovered over.<br>
      transform-origin: bottom right means the transform anchor point is positioned at the bottom right of the block.
      :hover::after then uses scaleX(1) to transition the width to 100%, then changes the transform-origin to bottom
      left so that the anchor point is reversed, allowing it transition out in the other direction when hovered off.<br>
      hover和非hover状态下设置不同的transform-origin
    </blockquote>
    <pre>
      .hover-underline-animation::after {
        transform: scaleX(0);
        transform-origin: right;
      }

      .hover-underline-animation:hover::after {
        transform: scaleX(1);
        transform-origin: left;
      }
  </pre>
    <p class="hover-underline-animation">
      Hover this text to see the effect!
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.hover-underline-animation {
  position: relative;
  display: inline-block;
  /* width: 300px; */
  padding: 1rem;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background: coral;
    bottom: 0;
    left: 0;
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
}
</style>
