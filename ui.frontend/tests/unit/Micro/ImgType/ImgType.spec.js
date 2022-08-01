import { shallowMount } from "@vue/test-utils";
import ImgType from "@/components/micro/ImgType/ImgType.vue";

describe("ImgType wrapper", () => {
  test("Have img tag", () => {
    const wrapper = shallowMount(ImgType);
    const img = wrapper.find("img");
    expect(img.exists()).toBe(true);
  });
});
