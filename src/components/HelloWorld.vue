<template>
  <mojs-burst :options="burstOptions" class="hello">
    <mojs-shape :options="shapeOptions" />
    <mojs-shape-swirl :options="shapeSwirlOptions" />
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br />
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener"
        >vue-cli documentation</a
      >.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel"
          target="_blank"
          rel="noopener"
          >babel</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint"
          target="_blank"
          rel="noopener"
          >eslint</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-unit-jest"
          target="_blank"
          rel="noopener"
          >unit-jest</a
        >
      </li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li>
        <a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a>
      </li>
      <li>
        <a href="https://forum.vuejs.org" target="_blank" rel="noopener"
          >Forum</a
        >
      </li>
      <li>
        <a href="https://chat.vuejs.org" target="_blank" rel="noopener"
          >Community Chat</a
        >
      </li>
      <li>
        <a href="https://twitter.com/vuejs" target="_blank" rel="noopener"
          >Twitter</a
        >
      </li>
      <li>
        <a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a>
      </li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li>
        <a href="https://router.vuejs.org" target="_blank" rel="noopener"
          >vue-router</a
        >
      </li>
      <li>
        <a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/vue-devtools#vue-devtools"
          target="_blank"
          rel="noopener"
          >vue-devtools</a
        >
      </li>
      <li>
        <a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener"
          >vue-loader</a
        >
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
          rel="noopener"
          >awesome-vue</a
        >
      </li>
    </ul>
  </mojs-burst>
</template>

<script>
import MojsBurst from "@/components/MojsBurst.vue";
import MojsShape from "@/components/MojsShape.vue";
import MojsShapeSwirl from "@/components/MojsShapeSwirl.vue";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      burstOptions: {
        radius: { 25: 75 },
        count: 10,
        duration: 2000,
        children: {
          // property map - maps over children with mod function
          shape: ["circle", "polygon"],
          // property map - maps over children with mod function
          fill: ["#333", "magenta", "purple"],
          angle: { 0: 180 },
          // rand string - generates random value for every child rand( min, max )
          degreeShift: "rand(-360, 360)",
          // stagger string( start, step ) for every child
          delay: "stagger(0, 25)"
        }
      },
      shapeOptions: {
        shape: "zigzag",
        points: 11,
        radius: 25,
        radiusY: 50,
        left: "25%",
        fill: "none",
        stroke: "deeppink"
      },
      shapeSwirlOptions: {
        x:        { 0: 200 },
        duration: 2000,
        repeat: 100
      }
    };
  },
  components: {
    MojsBurst,
    MojsShape,
    MojsShapeSwirl
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
</style>
