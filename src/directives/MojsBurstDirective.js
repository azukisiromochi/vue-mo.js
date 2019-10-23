import Vue from "vue";
import mojs from "@mojs/core";

export const MojsBurstDirective = {
  bind: function(el, binding) {
    binding.value.parent = el;

    var burst = new mojs.Burst(binding.value);

    burst.el.style.zIndex = 10;
    el.style.position = "relative";

    el.addEventListener("click", function(e) {
      const left = e.pageX - el.offsetLeft;
      const top = e.pageY - el.offsetTop;
      burst.tune({ left, top }).replay();
    });
  }
};

Vue.directive("mojs-burst", MojsBurstDirective);
