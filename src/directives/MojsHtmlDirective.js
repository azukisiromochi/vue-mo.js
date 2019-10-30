import Vue from "vue";
import vuemo from "@/plugins/vuemo.js";

export const MojsHtmlDirective = {
  bind: function(el, binding) {
    binding.value.el = el;

    const html = vuemo.Html(binding.value);
    html.play();

    // TODO: いる？
    el.addEventListener("click", function() {
      html.replay();
    });
  }
};

Vue.directive("mojs-html", MojsHtmlDirective);
