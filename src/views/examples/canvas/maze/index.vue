<template>
  <div>
    <canvas id="canvas"></canvas>

    <div>
      <button @click="loadHard()">Load Hard Maze</button>
      <button @click="loadEasy()">Load Easy Maze</button>
    </div>

    <img id="face" src="./face.png">

  </div>
</template>
<script>
import hardMaze from './maze.png';
import easyMaze from './easy_maze.png';

export default {
  data() {
    return {
      canvas: null,
      context: null,
      x: 5,
      y: 5,
      dx: 0,
      dy: 0,
      timer: null, // Keep track of the current timer, so the drawing can be easily stopped and restarted if a new maze is loaded.
    };
  },
  created() {
    if (localStorage) {
      const savedX = localStorage.getItem('mazeGame_currentX');
      const savedY = localStorage.getItem('mazeGame_currentY');
      if (savedX) this.x = Number(savedX);
      if (savedY) this.y = Number(savedY);
      console.log('created', this.x, this.y, localStorage);
    }
  },
  mounted() {
    // Set up the canvas.
    this.canvas = document.getElementById('canvas');
    this.context = canvas.getContext('2d');

    // Draw the maze background.
    this.drawMaze(easyMaze, this.x, this.y);

    // When the user presses a key, run the processKey() function.
    window.onkeydown = this.processKey;
    for (let i = 0; i < localStorage.length; i++) {
      console.log(localStorage.key(i), localStorage[localStorage.key(i)], '------');
    }
  },
  beforeDestroy(to, from, next) {
    clearTimeout(this.timer);

    if (localStorage) {
      localStorage.setItem('mazeGame_currentX', this.x);
      localStorage.setItem('mazeGame_currentY', this.y);
      console.log('destroy', this.x, this.y, localStorage);
    }
  },
  methods: {
    drawMaze(mazeFile, startingX, startingY) {
      // Stop drawing (if it's taking place).
      clearTimeout(this.timer);

      // Stop the happy face (if it's moving).
      this.dx = 0;
      this.dy = 0;

      // Load the maze picture.
      const imgMaze = new Image();
      imgMaze.src = mazeFile;
      imgMaze.onload = () => {
        // Resize the canvas to match the maze picture.
        this.canvas.width = imgMaze.width;
        this.canvas.height = imgMaze.height;

        // Draw the maze.
        this.context.drawImage(imgMaze, 0, 0);

        // Draw the face.
        this.x = startingX;
        this.y = startingY;

        const imgFace = document.getElementById('face');
        this.context.drawImage(imgFace, this.x, this.y);
        this.context.stroke();

        // Draw the next frame in 10 milliseconds.
        this.timer = setTimeout(this.drawFrame, 10);
      };
    },
    drawFrame() {
      // Only draw a new frame if the face is moving.
      if (this.dx !== 0 || this.dy !== 0) {
        // Clear away the previous face position (but leave a yellow patch there,
        // to create the "trail" effect.)
        this.context.beginPath();
        this.context.fillStyle = 'rgb(254,244,207)';
        this.context.rect(this.x, this.y, 15, 15);
        this.context.fill();

        // Increment the face's position.
        this.x += this.dx;
        this.y += this.dy;

        // Stop the face if it hit a wall, and move it back to the old position.
        if (this.checkForCollision()) {
          this.x -= this.dx;
          this.y -= this.dy;
          this.dx = 0;
          this.dy = 0;
        }

        // Draw the face at its new position.
        const imgFace = document.getElementById('face');
        this.context.drawImage(imgFace, this.x, this.y);

        // Check if the user has finished the maze (reached the bottom edge).
        // If so, show a message and return from the function, so no more frames are drawn.
        if (this.y > (this.canvas.height - 17)) {
          alert('You win!');
          return;
        }
      }

      // Draw a new frame in 10 milliseconds.
      this.timer = setTimeout(this.drawFrame, 10);
    },
    checkForCollision() {
      // Grab the block of pixels where the happy face is, but extend the edges just a bit.
      const imgData = this.context.getImageData(this.x - 1, this.y - 1, 15 + 2, 15 + 2);
      const pixels = imgData.data;

      // Check these pixels.
      for (let i = 0; i < pixels.length; i += 4) {
        const red = pixels[i];
        const green = pixels[i + 1];
        const blue = pixels[i + 2];
        const alpha = pixels[i + 3];

        // Look for black walls (which indicates a collision).
        if (red === 0 && green === 0 && blue === 0) {
          return true;
        }
        // Look for gray edge space (which indicates a collision).
        if (red === 169 && green === 169 && blue === 169) {
          return true;
        }
      }
      // There was no collision.
      return false;
    },
    processKey(e) {
      // If the face is moving, stop it.
      this.dx = 0;
      this.dy = 0;

      // If an arrow key was pressed, and adjust the speed accordingly.
      // (Ignore any other key.)

      // The up arrow was pressed, so move up.
      if (e.keyCode === 38) {
        this.dy = -1;
      }

      // The down arrow was pressed, so move down.
      if (e.keyCode === 40) {
        this.dy = 1;
      }

      // The left arrow was pressed, so move left.
      if (e.keyCode === 37) {
        this.dx = -1;
      }

      // The right arrow was pressed, so move right.
      if (e.keyCode === 39) {
        this.dx = 1;
      }
    },

    loadEasy() {
      this.drawMaze(easyMaze, 5, 5);
    },

    loadHard() {
      this.drawMaze(hardMaze, 268, 5);
    },
  },
};
</script>
<style lang="scss" scoped>
canvas {
  border: 6px double black;
  background: white;
}
</style>
