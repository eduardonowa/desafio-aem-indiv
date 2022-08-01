import { mount } from "@vue/test-utils";
import Main from '@/components/containers/Main/Main.vue'
import TextContent from "@/components/micro/TextContent/TextContent.vue";
import Title from "@/components/micro/Title/Title.vue";
import ImgType from "@/components/micro/ImgType/ImgType.vue";
import ButtonType from "@/components/micro/ButtonType/ButtonType.vue";

//same test for basic, social, certificates and success
describe("Header wrapper", () => {
  const wrapper = mount(Main);
  test("Have TextContent component", () => {
    expect(wrapper.findComponent(TextContent).exists()).toBe(true);
  });

  test("Have Title component", () => {
    expect(wrapper.findComponent(Title).exists()).toBe(true);
  });

  test("Have ImgType component", () => {
    expect(wrapper.findComponent(ImgType).exists()).toBe(true);
  });

  test("Have ButtonType component", () => {
    expect(wrapper.findComponent(ButtonType).exists()).toBe(true);
  });
});
