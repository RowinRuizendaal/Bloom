import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Register
    firstName: "",
    // Onboarding
    activeIndex: 0,
    Onboardingmax: 3,
  },
  mutations: {
    // Set state of the bullet points
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
    // set values of register user in state
    setFirstName(state, payload) {
      state.firstName = payload.firstName;
    },
  },
  actions: {},
  modules: {},
});
