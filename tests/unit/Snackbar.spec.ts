import { mount, createLocalVue } from "@vue/test-utils";
import Snackbar from "@/components/Snackbar.vue";
import Vue from "vue";
import VuetifyDefault, { Vuetify } from "vuetify";

Vue.use(VuetifyDefault);

const localVue = createLocalVue()

describe("Snackbar.vue", () => {
  let vuetify: Vuetify;

  beforeEach(() => {
    vuetify = new VuetifyDefault()
  })

  it("renders", () => {
    const text = "new message";
    const wrapper = mount(Snackbar, {
      localVue,
      vuetify,
      propsData: { text }
    });
    expect(wrapper.text()).toMatch(text);
  });
});
