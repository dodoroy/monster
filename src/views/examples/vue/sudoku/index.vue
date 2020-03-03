<template>
  <div>
    <h1>Lazy Sudoku</h1>
    <blockquote>
      Keep hitting the shuffle button until you win.
    </blockquote>

    <button @click="shuffle()">
      shuffle
    </button>

    <transition-group
      tag="div"
      name="cell"
    >
      <div
        v-for="cell in cells"
        :key="cell.id"
        class="cell"
      >
        {{ cell.number }}
      </div>
    </transition-group>
  </div>
</template>

<script>
import _ from 'lodash'
export default {
  data () {
    return {
      cells: Array.apply(null, { length: 81 }).map(function (_, index) {
        return {
          id: index,
          number: (index % 9) + 1
        }
      })
    }
  },
  methods: {
    shuffle: function () {
      this.cells = _.shuffle(this.cells)
    }
  }
}
</script>

<style lang="scss" scoped>
button + div {
  display: flex;
  flex-wrap: wrap;
  width: 238px;
  margin-top: 20px;

  .cell {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 25px;
    height: 25px;
    border: 1px solid #aaa;
    margin-right: -1px;
    margin-bottom: -1px;
  }
}
.cell-move {
  transition: transform 1s;
}
</style>
