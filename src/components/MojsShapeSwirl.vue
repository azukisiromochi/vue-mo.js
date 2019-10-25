<template>
  <div v-mojs-shape-swirl="options" />
</template>

<script>
import { MojsShapeSwirlDirective } from "@/directives/MojsShapeSwirlDirective.js";

export default {
  name: "MojsShapeSwirl",
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  directives: {
    MojsShapeSwirlDirective
  }
};
</script>
