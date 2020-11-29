export default {
  async actionPost({ commit }, { slug }) {
    commit('selectPost', slug)
  }
}
