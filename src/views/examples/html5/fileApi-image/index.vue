<template>
  <div>
    <input
      type="file"
      multiple
      @change="processFile"
    >
    <div class="output">
      {{ output }}
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      output: ''
    }
  },
  methods: {
    processFile (e) {
      const file = e.target.files[0]
      const reader = new FileReader()
      reader.readAsText(file)
      reader.onload = (event) => {
        this.output = event.target.result
      }
    }
  }
}
</script>
<style lang="scss">
  .output {
    width: 100%;
    height: 600px;
    overflow: scroll;
    border: 1px dotted red;
  }
</style>
