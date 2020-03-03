<template>
  <div>
    <table>
      <thead>
        <tr>
          <th
            v-for="key in columns"
            :key="key"
            :class="[key === sortKey ? 'active' : '']"
            @click="sortBy(key)"
          >
            {{ key }}
            <span :class="['arrow', sortOrders[key] === -1 ? 'dsc' : 'asc']" />
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="item in filteredData"
          :key="item.name"
        >
          <td
            v-for="key in columns"
            :key="key"
          >
            {{ item[key] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    filterKey: {
      type: String,
      default: () => ''
    },
    columns: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    }
  },
  data () {
    const sortOrders = {}
    this.columns.forEach((key) => {
      sortOrders[key] = 1
    })
    return {
      sortKey: '',
      sortOrders
    }
  },
  computed: {
    filteredData () {
      let data = this.tableData.slice(0)
      const { sortKey } = this
      const sortOrder = this.sortOrders[sortKey] || 1
      if (this.filterKey) {
        data = data.filter((item) => item.name.indexOf(this.filterKey) !== -1)
      }
      if (sortKey) {
        data.sort((a, b) => {
          const a1 = a[sortKey]
          const b1 = b[sortKey]
          return (a1 === b1 ? 0 : a1 > b1 ? 1 : -1) * sortOrder
        })
      }
      return data
    }
  },
  methods: {
    sortBy (key) {
      this.sortKey = key
      this.$set(this.sortOrders, key, this.sortOrders[key] * -1)
    }
  }
}
</script>
<style lang="scss" scoped>
table {
  border: 2px solid #563d7c;
  border-radius: 3px;
  th,
  td {
    min-width: 120px;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  th {
    background: #563d7c;
    color: rgba(255, 255, 266, 0.8);
    cursor: pointer;
    &.active {
      color: #fff;
    }
  }
  tbody {
    background: #f9f9f9;
    td {
      border: 1px solid #fff;
    }
  }
}
.arrow {
  position: relative;
  display: inline-block;
  width: 0;
  height: 0;
  margin-left: 5px;
  border: 4px solid transparent;

  &.dsc {
    border-top: 4px solid #fff;
    top: 2px;
  }
  &.asc {
    border-bottom: 4px solid #fff;
    top: -2px;
  }
}
</style>
