<template>
  <div>
    <h1>Wrapper Component</h1>
    <blockquote>
      In this example we are integrating a 3rd party jQuery plugin (select2) by wrapping it inside a custom
      component.<br />
      v-model 绑定封装组件的 value 值，注意v-model绑定的内部实现（select的值onchang时，emit input事件）<br />
      mounted时初始化，destroyed时要注意销毁<br />
      this.$el 为组件根元素
    </blockquote>

    <p>selected: {{ this.selected }}</p>
    <select2 :options="options" v-model="selected">
      <option disabled value="0">Select one</option>
    </select2>
  </div>
</template>
<script>
import Select2 from './select2';

export default {
  components: {
    Select2
  },
  data() {
    return {
      selected: 2,
      options: [
        { id: 1, text: 'Hello' },
        { id: 2, text: 'World' }
      ]
    };
  }
};
</script>
<style lang="scss"></style>
