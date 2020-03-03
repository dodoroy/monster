<template>
  <div>
    <h1>different methods for centering a div</h1>
    <div class="demo">
      <div class="container flex">
        <div>Flexbox centering</div>
      </div>
      <div class="container grid">
        <div>Grid centering</div>
      </div>

      <div class="container table">
        <div>Display table centering</div>
      </div>

      <div class="container position">
        <div>Transform centering (position: absolute;)</div>
      </div>

      <div class="container ghosting">
        <div>
          Vertically centered without changing the position property.<br>
          不能给width设置具体值。 https://css.30secondsofcode.org/snippet/ghost-trick
          <pre>width: auto;</pre>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.demo {
  display: flex;
  flex-wrap: wrap;
}

.container {
  width: 400px;
  height: 400px;
  border: 1px solid #f66;
}

.content {
  background: silver;
}

.flex {
  display: flex;
  justify-content: center;
  align-items: center;
}

.grid {
  display: grid;
  justify-content: center;
  align-items: center;
}

.table {
  display: table;
}

.table > div {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
}

.position {
  position: relative;
}

.position > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.ghosting {
  width: auto;
}

.ghosting::before {
  content: '';
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}

.ghosting > div {
  display: inline-block;
  vertical-align: middle;
}
</style>
