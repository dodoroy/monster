<template>
  <div>
    <div class="tools">
      <div class="toolbar">
        <h2>Pen Color</h2>
        <span
          v-for="item in colors"
          :key="item.name"
          :class="curColor===item.name?'cur':''"
          @click="changeColor(item)"
        >
          <img
            :src="item.image"
            :alt="item.name+' pen'"
          >
        </span>
      </div>
      <div class="toolbar">
        <h2>Pen Thickness</h2>
        <span
          v-for="item in thicknesses"
          :key="item.name"
          :class="curThickness===item.name?'cur':''"
          @click="changeThickness(item)"
        >
          <span :class="item.name" />
        </span>
      </div>
    </div>

    <canvas
      id="drawingCanvas"
      width="500"
      height="300"
      @mousedown="startDrawing($event)"
      @mouseup="stopDrawing($event)"
      @mouseout="stopDrawing($event)"
      @mousemove="draw($event)"
    />

    <div>
      <button @click="saveCanvas">
        Save the Canvas
      </button>
      <button @click="clearCanvas">
        Clear the Canvas
      </button>
    </div>

    <div :class="['imageContainer',isShowImage?'show':'']">
      <img
        id="saveImageCopy"
        src=""
        alt=""
      >
      <div>Right-click to save ...</div>
    </div>
  </div>
</template>
<script>

export default {
  data () {
    return {
      canvas: null,
      context: null,
      canvasOffsetLeft: 0,
      canvasOffsetTop: 0,
      colors: [{
        name: 'red',
        value: 'rgb(212,21,29)',
        image: require('./pen_red.gif')
      }, {
        name: 'green',
        value: 'rgb(131,190,61)',
        image: require('./pen_green.gif')
      }, {
        name: 'blue',
        value: 'rgb(0,86,166)',
        image: require('./pen_blue.gif')
      }],
      thicknesses: [{
        name: 'light',
        value: 1

      }, {
        name: 'normal',
        value: 5
      }, {
        name: 'bold',
        value: 10
      }],
      curColor: '',
      curThickness: '',
      isDrawing: false,
      isShowImage: false
    }
  },
  mounted () {
    this.canvas = document.getElementById('drawingCanvas')
    this.context = this.canvas.getContext('2d')
    this.canvasOffsetLeft = this.canvas.offsetLeft
    this.canvasOffsetTop = this.canvas.offsetTop
  },
  methods: {
    changeColor (item) {
      this.curColor = item.name
      this.context.strokeStyle = item.value
    },
    changeThickness (item) {
      this.curThickness = item.name
      this.context.lineWidth = item.value
    },
    startDrawing (e) {
      this.isDrawing = true
      this.context.beginPath()
      this.context.moveTo(e.pageX - this.canvasOffsetLeft, e.pageY - this.canvasOffsetTop)
    },
    stopDrawing (e) {
      this.isDrawing = false
    },
    draw (e) {
      if (this.isDrawing) {
        const x = e.pageX - this.canvasOffsetLeft
        const y = e.pageY - this.canvasOffsetTop

        this.context.lineTo(x, y)
        this.context.stroke()
      }
    },
    clearCanvas () {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    saveCanvas () {
      const url = this.canvas.toDataURL()
      const imageCopy = document.getElementById('saveImageCopy')
      imageCopy.src = url
      this.isShowImage = true
    }
  }
}
</script>
<style lang="scss" scoped>
.tools {
  display: flex;
  .toolbar  {
    margin-right: 20px;
    text-align: center;
    span {
      display: inline-block;
      width: 50px;
      height: 50px;
      vertical-align: bottom;
      margin-right: 10px;
      border: 2px groove transparent;
      cursor: pointer;
      &.cur {
        border-color: #E4F0FE;
      }
    }
    .light, .normal,.bold {
      display: inline-block;
      border-radius: 50%;
      background: grey;
      margin: 0 auto;
    }
    .light {
      width: 20px;
      height: 20px;
    }
    .normal {
      width: 30px;
      height: 30px;
    }
    .bold {
      width: 40px;
      height: 40px;
    }
  }
}

canvas {
  border: 1px dotted red;
}
.imageContainer {
  display: none;
  &.show {
    display: block;
  }
}
</style>
