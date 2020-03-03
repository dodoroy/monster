<template>
  <div>
    <h1>渲染函数 & JSX</h1>
    <blockquote>
      Vue 通过建立一个虚拟 DOM 来追踪自己要如何改变真实 DOM。<br>
      createElement 到底会返回什么呢？其实不是一个实际的 DOM 元素。它更准确的名字可能是
      createNodeDescription，因为它所包含的信息会告诉 Vue
      页面上需要渲染什么样的节点，包括及其子节点的描述信息。我们把这样的节点描述为“虚拟节点 (virtual
      node)”，也常简写它为“VNode”。 “虚拟 DOM”是我们对由 Vue 组件树建立起来的整个 VNode 树的称呼。
    </blockquote>
    <anchored-heading :level="1">
      lala header1
      <span>123</span>
      <p>456<span>last</span></p>
    </anchored-heading>
    <p>some text ...</p>
    <anchored-heading :level="2">
      header2
    </anchored-heading>
    <p>some text ...</p>
    <anchored-heading :level="3">
      header3
    </anchored-heading>
    <p>some text ...</p>
  </div>
</template>
<script>
import AnchoredHeading from './anchored-heading'
export default {
  components: { AnchoredHeading }
}
</script>
<style lang="scss"></style>
