<template>
  <div class="demos">
    <h1>{{ msg }}</h1>
    <p>
      A small wrapper for integrating
      <a href="https://mojs.github.io/" target="_blank" rel="noopener">Mo.js</a>
      to Vue.js
    </p>
    <h3>🏹 Installation</h3>
    <p>
      Using npm:
    </p>
    <pre>$ npm i vue-mo.js</pre>
    <p>
      Using yarn:
    </p>
    <pre>$ yarn add vue-mo.js</pre>
    <h3>🔫 Usage</h3>
    <p>
      Using Vue.js:
    </p>
    <pre>
import Vuemo from 'vue-mo.js';
Vue.use(Vuemo);</pre
    >
    <h3>🧹 Documentation</h3>
    <h5>Html</h5>
    <p>
      hoge hoge hoge
    </p>
    <div class="play-ground">
      <mojs-html
        class="mojs-html"
        :options="htmlOptions"
        :is-replay-when-clicked="true"
      />
    </div>
    <h5>Burst</h5>
    <p>
      hoge hoge hoge
    </p>
    <div
      ref="burstParent"
      class="play-ground burst-parent"
      v-on:click="explosion"
    >
      <p>
        Click! Click!! Click!!!
      </p>
    </div>
    <h5>Shape</h5>
    <p>
      hoge hoge hoge
    </p>
    <div class="play-ground">
      <mojs-shape :options="zigzagOptions" />
      <mojs-shape :options="curveOptions" />
      <mojs-shape :options="crossOptions" />
    </div>
    <h5>ShapeSwirl</h5>
    <p>
      hoge hoge hoge
    </p>
    <div class="play-ground">
      <mojs-shape-swirl :options="shapeSwirlOptions" />
    </div>
    <h5>Timeline</h5>
    <p>
      hoge hoge hoge
    </p>
    <div ref="timelineParent" class="play-ground"></div>
  </div>
</template>

<script>
import MojsHtml from "@/components/MojsHtml.vue";
import MojsShape from "@/components/MojsShape.vue";
import MojsShapeSwirl from "@/components/MojsShapeSwirl.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      htmlOptions: {
        x: {
          240: 720,
          duration: 1000,
          easing: "cubic.in"
        },
        y: 100,
        angleZ: {
          0: 360,
          duration: 1000,
          delay: 1000
        }
      },
      zigzagOptions: {
        shape: "zigzag",
        points: 11,
        radius: 25,
        radiusY: 50,
        left: "25%",
        fill: "none",
        stroke: "#11CDC5"
      },
      curveOptions: {
        shape: "curve",
        points: 11,
        radius: 25,
        radiusY: 50,
        left: "50%",
        fill: "none",
        stroke: "#FC2D79"
      },
      crossOptions: {
        shape: "cross",
        points: 11,
        radius: 25,
        radiusX: 50,
        left: "75%",
        fill: "none",
        stroke: "#F9DD5E",
        y: -25
      },
      shapeSwirlOptions: {
        x: { 0: 200 },
        duration: 2000,
        repeat: 999
      },
      burst1: null,
      burst2: null,
      circle1: null,
      circle2: null
    };
  },
  mounted() {
    // Burst Demos
    const COLORS = {
      RED: "#FD5061",
      YELLOW: "#FFCEA5",
      BLACK: "#29363B",
      VINOUS: "#A50710"
    };

    this.burst1 = this.$vuemo.Burst({
      parent: this.$refs.burstParent,
      left: 0,
      top: 0,
      count: 5,
      radius: { 50: 250 },
      children: {
        fill: "white",
        shape: "line",
        stroke: [COLORS.BLACK, COLORS.VINOUS],
        strokeWidth: 12,
        radius: "rand(30, 60)",
        radiusY: 0,
        scale: { 1: 0 },
        pathScale: "rand(.5, 1)",
        degreeShift: "rand(-360, 360)",
        isForce3d: true
      }
    });

    this.burst2 = this.$vuemo.Burst({
      parent: this.$refs.burstParent,
      top: 0,
      left: 0,
      count: 3,
      radius: { 0: 250 },
      children: {
        shape: ["circle", "rect"],
        points: 5,
        fill: [COLORS.BLACK, COLORS.VINOUS],
        radius: "rand(30, 60)",
        scale: { 1: 0 },
        pathScale: "rand(.5, 1)",
        isForce3d: true
      }
    });

    const CIRCLE_OPTS = {
      left: 0,
      top: 0,
      fill: COLORS.BLACK,
      scale: { 0.2: 1 },
      opacity: { 1: 0 },
      isForce3d: true,
      isShowEnd: false
    };

    this.circle1 = this.$vuemo.Shape({
      parent: this.$refs.burstParent,
      ...CIRCLE_OPTS,
      radius: 200
    });

    this.circle2 = this.$vuemo.Shape({
      parent: this.$refs.burstParent,
      ...CIRCLE_OPTS,
      radius: 240,
      easing: "cubic.out",
      delay: 150
    });

    // Timeline Demo
    const circle = this.$vuemo.Shape({
      parent: this.$refs.timelineParent,
      shape: "circle",
      scale: { 0: 1 },
      left: "25%",
      fill: { cyan: "yellow" },
      radius: 25,

      duration: 2000
    });

    const rect = this.$vuemo.Shape({
      parent: this.$refs.timelineParent,
      shape: "rect",
      left: "50%",
      fill: "none",
      radius: 20,
      stroke: { "rgba(0,255,255, 1)": "magenta" },
      strokeWidth: { 10: 0 },
      strokeDasharray: "100%",
      strokeDashoffset: { "-100%": "100%" },
      angle: { 0: 180 },

      duration: 2000
    });

    const polygon = this.$vuemo.Shape({
      parent: this.$refs.timelineParent,
      shape: "polygon",
      points: 5,
      left: "75%",
      fill: { deeppink: "#00F87F" },
      x: { "rand(-100%, -200%)": 0 },
      angle: { 0: "rand(0, 360)" },
      radius: 25,

      duration: 2000
    });

    this.$vuemo
      .Timeline({
        delay: 1000,
        repeat: 999
      })
      .add(circle)
      .append(rect)
      .append(polygon)
      .play();
  },
  methods: {
    explosion: function(e) {
      const left = e.pageX - this.$refs.burstParent.offsetLeft;
      const top = e.pageY - this.$refs.burstParent.offsetTop;
      this.burst1
        .tune({ left, top })
        .generate()
        .replay();

      this.burst2
        .tune({ left, top })
        .generate()
        .replay();

      this.circle1.tune({ left, top }).replay();

      this.circle2.tune({ left, top }).replay();
    }
  },
  components: {
    MojsHtml,
    MojsShape,
    MojsShapeSwirl
  }
};
</script>

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

pre {
  display: block;
  text-align: left;
  margin: 20px auto;
  padding: 20px;
  padding-left: 80px;
  width: 720px;
  background: #2b062a;
  color: #f8f8f8;
  border-radius: 6px;
  filter: drop-shadow(5px 5px 10px #666);
}

.play-ground {
  position: relative;
  margin: auto;
  margin-bottom: 40px;
  width: 960px;
  height: 300px;
  background: #f8f8f8;
  border-radius: 6px;
  filter: drop-shadow(5px 5px 10px #666);
}

.mojs-html {
  cursor: pointer;
  position: absolute;
  width: 100px;
  height: 100px;
  background: #572b53;
}

.burst-parent {
  z-index: 20;
  cursor: pointer;
}
</style>
