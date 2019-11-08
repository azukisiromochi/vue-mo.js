<template>
  <div ref="parent" v-on:click="twinkle"><slot /></div>
</template>

<script>
export default {
  name: "MojsStarryNight",
  props: {
    // TODO: 消すかも？
    options: {
      type: Object,
      default: function() {
        return {};
      }
    }
  },
  data() {
    return {
      star: null,
      circle: null,
      burst: null,
      timeline: null
    };
  },
  mounted() {
    const RADIUS = 28;

    this.options.parent = this.$refs.parent;

    this.star = this.$vuemo.Star(this.options);

    this.circle = this.$vuemo.Shape({
      parent: this.$refs.parent,
      left: 0,
      top: 0,
      stroke: "#FF9C00",
      strokeWidth: { [2 * RADIUS]: 0 },
      fill: "none",
      scale: { 0: 1, easing: "quad.out" },
      radius: RADIUS,
      duration: 450
    });

    this.burst = this.$vuemo.Burst({
      parent: this.$refs.parent,
      left: 0,
      top: 0,
      radius: { 6: RADIUS - 7 },
      angle: 45,
      children: {
        shape: "line",
        radius: RADIUS / 7.3,
        scale: 1,
        stroke: "#FD7932",
        strokeDasharray: "100%",
        strokeDashoffset: { "-100%": "100%" },
        degreeShift: "stagger(0,-5)",
        duration: 700,
        delay: 200,
        easing: "quad.out"
      }
    });

    this.timeline = this.$vuemo.Timeline({ speed: 1.5 });
    this.timeline.add(this.burst, this.circle, this.star);
  },
  methods: {
    twinkle: function(e) {
      const left = e.pageX - this.$refs.parent.offsetLeft;
      const top = e.pageY - this.$refs.parent.offsetTop;
      const coords = { left, top };

      this.burst.tune(coords);
      this.circle.tune(coords);
      this.star.tune(coords);
      this.timeline.replay();
    }
  }
};
</script>
