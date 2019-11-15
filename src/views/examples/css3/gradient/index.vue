<template>
  <div class="wrapper">
<div class="g1"></div>
<div class="g2"></div>
<div class="g3"></div>
<div class="g4"></div>
<div class="g5"></div>
<div class="g6"></div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-wrap: wrap;
  div {
    width: calc(33% - 20px);
    height: 80px;
    border-radius: 12px;
    margin: 10px;
  }
  .g1 {
    background: linear-gradient(65deg,#fff5c3,#9452a5);
  }
  .g2 {
    background: linear-gradient(65deg,#f05f57,#360940);
  }
  .g3 {
    background: linear-gradient(65deg,#fff886,#f072b6);
  }
  .g4 {
    background: linear-gradient(65deg,#81ffef,#f067b4);
  }
  .g5 {
    background: linear-gradient(65deg,#fd6585,#0d25b9);
  }
  .g6 {
    background: linear-gradient(65deg,#ffcf71,#2376dd);
  }
}
</style>
