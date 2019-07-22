export const actions = {
  setPage({ commit }, payload) {
    commit('SET_PAGE', {
      page: payload.page
    })
  },
  setLanguage({ commit }, payload) {
    commit('SET_LANGUAGE', {
      language: payload.language
    })
  }
}
