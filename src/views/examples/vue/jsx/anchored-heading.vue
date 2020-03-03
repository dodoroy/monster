<script>
function getChildrenTextContent (children) {
  return children.map((node) => (node.children ? getChildrenTextContent(node.children) : node.text)).join('')
}
export default {
  props: {
    level: {
      type: Number,
      required: true
    }
  },
  render (h) {
    const headingId = getChildrenTextContent(this.$slots.default)
      .toLowerCase()
      .replace(/\W+/g, '-')
      .replace(/(^-|-$)/g, '')
    return h('h' + this.level, [
      h(
        'a',
        {
          attrs: {
            name: headingId,
            href: `#${headingId}`
          }
        },
        this.$slots.default
      )
    ])
  }
}
</script>
<style lang="scss" scoped>
h1 a {
  color: red;
}
h2 a {
  color: green;
}
h3 a {
  color: blue;
}
</style>
