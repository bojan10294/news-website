export default {
  storeNewsItem ({ commit }, payload) {
    commit('store_to_state', payload)
  },
  storeCategoryAndCountry ({ commit }, payload) {
    commit('store_category_and_country', payload)
  }
}
