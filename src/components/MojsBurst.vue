<template>
  <div v-mojs-burst="burstOptions"><slot /></div>
</template>

<script>
import { MojsBurstDirective } from "../directives/MojsBurstDirective.js";

export default {
  name: "MojsBurst",
  props: {
    burstOptions: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  directives: {
    MojsBurstDirective
  }
};
</script>
