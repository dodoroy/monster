<template>
  <g>
    <circle
      cx="100"
      cy="100"
      r="80"
    />
    <polygon :points="points" />
    <axis-label
      v-for="(stat, index) in stats"
      :key="index"
      :stat="stat"
      :index="index"
      :total="stats.length"
    />
  </g>
</template>

<script>
import AxisLabel from './axis-label'
import valueToPoint from './helper'

export default {
  components: { AxisLabel },
  props: {
    stats: {
      type: Array,
      default: () => []
    }
  },
  computed: {
    points () {
      const total = this.stats.length
      return this.stats
        .map((stat, i) => {
          const point = valueToPoint(stat.value, i, total)
          return `${point.x},${point.y}`
        })
        .join(' ')
    }
  }
}
</script>

<style>
polygon {
  fill: #563d7c;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}
</style>
