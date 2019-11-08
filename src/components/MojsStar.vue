<template>
  <div v-mojs-star:[arg]="options" />
</template>

<script>
export default {
  name: "MojsStar",
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
