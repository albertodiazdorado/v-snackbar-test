import { mount } from "@vue/test-utils";
import Snackbar from "@/components/Snackbar.vue";

describe("Snackbar.vue", () => {
  it("renders props.msg when passed", () => {
    const msg = "new message";
    const wrapper = mount(Snackbar, {
      propsData: { msg }
    });
    expect(wrapper.text()).toMatch(msg);
  });
});
