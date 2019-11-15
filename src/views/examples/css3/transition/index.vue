<template>
  <div>

    <img class="transform" src="./cat.jpg" alt="">


    <div class="fade">
      <div>
        <button @click="toNight()">Go to Night</button>
        <button @click="toDay()">Go to Day</button>
      </div>
      <img src="./day.png" alt="Daytime view">
      <img :class="isNight?'solid':'transparent'" src="./night.png" alt="Night-time "><br/>

    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {
      isNight: true,
    };
  },
  methods: {
    toNight() {
      this.isNight = true;
    },
    toDay() {
      this.isNight = false;
    },
  },
};
</script>
<style lang="scss" scoped>
img.transform {
  padding: 10px;
  border: 1px solid #000;
  transition: all .8s;
  &:hover {
    transform: rotate(10deg) scale(1.1);
  }
}

.fade {
  img {
    width: 800px;
    position: absolute;
    transition: opacity 6s;
  }

  .transparent {
    opacity: 0;
  }

  .solid {
    opacity: 1;
  }
}
</style>
