export default {
  store_to_state (state, payload) {
    state.currentNewsItem = payload
  },
  store_category_and_country (state, payload) {
    state.currentCategoryAndCountry = payload
  }

}
