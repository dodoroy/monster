<template>
  <div>
    <div class="demo">
      <h2>line</h2>
      <canvas
        id="croppedPicture"
        width="500"
        height="300"
      />
      <canvas
        id="text"
        width="500"
        height="300"
      />
      <canvas
        id="shadow"
        width="500"
        height="340"
      />
      <canvas
        id="pattern"
        width="500"
        height="300"
      />
      <canvas
        id="gradient"
        width="500"
        height="300"
      />
      <img
        id="star"
        src="./star.png"
      >
      <img
        id="brickTile"
        src="./brick_tile.gif"
      >
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.croppedPicture()
    this.text()
    this.shadow()
    this.pattern()
    this.gradient()
  },
  methods: {
    croppedPicture () {
      const canvas = document.getElementById('croppedPicture')
      const context = canvas.getContext('2d')

      const img = new Image()
      // webpack 打包，不能直接写路径
      img.src = require('./1234.jpg')
      img.onload = () => {
        context.drawImage(img, 50, 50, 100, 100)
      }
    },
    text () {
      const canvas = document.getElementById('text')
      const context = canvas.getContext('2d')

      context.font = 'bold 20px Arial'
      context.textBaseline = 'top'// 把文本内容左上角放在10，10坐标处
      context.fillStyle = 'black'
      context.fillText('I\'m stuck in a canvas. Someone let me out!', 10, 10)

      context.font = 'bold 40px Verdana, sans-serif'
      context.lineWidth = '1'
      context.strokeStyle = 'red'
      context.strokeText('I\'m an OUTLINE', 20, 50)
    },
    shadow () {
      const canvas = document.getElementById('shadow')
      const context = canvas.getContext('2d')

      // Draw the shadowed rectangle.
      context.rect(20, 20, 200, 100)
      context.fillStyle = '#8ED6FF'
      context.shadowColor = '#bbb'
      context.shadowBlur = 20
      context.shadowOffsetX = 15
      context.shadowOffsetY = 15
      context.fill()

      // Draw the shadowed star.
      context.shadowBlur = 4
      context.shadowOffsetX = 10
      context.shadowOffsetY = 10

      const img = document.getElementById('star')
      context.drawImage(img, 250, 30)

      context.textBaseline = 'top'
      context.font = 'bold 20px Arial'

      // Draw three pieces of shadowed text.
      context.shadowBlur = 3
      context.shadowOffsetX = 2
      context.shadowOffsetY = 2
      context.fillStyle = 'steelblue'
      context.fillText('This is a subtle, slighly old-fashioned shadow.', 10, 175)

      context.shadowBlur = 5
      context.shadowOffsetX = 20
      context.shadowOffsetY = 20
      context.fillStyle = 'green'
      context.fillText('This is a distant shadow...', 10, 225)

      context.shadowBlur = 15
      context.shadowOffsetX = 0
      context.shadowOffsetY = 0
      context.shadowColor = 'black'
      context.fillStyle = 'white'
      context.fillText("This shadow isn't offset. It creates a halo effect.", 10, 300)
    },
    pattern () {
      const canvas = document.getElementById('pattern')
      const context = canvas.getContext('2d')

      const img = document.getElementById('brickTile')
      const pattern = context.createPattern(img, 'repeat')

      context.fillStyle = pattern

      context.rect(0, 0, canvas.width, canvas.height)
      context.fill()
    },
    gradient () {
      const canvas = document.getElementById('gradient')
      const context = canvas.getContext('2d')

      let gradient = context.createLinearGradient(10, 0, 100, 0)
      gradient.addColorStop(0, 'magenta')
      gradient.addColorStop(1, 'yellow')

      this.drawHeart(context, 60, 50)
      context.fillStyle = gradient
      context.fill()
      context.stroke()

      gradient = context.createRadialGradient(180, 100, 10, 180, 100, 50)
      gradient.addColorStop(0, 'magenta')
      gradient.addColorStop(1, 'yellow')

      this.drawHeart(context, 180, 80)
      context.fillStyle = gradient
      context.fill()
      context.stroke()

      gradient = context.createLinearGradient(10, 0, 100, 0)
      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('.25', 'blue')
      gradient.addColorStop('.50', 'green')
      gradient.addColorStop('.75', 'yellow')
      gradient.addColorStop('1.0', 'red')

      this.drawHeart(context, 60, 200)
      context.fillStyle = gradient
      context.fill()
      context.stroke()

      gradient = context.createRadialGradient(180, 250, 10, 180, 250, 50)
      gradient.addColorStop('0', 'magenta')
      gradient.addColorStop('.25', 'blue')
      gradient.addColorStop('.50', 'green')
      gradient.addColorStop('.75', 'yellow')
      gradient.addColorStop('1.0', 'red')

      this.drawHeart(context, 180, 210)
      context.fillStyle = gradient
      context.fill()
      context.stroke()
    },

    drawHeart (context, x, y) {
      context.beginPath()
      context.moveTo(x, y)
      context.bezierCurveTo(x, y - 40, x - 45, y - 40, x - 48, y)
      context.bezierCurveTo(x - 45, y + 30, x, y + 40, x, y + 80)
      context.bezierCurveTo(x, y + 90, x + 45, y + 40, x + 45, y)
      context.bezierCurveTo(x + 45, y - 30, x, y - 30, x, y)
      context.closePath()
    }
  }

}
</script>
<style scoped>
canvas {
  border: 1px dotted red;
}
img {
  display: none;
}

</style>
