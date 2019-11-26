<template>
  <div v-mojs-star-burst="options"><slot /></div>
</template>

<script>
export default {
  name: "MojsStarryNight",
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
