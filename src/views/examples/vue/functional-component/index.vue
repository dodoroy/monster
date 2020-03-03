<template>
  <div>
    <h1>Functional Component</h1>
    <blockquote />
    <smart-list :items="emptyList" />
    <smart-list :items="tableList" />
  </div>
</template>

<script>
// import SmartList from './smart-list';
export default {
  // components: { SmartList },
  data () {
    return {
      emptyList: [],
      tableList: [
        {
          name: 'name1',
          sex: 'male'
        },
        {
          name: 'name2',
          sex: 'female'
        }
      ]
    }
  }
}
</script>

<style></style>
