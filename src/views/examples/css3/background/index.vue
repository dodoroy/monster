<template>
  <div>
    <div class="wrapper">
      <p>This box combines two background images, which are positioned in its top-left and bottom-right corners.</p>
<p>You can see the difference when you resize the page.</p>

    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
  .wrapper {
    min-width: 300px;
    padding: 2em;
    color: rgb(255,104,0);
    font-weight: bold;
    border: 1px solid #000;
    background-image: url(./top-left.png), url(./bottom-right.png);
    background-position: top left, bottom right;
    background-repeat: no-repeat, no-repeat;
  }
</style>
