<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper">
        <div class="modal-container">
          <div class="modal-header">
            <slot name="header">
              default header
            </slot>
          </div>
          <div class="modal-body">
            <slot name="content">
              default body
            </slot>
          </div>
          <div class="modal-footer">
            <slot name="footer">
              default footer
            </slot>
            <button @click="$emit('close')">
              close
            </button>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.modal-mask {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.5);
  transition: opacity 0.3s ease;
}
.modal-wrapper {
  width: 400px;
  height: 200px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 999;
  overflow: visible; /* 为了内部的 container scale 1.1，即放大时可见 */
}
.modal-container {
  padding: 20px 30px;
  background: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease; /* scale 加在内部的 container 上 */
  .modal-header {
    color: #f66;
    font-weight: bold;
  }
  .modal-body {
    margin: 20px 0;
  }
  .modal-footer {
    button {
      float: right;
    }
  }
}
/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-to .modal-container {
  transform: scale(1.1);
}
</style>
