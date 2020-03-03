<template>
  <div>
    <h1>Editable SVG Icon System</h1>
    <blockquote>
      There are many ways to create an SVG Icon System, but one method that takes advantage of Vue’s capabilities is to
      create editable inline icons as components. Some of the advantages of this way of working is:
      <ul>
        <li>They are easy to edit on the fly</li>
        <li>They are animatable</li>
        <li>You can use standard props and defaults to keep them to a typical size or alter them if you need to</li>
        <li>They are inline, so no HTTP requests are necessary</li>
        <li>They can be made accessible dynamically</li>
      </ul>
    </blockquote>
    <img
      src="@/assets/svg-icon.png"
      alt=""
    >
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
img {
  width: 100%;
}
</style>
