import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Onboarding states
    activeIndex: 0,
    Onboardingmax: 3,
  },
  mutations: {
    nextSlide(state, index) {
      // check for bulletpoints
      if (index) {
        return (state.activeIndex = index - 1);
      }
      if (state.activeIndex === state.Onboardingmax - 1) {
        return (state.activeIndex = 0);
      }
      return state.activeIndex++;
    },
  },
  actions: {},
  modules: {},
});
