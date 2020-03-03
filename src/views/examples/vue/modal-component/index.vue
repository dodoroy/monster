<template>
  <div>
    <h1>Modal Component</h1>
    <blockquote>
      Features used: component, prop passing, content insertion, transitions.
    </blockquote>

    <button @click="showModal = true">
      show modal
    </button>

    <common-modal
      v-show="showModal"
      @close="showModal = false"
    >
      <template v-slot:footer>
        I'm a not default footer
      </template>
    </common-modal>
  </div>
</template>

<script>
import CommonModal from './common-modal'

export default {
  components: {
    CommonModal
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped></style>
