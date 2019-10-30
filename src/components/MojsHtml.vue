<template>
  <div v-mojs-html="options" />
</template>

<script>
import { MojsHtmlDirective } from "@/directives/MojsHtmlDirective.js";

export default {
  name: "MojsHtml",
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  directives: {
    MojsHtmlDirective
  }
};
</script>
