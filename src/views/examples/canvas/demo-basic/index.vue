<template>
  <div>
    <div class="demo">
      <h2>line</h2>
      <canvas
        id="demo1"
        width="500"
        height="300"
      />
    </div>

    <canvas
      id="demo2"
      width="500"
      height="300"
    />
    <canvas
      id="rect"
      width="500"
      height="300"
    />
    <canvas
      id="demo3"
      width="500"
      height="300"
    />

    <canvas
      id="demo4"
      width="500"
      height="300"
    />
    <canvas
      id="translate"
      width="500"
      height="300"
    />
    <canvas
      id="transform"
      width="500"
      height="300"
    />
    <canvas
      id="composite"
      width="500"
      height="300"
    />
    <canvas
      id="demo6"
      width="500"
      height="300"
    />
    <canvas
      id="demo7"
      width="500"
      height="300"
    />
    <canvas
      id="demo8"
      width="500"
      height="300"
    />
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  mounted () {
    this.drawLine()
    this.drawTriangle()
    this.drawRect()
    this.drawArc()
    this.drawCurve()
    this.translate()
    this.transform()
    this.composite()
  },
  methods: {
    drawLine () {
      const canvas = document.getElementById('demo1')
      const context = canvas.getContext('2d')

      // 设置线条宽度和颜色
      context.lineWidth = 20
      context.strokeStyle = 'blue'

      // 绘制第一条直线，使用默认方头
      context.moveTo(20, 50)
      context.lineTo(400, 10)
      context.lineCap = 'butt'
      context.stroke()

      // 绘制第一条直线，使用圆头
      context.beginPath()// 每次调用beginPath方法，都重新开始一个新线段的绘制。如果没有这一步，每次调用stroke。都会把画布上原有的线段再重新绘制一遍（在修改了其他上下文属性的情况下，这个问题比较明显）
      context.moveTo(20, 100)
      context.lineTo(400, 50)
      context.lineCap = 'round'
      context.stroke()

      // 绘制第一条直线，使用加长方头
      context.beginPath()
      context.moveTo(20, 150)
      context.lineTo(400, 90)
      context.lineCap = 'square'
      context.stroke()
    },
    drawTriangle () {
      const canvas = document.getElementById('demo2')
      const context = canvas.getContext('2d')

      context.lineWidth = 2
      context.moveTo(250, 20)
      context.lineTo(400, 280)
      context.lineTo(100, 280)
      context.closePath()// 路径闭合

      // 绘制轮廓
      context.lineWidth = 10
      context.strokeStyle = 'rgba(205,40,40)'
      context.lineJoin = 'bevel'// 'round, mitre';
      context.stroke()

      // 填充内部
      context.fillStyle = 'yellow'
      context.fill()
    },
    drawRect () {
      const canvas = document.getElementById('rect')
      const context = canvas.getContext('2d')

      context.lineWidth = 10
      context.strokeStyle = 'red'
      context.strokeRect(50, 50, 200, 200)

      context.fillStyle = 'yellow'
      context.fillRect(50, 50, 200, 200)
    },
    drawArc () {
      // arc  绘制圆弧, 顺时针
      const canvas = document.getElementById('demo3')
      const context = canvas.getContext('2d')

      const centerX = 250
      const centerY = 150
      const radius = 100
      const startingAngle = 7 / 6 * Math.PI
      const endingAngle = 11 / 6 * Math.PI

      context.arc(centerX, centerY, radius, startingAngle, endingAngle)
      context.closePath()
      context.lineWidth = 20
      context.strokeStyle = 'red'
      context.stroke()
      context.fillStyle = 'yellow'
      context.fill()

      const centerX2 = 250
      const centerY2 = 150
      const radius2 = 100
      const startingAngle2 = 0
      const endingAngle2 = 2 * Math.PI

      context.beginPath()
      context.arc(centerX2, centerY2, radius2, startingAngle2, endingAngle2)
      context.lineWidth = 10
      context.strokeStyle = 'blue'
      context.stroke()
    },
    drawCurve () {
      // arcTo bezierCurveTo quadraticCurveTo
      const canvas = document.getElementById('demo4')
      const context = canvas.getContext('2d')

      context.moveTo(20, 150)
      const control1X = 100
      const control1Y = 50
      const control2X = 460
      const control2Y = 280
      const endPointX = 420
      const endPointY = 100
      context.bezierCurveTo(control1X, control1Y, control2X, control2Y, endPointX, endPointY)
      context.stroke()
    },
    translate () {
      const canvas = document.getElementById('translate')
      const context = canvas.getContext('2d')

      context.rect(0, 0, 40, 40)
      context.rect(50, 50, 40, 40)
      context.rect(100, 100, 40, 40)
      context.stroke()

      context.beginPath() // 注意加上beginpath
      context.rect(0, 0, 30, 30)
      context.translate(50, 50)
      context.rect(0, 0, 30, 30)
      context.translate(50, 50)
      context.rect(0, 0, 30, 30)
      context.strokeStyle = 'red'
      context.stroke()
    },
    transform () {
      const canvas = document.getElementById('transform')
      const context = canvas.getContext('2d')

      // 移动（0，0）点，因为接下来要围绕新原点旋转
      context.translate(250, 150)
      const copies = 5
      context.strokeStyle = 'red'
      for (let i = 0; i < copies; i++) {
        // 绘制正方形之前，先旋转坐标系
        context.rotate(2 * Math.PI / (copies))
        context.rect(0, 0, 60, 60)
      }
      context.strokeStyle = 'red'
      context.stroke()
    },
    composite () {
      const canvas = document.getElementById('composite')
      const context = canvas.getContext('2d')

      context.translate(20, 20)

      // context.globalAlpha = 0.7;
      // context.globalCompositeOperation = 'xor';
      context.fillStyle = 'rgb(100,150,185)'
      context.lineWidth = 10
      context.strokeStyle = 'red'

      context.arc(100, 120, 100, 0, 2 * Math.PI)
      context.fill()
      context.stroke()

      context.beginPath()
      context.moveTo(215, 50)
      context.lineTo(15, 250)
      context.lineTo(315, 250)
      context.closePath()
      context.fillStyle = 'rgb(100,150,105,.6)' // alpha被忽略
      context.fill()
      context.stroke()
    }
  }
}
</script>
<style scoped>
canvas {
  border: 1px dotted red;
}
</style>
