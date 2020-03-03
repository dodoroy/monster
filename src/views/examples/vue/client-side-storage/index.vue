<template>
  <div>
    <h1>Client-Side Storage</h1>
    <blockquote>
      客户端存储是快速为一个应用进行性能优化的绝佳方法。通过把数据存储在浏览器中，用户不必每次都向服务器请求获取同一个信息。在你离线时，使用本地存储的数据而不是向远端服务器上请求数据就显得非常有用，甚至在线用户也可以从中获益。
      客户端存储可以通过这些技术来实现：cookie、Local Storage (更准确地说是“Web Storage”)、IndexedDB 和 WebSQL
      (已废弃了)。
      <br>
      这个 demo 专注于最简单的存储机制：Local Storage。Local Storage
      使用键/值对来存储数据。它仅支持存储简单的值，但也可以通过 JSON 编解码来存储复杂的数据。<br>总的来说，Local
      Storage 适合存储你希望进行持久化的较小数据集，比如用户偏好设置或表单数据。更大规模和更复杂的数据则适合存储在
      IndexedDB 中。
      <br>
      mounted 方法现在需要先获取数据，然后对 JSON
      格式的数据进行解析。如果这里出现了任何错误，我们就认为数据已经损坏了并将它删除。
      (请记住，如果你的网页应用使用了客户端存储技术，用户可以随意访问并修改这些存储的数据。)
    </blockquote>

    <h3>Cats</h3>
    <ul>
      <li
        v-for="(cat, index) in cats"
        :key="cat"
      >
        {{ cat }} <button @click="handleRemove(index)">
          remove
        </button>
      </li>
    </ul>

    <form
      action="#"
      @submit="handleAdd"
    >
      <input
        v-model="newCat"
        type="text"
      >
      <input
        type="submit"
        value="Add Cat"
      >
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      cats: [],
      newCat: null
    }
  },
  mounted () {
    console.log(window.localStorage)
    if (localStorage.getItem('cats')) {
      // try catch
      try {
        this.cats = JSON.parse(localStorage.getItem('cats'))
      } catch (e) {
        localStorage.removeItem('cats')
      }
    }
  },
  methods: {
    handleAdd () {
      if (!this.newCat) {
        alert('please input a cat!')
      } else {
        this.cats.push(this.newCat)
        this.newCat = ''
        this.saveCats()
      }
    },
    handleRemove (index) {
      this.cats.splice(index, 1)
      this.saveCats()
    },
    saveCats () {
      window.localStorage.setItem('myCats', JSON.stringify(this.cats))
    }
  }
}
</script>

<style></style>
