<template>
  <div>
    <h1>SVG Graph</h1>
    <blockquote>
      This example showcases a combination of custom component, computed property, two-way binding and SVG support
    </blockquote>

    <div class="demo-wrapper">
      <div class="left">
        <svg
          width="200"
          height="200"
        >
          <poly-graph :stats="stats" />
        </svg>

        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
        >
          <label>{{ stat.label }}</label>
          <input
            v-model="stat.value"
            type="range"
            min="0"
            max="100"
          >
          {{ stat.value }}
          <button @click="remove(index)">
            x
          </button>
          <br>
        </div>

        <form>
          <input
            v-model="newLabel"
            type="text"
          >
          <button @click="add">
            add
          </button>
        </form>
      </div>
      <div class="right">
        <pre>{{ stats }}</pre>
        <p style="font-size:12px">
          * input[type="range"] requires IE10 or above.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import PolyGraph from './poly-graph'

export default {
  components: { PolyGraph },
  data () {
    return {
      stats: [
        {
          label: 'A',
          value: '100'
        },
        {
          label: 'B',
          value: '100'
        },
        {
          label: 'C',
          value: 100
        },
        {
          label: 'D',
          value: 100
        },
        {
          label: 'E',
          value: 100
        },
        {
          label: 'F',
          value: 100
        }
      ],
      newLabel: ''
    }
  },

  methods: {
    remove (index) {
      if (this.stats.length > 3) {
        this.stats.splice(index, 1)
      } else {
        alert("can't delete more!")
      }
    },
    add (e) {
      e.preventDefault()
      if (!this.newLabel) return
      this.stats.push({
        label: this.newLabel,
        value: 100
      })
      this.newLabel = ''
    }
  }
}
</script>

<style lang="scss" scoped>
.demo-wrapper {
  display: flex;
  .left {
    margin-right: 24px;
    button {
      cursor: pointer;
    }
  }
}
</style>
