<template>
  <div>
    <header>
      <h1>Five Factor Personality Test</h1>
      <p>The Results</p>
    </header>

    <div
      v-for="(value,key) in scores"
      :key="key"
      class="score"
    >
      <h2 id="headingE">
        {{ key|capitalize }}: {{ value }}
      </h2>
      <canvas
        :id="'canvas-'+key"
        height="75"
        width="550"
      />
    </div>

    <img
      id="arrow_left"
      src="./arrow_left.png"
    >
    <img
      id="arrow_right"
      src="./arrow_right.png"
    >
    <img
      id="star"
      src="./star.png"
    >
  </div>
</template>
<script>
export default {
  filters: {
    capitalize (word) {
      return word.toUpperCase()
    }
  },
  data () {
    return {
      scores: {
        extraversion: -20,
        accommodation: 0,
        conscientiousness: 20,
        neuroticism: -16,
        openness: 18
      }
    }
  },
  mounted () {
    for (const key in this.scores) {
      this.plotScore(document.getElementById(`canvas-${key}`), this.scores[key])
    }
  },

  methods: {
    plotScore (canvas, score) {
      const context = canvas.getContext('2d')

      // Draw the arrows on the side of the chart line.
      let img = document.getElementById('arrow_left')
      context.drawImage(img, 12, 10)
      img = document.getElementById('arrow_right')
      context.drawImage(img, 498, 10)

      // Draw the line between the arrows.
      context.moveTo(39, 25)
      context.lineTo(503, 25)
      context.lineWidth = 10
      context.strokeStyle = 'rgb(174,215,244)'
      context.stroke()

      // Write the numbers on the scale.
      context.fillStyle = context.strokeStyle
      context.font = 'italic bold 18px Arial'
      context.textBaseline = 'top'

      context.fillText('-20', 35, 50)
      context.fillText('0', 255, 50)
      context.fillText('20', 475, 50)

      // Add the star to show where the score ranks on the chart.
      img = document.getElementById('star')
      context.drawImage(img, (score + 20) / 40 * 440 + 35 - 8, 0)
    }
  }
}
</script>
<style lang="scss">

</style>
