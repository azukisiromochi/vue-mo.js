<template>
  <div v-mojs-shape-swirl:[arg]="options" />
</template>

<script>
export default {
  name: "MojsShapeSwirl",
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      }
    },
    isReplayWhenClicked: {
      type: Boolean,
      default: function() {
        return false;
      }
    }
  },
  data() {
    return {
      arg: this.isReplayWhenClicked ? "is-replay-when-clicked" : ""
    };
  }
};
</script>
