import Vue from "vue";
import vuemo from "@/plugins/vuemo.js";

export const MojsShapeDirective = {
  bind: function(el, binding) {
    binding.value.parent = el;

    const shape = vuemo.Shape(binding.value);
    shape.play();

    // TODO: いる？
    el.addEventListener("click", function() {
      shape.replay();
    });
  }
};

Vue.directive("mojs-shape", MojsShapeDirective);
