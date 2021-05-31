import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // Register user
    user: {},

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

    // Step 1
    updateStateFirstName(state, value) {
      state.user.firstName = value;
    },

    updateStateSurName(state, value) {
      state.user.surName = value;
    },

    // Step 2
    updateStateBirthDate(state, value) {
      state.user.birthDate = value;
    },

    // Step 3
    updateStateTown(state, value) {
      state.user.town = value;
    },

    // Step 4
    updateStateGender(state, value) {
      state.user.gender = value;
    },

    // Step 5
    updateStateTypeIllness(state, value) {
      state.user.typeIllness = value;
    },

    // Step 6
    updateStateProfileAvatar(state, value) {
      state.user.profileAvatar = value;
    },

    // Step 7
    updateStateAbout(state, value) {
      console.log("yo");
      state.user.about = value;
    },

    // Step 8
    updateStateEmailAddress(state, value) {
      state.user.emailAddress = value;
    },

    // Step 9
    updateStatePassword(state, value) {
      state.user.password = value;
    },

    // store user data when logged in
    updateUser(state, value) {
      state.user = value;
    },
  },
  actions: {},
  modules: {},
});
