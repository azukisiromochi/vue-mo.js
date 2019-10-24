import Vue from "vue";
import vuemo from "@/plugins/vuemo.js";

export const MojsBurstDirective = {
  bind: function(el, binding) {
    binding.value.parent = el;

    const burst = vuemo.Burst(binding.value);

    // burst.el.style.zIndex = 10;
    el.style.position = "relative";

    el.addEventListener("click", function(e) {
      const left = e.pageX - el.offsetLeft;
      const top = e.pageY - el.offsetTop;
      burst.tune({ left, top }).replay();
    });
  }
};

Vue.directive("mojs-burst", MojsBurstDirective);
