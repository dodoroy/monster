<template>
  <div class="my-list">
    <div class="title">
      {{ title }}
    </div>
    <ul>
      <li
        v-for="item in items"
        :key="item.name"
      >
        <slot v-bind="item" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'MyList',
  props: {
    title: {
      type: String,
      default: () => ''
    },
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.my-list {
  min-width: 200px;
  color: #fff;
  margin-right: 20px;

  .title {
    padding: 8px 12px;
    font-size: 2rem;
    background: #a93226;
  }
  ul {
    margin: 0;
    padding-left: 12px;
    background: #34495e;
  }
  li {
    list-style: none;
    height: 40px;
    line-height: 40px;
  }
}
</style>
