<template>
  <li class="item">
    <div
      :class="{ bold: isFolder }"
      @click="toggleOpen"
      @dblclick="makeFolder"
    >
      {{ item.name }}
      <span v-if="isFolder">[{{ isOpen ? '-' : '+' }}]</span>
    </div>
    <ul
      v-if="isFolder"
      v-show="isOpen"
    >
      <tree-item
        v-for="(child, index) in item.children"
        :key="child.name + index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      />
      <li @click="$emit('add-item', item)">
        +
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: 'TreeItem',
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  computed: {
    isFolder () {
      return this.item.children && this.item.children.length
    }
  },
  methods: {
    toggleOpen () {
      this.isOpen = !this.isOpen
    },
    makeFolder () {
      if (!this.isFolder) {
        this.$emit('make-folder', this.item)
        this.isOpen = true
      }
    }
  }
}
</script>

<style>
.item {
  cursor: pointer;
}
.bold {
  font-weight: bold;
}
ul {
  padding-left: 1em;
  line-height: 1.5em;
  list-style-type: dot;
}
</style>
