<template>
  <div>
    <h1>
      computed property vs. watch
    </h1>
    <blockquote>
      While computed properties are more appropriate in most cases, there are times when a custom watcher is necessary.
      That’s why Vue provides a more generic way to react to data changes through the watch option. Watch is most useful
      when you want to perform asynchronous or expensive operations in response to changing data.
    </blockquote>

    <div>
      <h2>Computed Example</h2>
      <blockquote>Full name is a computed property with getter and setter</blockquote>
      <div class="demo1">
        <div>
          <span>first name: </span><input
            v-model="firstName"
            type="text"
          >
        </div>
        <div>
          <span>last name: </span><input
            v-model="lastName"
            type="text"
          >
        </div>
        <div>
          <span>full name:</span> <input
            v-model="fullName"
            type="text"
          >
        </div>
      </div>
    </div>
    <br>
    <div>
      <h2>Watch Example</h2>
      <blockquote>
        While computed properties are more appropriate in most cases, there are times when a custom watcher is
        necessary. That’s why Vue provides a more generic way to react to data changes through the watch option. This is
        most useful when you want to perform asynchronous or expensive operations in response to changing
        <br>
        In this case, using the watch option allows us to perform an asynchronous operation (accessing an API), limit
        how often we perform that operation, and set intermediary states until we get a final answer. None of that would
        be possible with a computed property.
      </blockquote>
      <p>
        Ask a yes/no question:
        <input v-model="question">
      </p>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'

export default {
  data () {
    return {
      firstName: 'Effy',
      lastName: 'Yin',
      question: '',
      answer: 'I cannot give you an answer until you ask a question!'
    }
  },
  computed: {
    fullName: {
      get () {
        return `${this.firstName} ${this.lastName}`
      },
      set (newVal) {
        const tmp = newVal.split(' ')
        this.firstName = tmp[0]
        this.lastName = tmp[1]
      }
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question (newQuestion, oldQuestion) {
      this.answer = 'Waiting for you to stop typing...'
      this.debouncedGetAnswer()
    }
  },
  created () {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500)
  },
  methods: {
    getAnswer () {
      if (this.question.indexOf('?') === -1) {
        this.answer = 'Questions usually contain a question mark. ;-)'
        return
      }
      this.answer = 'Thinking...'
      var vm = this
      axios
        .get('https://yesno.wtf/api')
        .then(function (response) {
          vm.answer = _.capitalize(response.data.answer)
        })
        .catch(function (error) {
          vm.answer = 'Error! Could not reach the API. ' + error
        })
    }
  }
}
</script>
<style lang="scss" scoped>
.demo1 {
  div {
    display: flex;
    span {
      width: 80px;
    }
  }
}
</style>
