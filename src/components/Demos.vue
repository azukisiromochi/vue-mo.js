<template>
  <div class="demos">
    <h1>✨ vue-mo.js ✨</h1>
    <p>
      A small wrapper for integrating
      <a href="https://mojs.github.io/" target="_blank" rel="noopener">Mo.js</a>
      to Vue.js
    </p>
    <h3>🏹 Installation</h3>
    <p>
      Using npm:
    </p>
    <pre>$ npm i @azukisiromochi/vue-mo.js</pre>
    <p>
      Using yarn:
    </p>
    <pre>$ yarn add @azukisiromochi/vue-mo.js</pre>
    <h3>🔫 Usage</h3>
    <p>
      Using Vue.js:
    </p>
    <pre>
import Vuemo from '@azukisiromochi/vue-mo.js'
Vue.use(Vuemo)</pre
    >
    <h3>🧹 Documentation</h3>

    <h4>⭐ Html</h4>
    <h5>🔖 References</h5>
    <p>
      Read Mo.js's
      <a href="https://mojs.github.io/api/html/" target="_blank" rel="noopener"
        >Html References</a
      >
    </p>
    <h5>🔖 Demos</h5>
    <div class="play-ground">
      <mojs-html
        class="mojs-html"
        :options="htmlOptions"
        :is-replay-when-clicked="true"
      ></mojs-html>
    </div>
    <h5>🔖 Tutorials</h5>
    <strong>Using vue-mo.js source code for smaller bundles 🚅</strong>
    <p>Template:</p>
    <pre>
&lt;div ref="vuemoElement" v-on:click="replay" class="any-style" /&gt;</pre
    >
    <p>Script:</p>
    <pre>
export default {
  data() {
    return {
      html: null
    }
  },
  mounted() {
    this.html = this.$vuemo.Html({
      el: this.$refs.vuemoElement,
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
    })
  },
  methods: {
    replay: function() {
      this.html.replay()
    }
  }
}</pre
    >
    <strong>Using custom components 🚅</strong>
    <p>Template:</p>
    <pre>
&lt;mojs-html
  :options="htmlOptions"
  :is-replay-when-clicked="true"
  class="any-style" /&gt;</pre
    >
    <p>Script:</p>
    <pre>
import { MojsHtml } from "@azukisiromochi/vue-mo.js"
export default {
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
      }
    }
  },
  components: {
    MojsHtml
  }
}</pre
    >
    <strong>Using custom directives 🚅</strong>
    <p>Template:</p>
    <pre>&lt;div v-mojs-html:[arg]="htmlOptions" class="any-style" /&gt;</pre>
    <p>Script:</p>
    <pre>
export default {
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
      arg: 'is-replay-when-clicked'
    }
  }
}</pre
    >

    <h4>⭐ Burst</h4>
    <h5>🔖 References</h5>
    <p>
      Read Mo.js's
      <a href="https://mojs.github.io/api/burst/" target="_blank" rel="noopener"
        >Burst References</a
      >
    </p>
    <h5>🔖 Demos</h5>
    <div
      ref="burstParent"
      class="play-ground burst-parent"
      v-on:click="explosion"
    >
      <p>
        エクスプロージョン！！
      </p>
    </div>
    <h5>🔖 Tutorials</h5>
    <strong>Using vue-mo.js source code for smaller bundles 🚅</strong>
    <p>Template:</p>
    <pre>
&lt;div ref="vuemoElement" v-on:click="replay" class="any-style" /&gt;</pre
    >
    <p>Script:</p>
    <pre>
export default {
  data() {
    return {
      burst: null
    }
  },
  mounted() {
    this.burst = this.$vuemo.Burst({
      parent: this.$refs.vuemoElement,
      radius: { 25: 75 },
      count: 10,
      duration: 2000,
      children: {
        shape: ["circle", "polygon"],
        fill: ["#11CDC5", "#FC2D79", "#F9DD5E"],
        angle: { 0: 180 },
        degreeShift: "rand(-360, 360)",
        delay: "stagger(0, 25)"
      }
    })
  },
  methods: {
    replay: function() {
      this.burst.replay()
    }
  }
}</pre
    >
    <strong>Using custom components 🚅</strong>
    <p>Template:</p>
    <pre>
&lt;mojs-burst
  :options="burstOptions"
  :is-replay-when-clicked="true"
  class="any-style" /&gt;</pre
    >
    <p>Script:</p>
    <pre>
import { MojsBurst } from "@azukisiromochi/vue-mo.js"
export default {
  data() {
    return {
      burstOptions: {
        radius: { 25: 75 },
        count: 10,
        duration: 2000,
        children: {
          shape: ["circle", "polygon"],
          fill: ["#11CDC5", "#FC2D79", "#F9DD5E"],
          angle: { 0: 180 },
          degreeShift: "rand(-360, 360)",
          delay: "stagger(0, 25)"
        }
      }
    }
  },
  components: {
    MojsBurst
  }
}</pre
    >
    <strong>Using custom directives 🚅</strong>
    <p>Template:</p>
    <pre>&lt;div v-mojs-burst:[arg]="burstOptions" class="any-style" /&gt;</pre>
    <p>Script:</p>
    <pre>
export default {
  data() {
    return {
      burstOptions: {
        radius: { 25: 75 },
        count: 10,
        duration: 2000,
        children: {
          shape: ["circle", "polygon"],
          fill: ["#11CDC5", "#FC2D79", "#F9DD5E"],
          angle: { 0: 180 },
          degreeShift: "rand(-360, 360)",
          delay: "stagger(0, 25)"
        }
      },
      arg: 'is-replay-when-clicked'
    }
  }
}</pre
    >

    <h4>⭐ Shape</h4>
    <h5>🔖 References</h5>
    <p>
      Read Mo.js's
      <a href="https://mojs.github.io/api/shape/" target="_blank" rel="noopener"
        >Shape References</a
      >
    </p>
    <h5>🔖 Demos</h5>
    <div class="play-ground">
      <mojs-shape :options="zigzagOptions" />
      <mojs-shape :options="curveOptions" />
      <mojs-shape :options="crossOptions" />
    </div>
    <h5>🔖 Tutorials</h5>
    <strong>Using vue-mo.js source code for smaller bundles 🚅</strong>
    <p>Template:</p>
    <pre>
&lt;div ref="vuemoElement" v-on:click="replay" class="any-style" /&gt;</pre
    >
    <p>Script:</p>
    <pre>
export default {
  data() {
    return {
      shape: null
    }
  },
  mounted() {
    this.shape = this.$vuemo.Shape({
      parent: this.$refs.vuemoElement,
      shape: "circle",
      scale: { 0: 1 },
      left: "25%",
      fill: { cyan: "yellow" },
      radius: 25,

      duration: 2000
    })
  },
  methods: {
    replay: function() {
      this.shape.replay()
    }
  }
}</pre
    >
    <strong>Using custom components 🚅</strong>
    <p>Template:</p>
    <pre>
&lt;mojs-shape
  :options="shapeOptions"
  :is-replay-when-clicked="true"
  class="any-style" /&gt;</pre
    >
    <p>Script:</p>
    <pre>
import { MojsShape } from "@azukisiromochi/vue-mo.js"
export default {
  data() {
    return {
      shapeOptions: {
        shape: "circle",
        scale: { 0: 1 },
        left: "25%",
        fill: { cyan: "yellow" },
        radius: 25,

        duration: 2000
      }
    }
  },
  components: {
    MojsShape
  }
}</pre
    >
    <strong>Using custom directives 🚅</strong>
    <p>Template:</p>
    <pre>&lt;div v-mojs-shape:[arg]="shapeOptions" class="any-style" /&gt;</pre>
    <p>Script:</p>
    <pre>
export default {
  data() {
    return {
      shapeOptions: {
      shape: "circle",
      scale: { 0: 1 },
      left: "25%",
      fill: { cyan: "yellow" },
      radius: 25,

      duration: 2000
    },
      arg: 'is-replay-when-clicked'
    }
  }
}</pre
    >

    <h4>⭐ ShapeSwirl</h4>
    <h5>🔖 References</h5>
    <p>
      Read Mo.js's
      <a
        href="https://mojs.github.io/api/shape-swirl/"
        target="_blank"
        rel="noopener"
        >ShapeSwirl References</a
      >
    </p>
    <h5>🔖 Demos</h5>
    <div class="play-ground">
      <mojs-shape-swirl :options="shapeSwirlOptions" />
    </div>
    <h5>🔖 Tutorials</h5>
    <strong>Using vue-mo.js source code for smaller bundles 🚅</strong>
    <p>Template:</p>
    <pre>
&lt;div ref="vuemoElement" v-on:click="replay" class="any-style" /&gt;</pre
    >
    <p>Script:</p>
    <pre>
export default {
  data() {
    return {
      shapeSwirl: null
    }
  },
  mounted() {
    this.shapeSwirl = this.$vuemo.ShapeSwirl({
      parent: this.$refs.vuemoElement,
      x: { 0: 200 },
      duration: 2000
    })
  },
  methods: {
    replay: function() {
      this.shapeSwirl.replay()
    }
  }
}</pre
    >
    <strong>Using custom components 🚅</strong>
    <p>Template:</p>
    <pre>
&lt;mojs-shape-swirl
  :options="shapeSwirlOptions"
  :is-replay-when-clicked="true"
  class="any-style" /&gt;</pre
    >
    <p>Script:</p>
    <pre>
import { MojsShapeSwirl } from "@azukisiromochi/vue-mo.js"
export default {
  data() {
    return {
      shapeSwirlOptions: {
        x: { 0: 200 },
        duration: 2000
      }
    }
  },
  components: {
    MojsShapeSwirl
  }
}</pre
    >
    <strong>Using custom directives 🚅</strong>
    <p>Template:</p>
    <pre>&lt;div v-mojs-shape-swirl:[arg]="shapeSwirlOptions" class="any-style" /&gt;</pre>
    <p>Script:</p>
    <pre>
export default {
  data() {
    return {
      shapeSwirlOptions: {
        x: { 0: 200 },
        duration: 2000
      },
      arg: 'is-replay-when-clicked'
    }
  }
}</pre
    >

    <h4>⭐ Timeline</h4>
    <h5>🔖 References</h5>
    <p>
      Read Mo.js's
      <a
        href="https://mojs.github.io/api/tweens/timeline.html"
        target="_blank"
        rel="noopener"
        >Timeline References</a
      >
    </p>
    <h5>🔖 Demos</h5>
    <div ref="timelineParent" class="play-ground"></div>
    <h5>🔖 Tutorials</h5>
    <strong>Using vue-mo.js source code for smaller bundles 🚅</strong>
    <p>Template:</p>
    <pre>&lt;div ref="timelineParent" class="any-style" /&gt;</pre>
    <p>Script:</p>
    <pre>
export default {
  mounted() {
    const circle = this.$vuemo.Shape({
      parent: this.$refs.timelineParent,
      shape: "circle",
      scale: { 0: 1 },
      left: "25%",
      fill: { cyan: "yellow" },
      radius: 25,

      duration: 2000
    })

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
    })

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
    })

    this.$vuemo
      .Timeline({
        delay: 1000,
        repeat: 999
      })
      .add(circle)
      .append(rect)
      .append(polygon)
      .play()
  }
}</pre
    >

    <h4>⭐ Star</h4>
    <h5>🔖 References</h5>
    <p>
      Created a Vue component based on the Mo.js's <a href="https://codepen.io/sol0mka/full/wWdRLk/" target="_blank" rel="noopener">CodePen example</a>.
    </p>
    <p>
      By adding the vue directive `<i>v-mods-starburst</i>`, you can easily add star animation to clickable elements in your Vue.js application.
    </p>
    <mojs-starry-night
      class="play-ground starry-night-parent"
    ></mojs-starry-night>
    <h5>🔖 Tutorials</h5>
    <strong>Using vue-mo.js source code for smaller bundles 🚅</strong>
    <p>Template:</p>
    <pre>&lt;div ref="starParent" class="any-style" /&gt;</pre>
    <p>Script:</p>
    <pre>
export default {
  mounted() {
    this.$vuemo.Star({
      parent: this.$refs.starParent
    })
    .play()
  }
}</pre
    >
    <strong>Using custom directives 🚅</strong>
    <p>Template:</p>
    <pre>
&lt;button
  type=button
  v-mojs-star-burst="{ burstShape: 'star' }"
  class="any-style" &gt;
  ⭐Star Burst⭐
&lt;/button&gt;</pre
    >
  </div>
</template>

<script>
import { MojsHtml, MojsShape, MojsShapeSwirl, MojsStarryNight } from "@/plugins/vuemo.js";

export default {
  name: "Demos",
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
    MojsShapeSwirl,
    MojsStarryNight
  }
};
</script>

<style scoped>
h3 {
  margin: 100px 0 0;
}

strong {
  border-bottom: solid 3px #f64040;
}

a {
  color: #42b983;
}

pre {
  display: block;
  text-align: left;
  margin: 20px auto;
  padding: 20px;
  padding-left: 60px;
  width: 720px;
  background: #2b062a;
  color: #f64040;
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace;
  font-size: 0.7em;
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
  background: #41b883;
}

.burst-parent {
  z-index: 20;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}

.starry-night-parent {
  z-index: 20;
  cursor: pointer;
}
</style>
