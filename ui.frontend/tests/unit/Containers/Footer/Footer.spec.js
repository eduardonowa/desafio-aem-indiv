import { shallowMount } from "@vue/test-utils";
import Footer from "@/components/containers/Footer/Footer.vue";

describe("Footer wrapper", () => {
  test("Have p tag", () => {
    const wrapper = shallowMount(Footer);
    const p = wrapper.find("p");
    expect(p.exists()).toBe(true);
  });

  test("Have a tag", () => {
    const wrapper = shallowMount(Footer);
    const a = wrapper.find("a");
    expect(a.exists()).toBe(true);
  })
});