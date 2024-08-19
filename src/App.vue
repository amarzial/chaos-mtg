<template>
  <h2 style="margin:5px 0;">Chaos MTG</h2>
  <ModalPopup v-if="isPopupVisible"></ModalPopup>
  <MainPage></MainPage>
</template>

<script>
import MainPage from "./pages/MainPage.vue";
import ModalPopup from "./components/ModalPopup.vue";
import { popup_state } from '@/js/popup.js';

export default {
  name: "App",
  components: {
    MainPage,
    ModalPopup
  },
  data() {
    return {
    }
  },
  computed: {
    isPopupVisible() {
      return popup_state.visible;
    }
  },
  methods: {
    test() {
    }
  },
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
  border: none;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-sizing: border-box;
}
</style>
