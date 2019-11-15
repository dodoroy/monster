<template>
  <g>
    <circle cx="100" cy="100" r="80" />
    <polygon :points="points" />
    <axis-label
      v-for="(stat, index) in stats"
      :stat="stat"
      :index="index"
      :total="stats.length"
      :key="index"
    ></axis-label>
  </g>
</template>

<script>
import AxisLabel from './axis-label';
import valueToPoint from './helper';

export default {
  props: {
    stats: Array
  },
  components: { AxisLabel },
  computed: {
    points() {
      const total = this.stats.length;
      return this.stats
        .map((stat, i) => {
          const point = valueToPoint(stat.value, i, total);
          return `${point.x},${point.y}`;
        })
        .join(' ');
    }
  }
};
</script>

<style>
polygon {
  fill: #42b983;
  opacity: 0.75;
}

circle {
  fill: transparent;
  stroke: #999;
}
</style>
