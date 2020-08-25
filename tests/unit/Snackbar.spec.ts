import { mount } from "@vue/test-utils";
import Snackbar from "@/components/Snackbar.vue";
import Vue from "vue";
import Vuetify from "vuetify";

Vue.use(Vuetify);

describe("Snackbar.vue", () => {
  it("renders", () => {
    const text = "new message";
    const wrapper = mount(Snackbar, {
      propsData: { text }
    });
    expect(wrapper.text()).toMatch(text);
  });
});
