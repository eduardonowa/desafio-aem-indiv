import { shallowMount } from "@vue/test-utils";
import TextContent from "@/components/micro/TextContent/TextContent.vue";

describe("TextContent wrapper", () => {
  test("Have p tag", () => {
    const wrapper = shallowMount(TextContent);
    const p = wrapper.find("p");
    expect(p.exists()).toBe(true);
  });
});
