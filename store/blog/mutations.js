export default {
  selectPost(state, slug) {
    console.log(slug)
    let post = state.posts.find(p => {
      return p.slug == slug
    })
    state.filteredPosts = post
  }
}
