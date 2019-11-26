<template>
  <mojs-burst id="app" :options="burstOptions">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <Demos />
    </div>
  </mojs-burst>
</template>

<script>
import Demos from "./components/Demos.vue";
import MojsBurst from "@/components/MojsBurst.vue";

export default {
  name: "app",
  components: {
    Demos,
    MojsBurst
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
          fill: ["#11CDC5", "#FC2D79", "#F9DD5E"],
          angle: { 0: 180 },
          // rand string - generates random value for every child rand( min, max )
          degreeShift: "rand(-360, 360)",
          // stagger string( start, step ) for every child
          delay: "stagger(0, 25)"
        }
      }
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Fredoka+One|Sanchez&display=swap");

#app {
  font-family: "Sanchez", serif;
  text-align: center;
  color: #2c3e50;
  font-size: 1.5em;
}

.container {
  text-align: left;
  max-width: 40em;
  margin: 0 auto;
  padding: 0 4%;
}

.logo {
  margin-top: 60px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: "Fredoka One", cursive;
}

h1,
h2,
h3,
h4 {
  text-align: center;
}

h4 {
  margin-top: 60px;
}
</style>
