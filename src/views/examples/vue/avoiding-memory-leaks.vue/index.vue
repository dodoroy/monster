<template>
  <div>
    <h1>Avoiding Memory Leaks</h1>
    <blockquote>
      内存泄漏在 Vue 应用中通常不是来自 Vue 自身的，更多地发生于把其它库集成到应用中的时候。
      这些内存泄漏往往会发生在使用 Vue 之外的其它进行 DOM
      操作的三方库时。请确保测试应用的内存泄漏问题并在适当的时机做必要的组件清理。
    </blockquote>
    <pre>
// 组件销毁前进行清理
beforeDestroy: function () {
  this.choicesSelect.destroy()
}

// 如果你想要在一个 keep-alive 组件被移除的时候进行清理或改变数据，可以使用 deactivated 钩子。
deactivated: function () {
  // 移除任何你不想保留的数据
}
    </pre>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss"></style>
