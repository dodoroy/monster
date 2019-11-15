<template>
  <div>
    <canvas id="canvas" width="500" height="300"
      @click="handleCanvasClick($event)"
    ></canvas>
    <div>
      <button @click="addBall">Add Ball</button>
      <button @click="clearCanvas">Clear Canvas</button>
    </div>
    <div>
      Ball Size:
      <input v-model="ballRadius" type="number" min="0" max="50">
      <input v-model="isBallConnected" type="checkbox">Connect Balls<br>
    </div>
  </div>
</template>
<script>
// This function stores the details for a single ball.
class Ball {
  constructor(x, y, dx, dy, radius) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.strokeColor = 'black';
    this.fillColor = 'red';
  }
}

export default {
  data() {
    return {
      canvas: null,
      context: null,
      balls: [],
      ballRadius: 20,
      isBallConnected: false,
    };
  },
  mounted() {
    this.canvas = document.getElementById('canvas');
    this.context = this.canvas.getContext('2d');

    // Redraw every 20 milliseconds.
    const timer = setInterval(this.drawFrame, 20);
    this.$once('hook:beforeDestroy', () => {
      clearInterval(timer);
    });
  },
  methods: {
    addBall() {
      // Create the new ball.
      const ball = new Ball(50, 50, 1, 1, parseInt(this.ballRadius));

      // Store it in the ball array.
      this.balls.push(ball);
    },
    clearCanvas() {
      // Remove all the balls.
      this.balls = [];
    },
    drawFrame() {
      // Clear the canvas.
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);

      // Note that you need to call beginPath() to make sure you don't redraw part of what
      // you were drawing before.
      this.context.beginPath();

      // Go through all the balls.
      for (let i = 0; i < this.balls.length; i++) {
        // Move each ball to its new position.
        const ball = this.balls[i];
        ball.x += ball.dx;
        ball.y += ball.dy;

        // Add in a "gravity" effect that makes the ball fall faster.
        if ((ball.y) < this.canvas.height) ball.dy += 0.22;

        // Add in a "friction" effect that slows down the ball's side-to-side motion.
        ball.dx *= 0.998;

        // If the ball has hit the side, bounce it.
        if ((ball.x + ball.radius >= this.canvas.width) || (ball.x - ball.radius <= 0)) {
          ball.dx = -ball.dx;
        }

        // If the ball has hit the bottom, bounce it, but slow it down slightly.
        if ((ball.y + ball.radius >= this.canvas.height) || (ball.y - ball.radius <= 0)) {
          ball.dy = -ball.dy * 0.96;
        }
        // console.log(2, ball.x, ball.y, ball.dx, ball.dy);
        // Check if the user wants lines.
        if (!this.isBallConnected) {
          this.context.beginPath();
          this.context.fillStyle = ball.fillColor;
        } else {
          this.context.fillStyle = 'white';
        }

        // Draw the ball.
        this.context.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
        this.context.lineWidth = 1;
        this.context.fill();
        this.context.stroke();
      }

      // Draw the next frame in 20 milliseconds.
      // const timer = setTimeout(this.drawFrame, 20);
      // this.$once('hook:beforeDestroy', () => {
      //   clearTimeout(timer);
      // });
    },
    handleCanvasClick(e) {
      // Get the canvas click coordinates.
      const clickX = e.pageX - this.canvas.offsetLeft;
      const clickY = e.pageY - this.canvas.offsetTop;

      // Look for the clicked ball.
      for (let i = 0; i < this.balls.length; i++) {
        const ball = this.balls[i];
        if ((clickX > (ball.x - ball.radius)) && (clickX < (ball.x + ball.radius))) {
          if ((clickY > (ball.y - ball.radius)) && (clickY < (ball.y + ball.radius))) {
            // Change the clicked ball's speed.
            ball.dx -= 2;
            ball.dy -= 3;
            return;
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
canvas {
  border: 1px dotted red;
}
</style>
