<template>
  <div>
    <h2>Markdown Editor</h2>
    <blockquote>Dead simple Markdown editor.</blockquote>
    <div>
      <ul>
        <li>
          textarea没用v-model绑定input的值，而是用value绑定input的值，在textarea的input事件里调用
          _.debounce 更新input的值。
        </li>
        <li>
          debounce函数的返回值是一个function，跟setTimeout使用是不一样的。
          <pre>
update() {
  _.debounce(()=>{
    ...
  },300)
}
</pre
          >
          不会执行，需改成
          <pre>
update() {
  _.debounce(()=>{
    ...
  },300)()
}
</pre
          >
          或者
          <pre>
update: _.debounce(function (e) {
  this.input = e.target.value;
}, 300)
</pre
          >
        </li>
      </ul>
    </div>

    <textarea name id cols="30" rows="10" :value="input" @input="update"></textarea>
    <div v-html="compiledMarkdown" class="mark"></div>
  </div>
</template>

<script>
import marked from 'marked';
import _ from 'lodash';

export default {
  data() {
    return {
      input: '# hello'
    };
  },
  computed: {
    compiledMarkdown() {
      return marked(this.input);
    }
  },
  methods: {
    update: _.debounce(function(e) {
      this.input = e.target.value;
    }, 300)
  }
};
</script>

<style lang="scss" scoped>
textarea,
.mark {
  display: inline-block;
  width: 49%;
  height: 100%;
  vertical-align: top;
  box-sizing: border-box;
  padding: 0 20px;
}

textarea {
  border: none;
  border-right: 1px solid #ccc;
  resize: none;
  outline: none;
  background-color: #f6f6f6;
  font-size: 14px;
  font-family: 'Monaco', courier, monospace;
  padding: 20px;
}
</style>
