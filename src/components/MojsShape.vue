<template>
  <div v-mojs-shape:[arg]="options" />
</template>

<script>
export default {
  name: "MojsShape",
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
