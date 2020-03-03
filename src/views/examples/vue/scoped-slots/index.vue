<template>
  <div class="app">
    <h1>Scoped Slots</h1>
    <blockquote>
      in child component:
      <pre> &lt;slot v-bind="item"&gt;&lt;/slot&gt;</pre>

      in parent component:
      <pre>
  &lt;template v-slot:default="shape"&gt; ...  &lt;/template&gt;
  or
  &lt;template v-slot:default="{ name, hex }"> ...  &lt;template&gt;</pre>
    </blockquote>
    <div class="demo">
      <my-list
        :title="'shapes'"
        :items="shapes"
      >
        <template v-slot:default="shape">
          {{ shape.name }} ({{ shape.sides }} sides)
        </template>
      </my-list>

      <my-list
        :title="'colors'"
        :items="colors"
      >
        <template v-slot:default="{ name, hex }">
          <span
            class="color-square"
            :style="{ backgroundColor: hex }"
          />{{ name }}
        </template>
      </my-list>
    </div>
  </div>
</template>

<script>
import MyList from './my-list'
export default {
  components: { MyList },
  data () {
    return {
      shapes: [
        { name: 'Square', sides: 4 },
        { name: 'Hexagon', sides: 6 },
        { name: 'Triangle', sides: 3 }
      ],
      colors: [
        { name: 'Yellow', hex: '#F4D03F' },
        { name: 'Green', hex: '#229954' },
        { name: 'Purple', hex: '#9B59B6' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.demo {
  display: flex;
}
.color-square {
  display: inline-block;
  width: 12px;
  height: 12px;
  margin-right: 12px;
  background: #fff;
}
</style>
