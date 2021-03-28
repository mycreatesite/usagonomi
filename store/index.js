export const state = () => ({
  login: false,
});

export const mutations = {
  login(state) {
    state.login = true
  },
  logout(state) {
    state.login = false
  }
}

export const getters = {
  getLogin (state) {
      return state.login
  }
}