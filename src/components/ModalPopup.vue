<template lang="">
  <div class="modal-popup-backdrop">
    <div class="modal-popup">
      <div class="modal-popup__title">{{state.title}}</div>
      <div class="modal-popup__content">{{state.content}}</div>
      <div class="modal-popup__buttons">
        <button @click="close()">Close</button>
      </div>
    </div>
  </div>
</template>
<script>
import { popup_state } from '@/js/popup.js';
export default {
  data() {
    return {
      state: popup_state
    }
  },
  methods: {
    close() {
      popup_state.visible = false;
    }
  },
};
</script>
<style>
.modal-popup-backdrop {
  background-color: #575757d6;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  justify-content: center;
  padding-top: 10vh;
}

.modal-popup {
  background: #dfd9d2;
  width: 80vw;
  box-shadow: 0px 0px 6px #3a3a3a;
  border-radius: 3px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: min-content;
  max-height: 60vh;
}

.modal-popup__title {
  font-size: 120%;
  padding: 10px;
  border-bottom: 1px solid #7babd4;
  background-color: #b2d2ee;
}

.modal-popup__content {
  padding: 10px;
  flex: 1;
}

.modal-popup__buttons {
  display: flex;
  padding: 10px;
  justify-content: center;
}

button {
  height: 35px;
  padding: 0 10px;
  text-decoration: none;
  display: inline-block;
  border: none;
  border-radius: 2px;
  background-color: #868686;
  color: white;
  box-shadow: 0 0 3px #909090;
  min-width: 70px;
}
</style>
