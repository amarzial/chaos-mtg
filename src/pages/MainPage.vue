<template>
  <div class="roll-button-container">
    <ListRollButton v-for="l of lists" v-bind:key="l.name" @click="roll(l.name)">{{ l.name }}</ListRollButton>
  </div>
  <RollHistory></RollHistory>
</template>

<script>
import * as chaos from "../js/chaos.js";
import ListRollButton from "../components/ListRollButton.vue";
import RollHistory from "@/components/RollHistory.vue";
// import { showPopup } from "@/js/popup.js";
export default {
  components: { ListRollButton, RollHistory },
  data() {
    return {
      lists: chaos.getLists(),
    };
  },
  methods: {
    roll(name) {
      let result = chaos.roll(name);
      console.log(result);
      // showPopup(result.desc, result.name);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.roll-button-container {
  display: flex;
  flex-direction: column;
}
</style>
