import { shallowMount } from "@vue/test-utils";
import MojsBurst from "@/components/MojsBurst.vue";

describe("MojsBurst.vue", () => {
  it("renders props.burstOptionswhen passed", () => {
    const options = {
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
    };

    const wrapper = shallowMount(MojsBurst, {
      propsData: { options }
    });

    wrapper.trigger("click");
  });
});
