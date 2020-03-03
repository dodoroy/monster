<template>
  <div>
    <div class="round rounded1">
      <b>Round the top-right corner:</b><br>
      border-top-right-radius: 50px;
    </div>

    <div class="round rounded2">
      <b>Stretch it out one way...椭圆</b><br>
      border-top-right-radius: 150px 50px;
    </div>

    <div class="round rounded3">
      <b>Or go crazy with every corner to make a deformed box:</b><br>
      border-top-left-radius: 150px 30px;
      border-top-right-radius: 100px 50px;
      border-bottom-left-radius: 40px 90px;
      border-bottom-right-radius: 20px 75px;
    </div>
  </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.round {
  box-sizing: border-box;
  height: 100px;
  margin: 20px;
  padding: 20px;
  background: khaki;
  border: 2px solid black;

}
.rounded1 {
  border-top-right-radius: 50px;
}

.rounded2 {
  border-top-right-radius: 150px 50px;
}

.rounded3 {
  border-top-left-radius: 150px 30px;
  border-top-right-radius: 100px 50px;
  border-bottom-left-radius: 40px 90px;
  border-bottom-right-radius: 20px 75px;
}

</style>
