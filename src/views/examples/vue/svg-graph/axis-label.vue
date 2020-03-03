<template>
  <text
    :x="point.x"
    :y="point.y"
  >
    {{ stat.label }}
  </text>
</template>

<script>
// math helper...
import valueToPoint from './helper'

export default {
  props: {
    stat: {
      type: Object,
      default: () => {}
    },
    index: {
      type: Number,
      default: () => 0
    },
    total: {
      type: Number,
      default: () => 0
    }
  },
  computed: {
    point () {
      return valueToPoint(+this.stat.value + 10, this.index, this.total)
    }
  }
}
</script>

<style></style>
