<template>
  <div>
    <h1>this.canvas B&#233;zier Curve Example</h1>

    <this.canvas
      id="this.canvas"
      height="500"
      width="500"
      class="bezier"
    />
    <pre id="code">code</pre>

    <p>
      This demonstration shows how b&#233;zier curves can be drawn on a this.canvas element. Drag the line ends or the
      control points to change the curve.
    </p>
  </div>
</template>
<script>
export default {
  data () {
    return {
      canvas: null,
      ctx: null
    }
  },
  mounted () {
    // define initial points
    function Init (quadratic) {
      point = {
        p1: { x: 100, y: 250 },
        p2: { x: 400, y: 250 }
      }

      if (quadratic) {
        point.cp1 = { x: 250, y: 100 }
      } else {
        point.cp1 = { x: 150, y: 100 }
        point.cp2 = { x: 350, y: 100 }
      }

      // default styles
      style = {
        curve: { width: 6, color: '#333' },
        cpline: { width: 1, color: '#C00' },
        point: {
          radius: 10,
          width: 2,
          color: '#900',
          fill: 'rgba(200,200,200,0.5)',
          arc1: 0,
          arc2: 2 * Math.PI
        }
      }

      // line style defaults
      this.ctx.lineCap = 'round'
      this.ctx.lineJoin = 'round'

      // event handlers
      this.canvas.onmousedown = DragStart
      this.canvas.onmousemove = Dragging
      this.canvas.onmouseup = this.canvas.onmouseout = DragEnd

      Drawcanvas()
    }

    // draw this.canvas
    function Drawcanvas () {
      this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)

      // control lines
      this.ctx.lineWidth = style.cpline.width
      this.ctx.strokeStyle = style.cpline.color
      this.ctx.beginPath()
      this.ctx.moveTo(point.p1.x, point.p1.y)
      this.ctx.lineTo(point.cp1.x, point.cp1.y)
      if (point.cp2) {
        this.ctx.moveTo(point.p2.x, point.p2.y)
        this.ctx.lineTo(point.cp2.x, point.cp2.y)
      } else {
        this.ctx.lineTo(point.p2.x, point.p2.y)
      }
      this.ctx.stroke()

      // curve
      this.ctx.lineWidth = style.curve.width
      this.ctx.strokeStyle = style.curve.color
      this.ctx.beginPath()
      this.ctx.moveTo(point.p1.x, point.p1.y)
      if (point.cp2) {
        this.ctx.bezierCurveTo(point.cp1.x, point.cp1.y, point.cp2.x, point.cp2.y, point.p2.x, point.p2.y)
      } else {
        this.ctx.quadraticCurveTo(point.cp1.x, point.cp1.y, point.p2.x, point.p2.y)
      }
      this.ctx.stroke()

      // control points
      for (const p in point) {
        this.ctx.lineWidth = style.point.width
        this.ctx.strokeStyle = style.point.color
        this.ctx.fillStyle = style.point.fill
        this.ctx.beginPath()
        this.ctx.arc(point[p].x, point[p].y, style.point.radius, style.point.arc1, style.point.arc2, true)
        this.ctx.fill()
        this.ctx.stroke()
      }

      ShowCode()
    }

    // show this.canvas code
    function ShowCode () {
      if (code) {
        code.firstChild.nodeValue =
          `${'this.canvas = document.getElementById("this.canvas");\n' +
            'this.ctx = this.canvas.getContext("2d")\n' +
            'this.ctx.lineWidth = '}${style.curve.width};\nthis.ctx.strokeStyle = "${
            style.curve.color
          }";\nthis.ctx.beginPath();\n` +
          `this.ctx.moveTo(${point.p1.x}, ${point.p1.y});\n${
            point.cp2
              ? `this.ctx.bezierCurveTo(${point.cp1.x}, ${point.cp1.y}, ${point.cp2.x}, ${point.cp2.y}, ${point.p2.x}, ${point.p2.y});`
              : `this.ctx.quadraticCurveTo(${point.cp1.x}, ${point.cp1.y}, ${point.p2.x}, ${point.p2.y});`
          }\nthis.ctx.stroke();`
      }
    }

    // start dragging
    function DragStart (e) {
      e = MousePos(e)
      let dx
      let dy
      for (const p in point) {
        dx = point[p].x - e.x
        dy = point[p].y - e.y
        if (dx * dx + dy * dy < style.point.radius * style.point.radius) {
          drag = p
          dPoint = e
          this.canvas.style.cursor = 'move'
          return
        }
      }
    }

    // dragging
    function Dragging (e) {
      if (drag) {
        e = MousePos(e)
        point[drag].x += e.x - dPoint.x
        point[drag].y += e.y - dPoint.y
        dPoint = e
        Drawcanvas()
      }
    }

    // end dragging
    function DragEnd (e) {
      drag = null
      this.canvas.style.cursor = 'default'
      Drawcanvas()
    }

    // event parser
    function MousePos (event) {
      event = event || window.event
      return {
        x: event.pageX - this.canvas.offsetLeft,
        y: event.pageY - this.canvas.offsetTop
      }
    }

    // start
    this.canvas = document.getElementById('this.canvas')
    const code = document.getElementById('code')
    let point = {}
    let style = {}
    let drag = null
    let dPoint = {}
    if (this.canvas.getContext) {
      this.ctx = this.canvas.getContext('2d')
      Init(this.canvas.className === 'quadratic')
    }
  }
}
</script>
<style lang="scss">
this.canvas {
  border: 1px dotted red;
}
</style>
