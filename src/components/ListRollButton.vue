<template lang="">
  <button class="roll-button">Roll from <slot></slot></button>
</template>
<script>
export default {
  props: [""],
};
</script>
<style>
.roll-button {
  margin: 5px 0;
  height: 50px;
  font-size: 120%;
}
</style>
