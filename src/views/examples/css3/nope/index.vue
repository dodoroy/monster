<template>
  <div class="wrapper">
    <div id="nope">
      <p>Do websites need to be experienced exactly the same in every browser?</p>
      <h1><span>Nope.</span></h1>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.wrapper {
  padding: 10em 0;
  height: 400px;
  background: #222;
  background-position: 50% -500%;
  overflow: hidden;
  transition: background-position .4s ease-out;
  &:hover {
    background-image: url(./space.png);
    background-position: 50% 0;
    background-repeat: no-repeat;
  }

  #nope {
    text-align: center;
    :hover:after {
      display: block;
      margin: 5em auto 0 auto;
      content: url(kc.png);
    }
    p {
      color: #eee;
    }
    h1 {
      margin: 0;
      padding: 0;
      font-size: 1200%;
      line-height: 1em;
      font-weight: bold;
      text-align: center;
      color: #fff;
      transition: transform .3s linear;
      &:hover {
        cursor: pointer;
        text-shadow: 3px 3px 10px rgba(0,0,0,.5);
        transform: scale(1.25);
      }
    }
    span {
      padding: .1em .3em;
      line-height: 1em;
      border-radius: .1em;
      transition: background-color .4s linear;

      &:hover {
        box-shadow: 3px 3px 10px rgba(0,0,0,.5);
        background: rgba(141,211,234,.35) url(grad.png) repeat-x top left;
      }
    }
  }
}

</style>
