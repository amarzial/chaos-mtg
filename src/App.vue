<template>
  <h2>Chaos MTG</h2>
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
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
</style>
