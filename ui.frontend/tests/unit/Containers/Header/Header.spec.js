import { shallowMount } from "@vue/test-utils";
import Header from "@/components/containers/Header/Header.vue";

describe("Header wrapper", () => {
  test("Have header tag", () => {
    const wrapper = shallowMount(Header);
    const header = wrapper.find("header");
    expect(header.exists()).toBe(true);
  });
});