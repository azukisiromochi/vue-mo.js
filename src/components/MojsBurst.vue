<template>
  <div v-mojs-burst="options"><slot /></div>
</template>

<script>
export default {
  name: "MojsBurst",
  props: {
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  }
};
</script>
