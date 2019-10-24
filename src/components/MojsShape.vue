<template>
  <div v-mojs-shape="options" />
</template>

<script>
import { MojsShapeDirective } from "@/directives/MojsShapeDirective.js";

export default {
  name: "MojsShape",
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  directives: {
    MojsShapeDirective
  }
};
</script>
