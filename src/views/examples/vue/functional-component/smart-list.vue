<script>
const EmptyList = {
  render (h) {
    return <div>this list is empty</div>
  }
}
const TableList = {
  render (h) {
    return <div>table list</div>
  }
}
const OrderedList = {
  render (h) {
    return <div>ordered list</div>
  }
}
const UnorderedList = {
  render (h) {
    return <div>unorder list</div>
  }
}

export default {
  functional: true,
  props: {
    items: {
      type: Array,
      required: true
    },
    isOrdered: Boolean
  },
  render: function (h, context) {
    function appropriateListComponent () {
      const items = context.props.items

      if (items.length === 0) return EmptyList
      if (typeof items[0] === 'object') return TableList
      if (context.props.isOrdered) return OrderedList

      return UnorderedList
    }

    return h(appropriateListComponent(), context.data, context.children)
  }
}
</script>
