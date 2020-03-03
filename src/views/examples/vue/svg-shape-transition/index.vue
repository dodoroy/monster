<template>
  <div>
    <h1>Dynamic State Transitions</h1>
    <blockquote>
      Dynamic State Transitions
    </blockquote>
    <svg
      width="200"
      height="200"
    >
      <polygon :points="points" />
      <circle
        cx="100"
        cy="100"
        r="90"
      />
    </svg>
    <label>Sides: {{ sides }}</label>
    <input
      v-model.number="sides"
      type="range"
      min="3"
      max="500"
    >
    <label>Minimum Radius: {{ minRadius }}%</label>
    <input
      v-model.number="minRadius"
      type="range"
      min="0"
      max="90"
    >
    <label>Update Interval: {{ updateInterval }} milliseconds</label>
    <input
      v-model.number="updateInterval"
      type="range"
      min="10"
      max="2000"
    >
  </div>
</template>
<script>
import { gsap } from 'gsap'
export default {
  data () {
    const defaultSides = 10
    const stats = Array.apply(null, { length: defaultSides }).map(function () {
      return 100
    })
    return {
      stats: stats,
      points: generatePoints(stats),
      sides: defaultSides,
      minRadius: 50,
      interval: null,
      updateInterval: 500
    }
  },
  watch: {
    sides: function (newSides, oldSides) {
      const sidesDifference = newSides - oldSides
      if (sidesDifference > 0) {
        for (let i = 1; i <= sidesDifference; i++) {
          this.stats.push(this.newRandomValue())
        }
      } else {
        const absoluteSidesDifference = Math.abs(sidesDifference)
        for (let i = 1; i <= absoluteSidesDifference; i++) {
          this.stats.shift()
        }
      }
    },
    stats: function (newStats) {
      gsap.to(this.$data, this.updateInterval / 1000, {
        points: generatePoints(newStats)
      })
    },
    updateInterval: function () {
      this.resetInterval()
    }
  },
  mounted: function () {
    this.resetInterval()
  },
  methods: {
    randomizeStats: function () {
      const vm = this
      this.stats = this.stats.map(function () {
        return vm.newRandomValue()
      })
    },
    newRandomValue: function () {
      return Math.ceil(this.minRadius + Math.random() * (100 - this.minRadius))
    },
    resetInterval: function () {
      const vm = this
      clearInterval(this.interval)
      this.randomizeStats()
      this.interval = setInterval(function () {
        vm.randomizeStats()
      }, this.updateInterval)
    }
  }
}

function valueToPoint (value, index, total) {
  const x = 0
  const y = -value * 0.9
  const angle = ((Math.PI * 2) / total) * index
  const cos = Math.cos(angle)
  const sin = Math.sin(angle)
  const tx = x * cos - y * sin + 100
  const ty = x * sin + y * cos + 100
  return { x: tx, y: ty }
}

function generatePoints (stats) {
  const total = stats.length
  return stats
    .map(function (stat, index) {
      const point = valueToPoint(stat, index, total)
      return point.x + ',' + point.y
    })
    .join(' ')
}
</script>
<style scoped>
svg {
  display: block;
}
polygon {
  fill: #41b883;
}
circle {
  fill: transparent;
  stroke: #35495e;
}
input[type='range'] {
  display: block;
  width: 100%;
  margin-bottom: 15px;
}
</style>
