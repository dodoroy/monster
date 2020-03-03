<template>
  <div>
    <h1>Elastic Header</h1>
    <blockquote>SVG path, animation with dynamics.js, slot</blockquote>

    <p>Drag the header downwards to see the effect.</p>

    <div @touchmove.prevent>
      <draggable-header>
        <template slot="header">
          <h1>Elastic Draggable SVG Header</h1>
          <p>
            with <a href="http://vuejs.org">Vue.js</a> +
            <a href="http://dynamicsjs.com">dynamics.js</a>
          </p>
        </template>
        <template slot="content">
          <p>
            Note this is just an effect demo - there are of course many additional details if you want to use this in
            production, e.g. handling responsive sizes, reload threshold and content scrolling. Those are out of scope
            for this quick little hack. However, the idea is that you can hide them as internal details of a Vue.js
            component and expose a simple Web-Component-like interface.
          </p>
        </template>
      </draggable-header>
    </div>
  </div>
</template>

<script>
import DraggableHeader from './draggable-header'

export default {
  components: {
    DraggableHeader
  }
}
</script>
