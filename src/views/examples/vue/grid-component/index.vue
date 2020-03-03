<template>
  <div>
    <h1>Grid Component</h1>
    <blockquote>
      This is an example of creating a reusable grid component and using it with external data.
    </blockquote>

    <form>
      <label for="search">filter text: </label>
      <input
        id="search"
        v-model="searchQuery"
        type="text"
      >
    </form>
    <sortable-table
      :columns="gridColumns"
      :table-data="gridData"
      :filter-key="searchQuery"
    />
  </div>
</template>

<script>
import SortableTable from './sortable-table'

export default {
  components: { SortableTable },
  data () {
    return {
      searchQuery: '',
      gridColumns: ['name', 'power'],
      gridData: [
        { name: 'Chuck Norris', power: Infinity },
        { name: 'Bruce Lee', power: 9000 },
        { name: 'Jackie Chan', power: 7000 },
        { name: 'Jet Li', power: 8000 }
      ]
    }
  }
}
</script>
<style scoped>
input {
  margin-bottom: 20px;
}
</style>
