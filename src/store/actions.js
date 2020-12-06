export default {
  storeNewsItem ({ commit }, payload) {
    commit("store_to_state", payload)
  }
}
