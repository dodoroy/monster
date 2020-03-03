<template>
  <div>
    <h1>fullscreen</h1>
    <blockquote>
      The :fullscreen CSS pseudo-class represents an element that's displayed when the browser is in fullscreen mode.<br>
      It is used to select and style an element that is being displayed in fullscreen mode.
    </blockquote>
    <div class="fullscreen">
      <p>
        I change color in fullscreen mode!
      </p>
    </div>
    <button>Go Full Screen!</button>
  </div>
</template>

<script>
export default {
  mounted () {
    const btn = document.querySelector('button')
    btn.onclick = goFullScreen

    function goFullScreen () {
      const ele = document.querySelector('.fullscreen')
      if (!document.fullscreenElement) {
        ele.requestFullscreen()
      }
    }
  }
}
</script>

<style lang="scss">
.fullscreen {
  width: 800px;
  height: 400px;
  background: skyblue;
}

.fullscreen p {
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
  color: #fff;
}

.fullscreen:fullscreen {
  background: lightpink;
  /* width: 100vw;height: 100vh; */
}
</style>
