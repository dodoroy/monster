<template>
  <div>
    <h1>Modal Component</h1>
    <blockquote>
      Features used: component, event emit, content insertion (slot), transitions.
    </blockquote>

    <button @click="showModal = true">show modal</button>

    <common-modal v-show="showModal" @close="showModal = false">
      <template v-slot:footer>
        <div>I'm a not default footer</div>
      </template>
    </common-modal>
  </div>
</template>

<script>
import CommonModal from './common-modal';

export default {
  data() {
    return {
      showModal: false
    };
  },
  components: {
    CommonModal
  },
  methods: {}
};
</script>

<style lang="scss" scoped></style>
