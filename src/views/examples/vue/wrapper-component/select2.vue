<template>
  <select>
    <slot></slot>
  </select>
</template>

<script>
import $ from 'jquery';
import select2 from 'select2';
import 'select2/dist/css/select2.min.css';

export default {
  props: {
    options: Array,
    value: [String, Number]
  },

  mounted() {
    const vm = this;
    $(this.$el)
      // init select2
      .select2({ data: this.options })
      .val(this.value)
      .trigger('change')
      // emit event on change.
      .on('change', function() {
        // 不能用箭头函数，注意该匿名函数里 this 和 vm 分别代表的意义。
        vm.$emit('input', this.value); // .. v-model 的组件内部实现，值的双向绑定
      });
  },

  watch: {
    value(value) {
      // update value
      $(this.$el)
        .val(value)
        .trigger('change');
    },
    options(options) {
      // update options
      $(this.$el)
        .empty()
        .select2({ data: options });
    }
  },
  destroyed() {
    $(this.$el)
      .off()
      .select2('destroy');
  }
};
</script>
<style scoped>
select {
  min-width: 300px;
}
</style>
