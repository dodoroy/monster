<template>
  <div>
    drag event: e.dataTransfer
    <div class="img-wrapper"
      @dragenter="ignoreDrag"
      @dragover="ignoreDrag"
      @drop="handleDrop" :style="{'backgroundImage':background}">
      <div><span>Drop your image here!</span></div>
    </div>
     <!-- @dragstart="ignoreDrag"
    @dragend="ignoreDrag" -->
    <input type="file" @change="handleFileChange">
  </div>
</template>
<script>
export default {
  data() {
    return {
      background: '',
    };
  },
  methods: {
    ignoreDrag(e) {
      console.log(e.type);
      e.stopPropagation();
      e.preventDefault();
    },
    handleDrop(e) {
      e.stopPropagation();
      e.preventDefault();

      const data = e.dataTransfer;
      const { files } = data;
      this.processFile(files);
    },
    processFile(files) {
      const file = files[0];
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        this.background = `url(${event.target.result})`;
      };
    },
    handleFileChange(e) {
      const { files } = e.target;
      this.processFile(files);
    },
  },
};
</script>
<style lang="scss">
  .img-wrapper {
    position: relative;
    width: 300px;
    height: 300px;
    border-radius: 10px;
    border: 4px dashed pink;
    background-size: 100% auto;
    background-repeat: no-repeat;
    div {
      position: absolute;
      left: 0;
      top: 0;
      bottom: 0;
      right: 0;
      color: pink;
      font-size: 36px;
      font-weight: bold;
      text-align: center;
      padding-top: 30%;
    }
  }
</style>
