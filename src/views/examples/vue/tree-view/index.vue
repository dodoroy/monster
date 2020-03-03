<template>
  <div>
    <h1>Tree View</h1>
    <blockquote>
      Example of a simple tree view implementation showcasing recursive usage of components.
    </blockquote>
    <div>
      <pre>v-if="isFolder" v-show="isOpen"</pre>
      <pre>v-if 和 v-show 可以同时使用</pre>
    </div>
    <p>(You can double click on an item to turn it into a folder.)</p>
    <ul>
      <tree-item
        :item="treeData"
        @make-folder="makeFolder"
        @add-item="addItem"
      />
    </ul>
  </div>
</template>

<script>
import TreeItem from './tree-item.vue'

const treeData = {
  name: 'My Tree',
  children: [
    { name: 'hello' },
    { name: 'wat' },
    {
      name: 'child folder',
      children: [
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        },
        { name: 'hello' },
        { name: 'wat' },
        {
          name: 'child folder',
          children: [{ name: 'hello' }, { name: 'wat' }]
        }
      ]
    }
  ]
}
export default {
  components: { TreeItem },
  data () {
    return {
      treeData
    }
  },
  methods: {
    makeFolder (item) {
      this.$set(item, 'children', [])
      this.addItem(item)
    },
    addItem (item) {
      item.children.push({ name: 'new stuff' })
    }
  }
}
</script>
