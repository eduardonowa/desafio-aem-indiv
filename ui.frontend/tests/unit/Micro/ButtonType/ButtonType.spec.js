import { shallowMount } from "@vue/test-utils";
import ButtonType from "@/components/micro/ButtonType/ButtonType.vue";

describe("ButtonType wrapper", () => {
  test("Have Button tag", () => {
    const wrapper = shallowMount(ButtonType);
    const button = wrapper.find("button");
    expect(button.exists()).toBe(true);
  });
});
