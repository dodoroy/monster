<template>
  <div>
  <canvas id="circls" width="400" height="300"
    @mousedown="handleCanvasClick($event)"
    @mouseup="stopDragging"
    @mouseout="stopDragging"
    @mousemove="dragCircle($event)"
  ></canvas>
  <div>
    <button @click="addRandomCircle">Add Circle</button>
    <button @click="clearCanvas">Clear Canvas</button>
  </div>
  </div>
</template>
<script>
// This function stores the details for a single circle.
class Circle {
  constructor(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.isSelected = false;
  }
}
function randomFromTo(from, to) {
  return Math.floor(Math.random() * (to - from + 1) + from);
}
export default {
  data() {
    return {
      canvas: null,
      context: null,
      circles: [],
      previousSelectedCircle: null,
      colors: ['green', 'blue', 'red', 'yellow', 'magenta', 'orange', 'brown', 'purple', 'pink'],
      isDragging: false,
    };
  },
  mounted() {
    this.canvas = document.getElementById('circls');
    this.context = this.canvas.getContext('2d');
  },
  methods: {
    addRandomCircle() {
      // Give the circle a random size and position.
      const radius = randomFromTo(10, 60);
      const x = randomFromTo(0, this.canvas.width);
      const y = randomFromTo(0, this.canvas.height);

      // Give the circle a random color.

      const color = this.colors[randomFromTo(0, 8)];

      // Create the new circle.
      const circle = new Circle(x, y, radius, color);

      // Store it in the array.
      this.circles.push(circle);

      // Redraw the canvas.
      this.drawCircles();
    },
    drawCircles() {
      // Clear the canvas.
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Go through all the circles.
      for (let i = 0; i < this.circles.length; i++) {
        const circle = this.circles[i];

        // Draw the circle.
        this.context.globalAlpha = 0.85;
        this.context.beginPath();
        this.context.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        this.context.fillStyle = circle.color;
        this.context.strokeStyle = 'black';

        if (circle.isSelected) {
          this.context.lineWidth = 5;
        } else {
          this.context.lineWidth = 1;
        }
        this.context.fill();
        this.context.stroke();
      }
    },

    clearCanvas() {
      // Remove all the circles.
      this.circles = [];

      // Update the display.
      this.drawCircles();
    },
    handleCanvasClick(e) {
      // Get the canvas click coordinates.
      const clickX = e.pageX - this.canvas.offsetLeft;
      const clickY = e.pageY - this.canvas.offsetTop;

      // Look for the clicked circle. (reverse loop)
      for (let i = this.circles.length - 1; i >= 0; i--) {
        const circle = this.circles[i];

        const distanceFromCenter = Math.sqrt(Math.pow(circle.x - clickX, 2) + Math.pow(circle.y - clickY, 2));
        if (distanceFromCenter <= circle.radius) {
          if (this.previousSelectedCircle) this.previousSelectedCircle.isSelected = false;
          this.previousSelectedCircle = circle;

          circle.isSelected = true;

          this.isDragging = true;

          this.drawCircles();
          return;
        }
      }
    },
    stopDragging() {
      this.isDragging = false;
    },
    dragCircle(e) {
      // Is a circle being dragged?
      if (this.isDragging) {
        // Make sure there really is a circle object (just in case).
        if (this.previousSelectedCircle) {
          // Find the new position of the mouse.
          const x = e.pageX - this.canvas.offsetLeft;
          const y = e.pageY - this.canvas.offsetTop;

          // Move the circle to that position.
          this.previousSelectedCircle.x = x;
          this.previousSelectedCircle.y = y;

          // Update the canvas.
          this.drawCircles();
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
canvas {
  border: 1px dotted red;
  cursor: pointer;
}
</style>
