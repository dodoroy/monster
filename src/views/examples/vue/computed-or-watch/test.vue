<template>
  <div>
    <h1>
      computed propertiers vs watch
    </h1>
    <div></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      firstName: 'Effy',
      lastName: 'Yin'
    };
  },
  computed: {
    fullName: {
      get() {
        return `${this.firstName} ${this.lastName}`;
      },
      set() {
        const tmp = this.fullName.split(' ');
        this.firstName = tmp[0];
        this.lastName = tmp[1];
      }
    }
  }
};
</script>

<style></style>
