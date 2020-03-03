<template>
  <div>
    <h1>Custom Directives</h1>
    <blockquote>
      一个指令定义对象可以提供如下几个钩子函数 (均为可选)：
      <ul>
        <li>bind：只调用一次，指令第一次绑定到元素时调用。在这里可以进行一次性的初始化设置。</li>
        <li>inserted：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。</li>
        <li>
          update：所在组件的 VNode 更新时调用，但是可能发生在其子 VNode
          更新之前。指令的值可能发生了改变，也可能没有。但是你可以通过比较更新前后的值来忽略不必要的模板更新
          (详细的钩子函数参数见下)。
        </li>
        <li>componentUpdated：指令所在组件的 VNode 及其子 VNode 全部更新后调用。</li>
        <li>
          unbind：只调用一次，指令与元素解绑时调用。
        </li>
      </ul>
      指令钩子函数会被传入以下参数：
      <ul>
        <li>el：指令所绑定的元素，可以用来直接操作 DOM 。</li>
        <li>
          binding：一个对象，包含以下属性：
          <ul>
            <li>name：指令名，不包括 v- 前缀。</li>
            <li>
              value：指令的绑定值，例如：v-my-directive="1 + 1" 中，绑定值为 2。
            </li>
            <li>oldValue：指令绑定的前一个值，仅在 update 和 componentUpdated 钩子中可用。无论值是否改变都可用。</li>
            <li>expression：字符串形式的指令表达式。例如 v-my-directive="1 + 1" 中，表达式为 "1 + 1"。</li>
            <li>arg：传给指令的参数，可选。例如 v-my-directive:foo 中，参数为 "foo"。</li>
            <li>
              modifiers：一个包含修饰符的对象。例如：v-my-directive.foo.bar 中，修饰符对象为 { foo: true, bar: true }。
            </li>
          </ul>
        </li>
        <li>vnode：Vue 编译生成的虚拟节点。移步 VNode API 来了解更多详情。</li>
        <li>
          oldVnode：上一个虚拟节点，仅在 update 和 componentUpdated 钩子中可用。
        </li>
      </ul>
    </blockquote>
    <div>
      <h3>v-focus</h3>
      <input
        v-focus
        type="text"
      >

      <h3>v-demo:foo.a.b="direction"</h3>
      <div v-demo:foo.a.b="direction" />

      <h3>v-pintop="200"</h3>
      <div>Scroll down the page</div>
      <p
        v-pintop="300"
        class="block"
      >
        Stick me 300px from the top of the page
      </p>

      <h3>动态指令参数 v-pin:[direction]="400"</h3>
      <pre>v-mydirective:[argument]="value"</pre>
      <div>Scroll down inside this section ↓</div>
      <p
        v-pin:[direction]="200"
        v-pin:top="600"
        class="block"
      >
        I am pinned onto the page at 200px to the left and 600 to the top.
      </p>

      <div class="long-block" />
    </div>
  </div>
</template>
<script>
import Vue from 'vue'

// 注册一个全局自定义指令 `v-focus`
Vue.directive('focus', {
  // 当被绑定的元素插入到 DOM 中时……
  inserted (el) {
    el.focus()
  }
})

export default {
  directives: {
    demo: {
      bind (el, binding, vnode) {
        var s = JSON.stringify
        el.innerHTML = `
        name: ${s(binding.name)} <br>
        value: ${s(binding.value)} <br>
        expression: ${s(binding.expression)} <br>
        argument: ${s(binding.arg)} <br>
        modifiers: ${s(binding.modifiers)} <br>
        vnode keys: ${Object.keys(vnode).join(', ')}
        `
      }
    },
    pintop: {
      bind (el, binding, vnode) {
        el.style.position = 'fixed'
        el.style.top = binding.value + 'px'
      }
    },
    pin: {
      bind (el, binding, vnode) {
        console.log(11111, binding)
        el.style.position = 'fixed'
        var dir = binding.arg === 'left' ? 'left' : 'top'
        el.style[dir] = binding.value + 'px'
      }
    }
  },
  data () {
    return {
      direction: 'left'
    }
  }
}
</script>
<style lang="scss">
.block {
  width: 500px;
  height: 40px;
  line-height: 40px;
  background: pink;
}
.long-block {
  height: 1000px;
}
</style>
