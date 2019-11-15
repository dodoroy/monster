<template>
  <div>
    <h1>Tree View</h1>
    <blockquote>
      Example of a simple tree view implementation showcasing recursive usage of components.
    </blockquote>
    <div>
      <pre>v-if="isFolder" v-show="isOpen"</pre>
      v-if 和 v-show 可以同时使用
    </div>

    <ul>
      <tree-item :item="treeData" @make-folder="makeFolder" @add-item="addItem"></tree-item>
    </ul>
  </div>
</template>

<script>
import TreeItem from './tree-item.vue';

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
};
export default {
  data() {
    return {
      treeData
    };
  },
  components: { TreeItem },
  methods: {
    makeFolder(item) {
      this.$set(item, 'children', []);
      this.addItem(item);
    },
    addItem(item) {
      item.children.push({ name: 'new stuff' });
    }
  }
};
</script>

<style></style>
