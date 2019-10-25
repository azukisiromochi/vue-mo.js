import Vue from "vue";
import vuemo from "@/plugins/vuemo.js";

export const MojsShapeSwirlDirective = {
  bind: function(el, binding) {
    binding.value.parent = el;

    const shapeSwirl = vuemo.ShapeSwirl(binding.value);
    shapeSwirl.play();

    // TODO: いる？
    el.addEventListener("click", function() {
      shapeSwirl.replay();
    });
  }
};

Vue.directive("mojs-shape-swirl", MojsShapeSwirlDirective);
