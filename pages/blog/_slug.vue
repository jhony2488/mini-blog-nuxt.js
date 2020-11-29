 <template>
  <div>
    <transition>
      <div class="container-post">
        <div class="container-post___container-image">
          <img
            :src="filterdPost.thumbnail"
            :alt="filterdPost.title"
            class="container-post__img"
          >
        </div>
        <h1 class="container-post__title-post"> {{ filterdPost.title }} </h1>
        <p class="container-post__content-post"> {{ filterdPost.content }} </p>
      </div>
    </transition>
  </div>
</template>
 
 <script>
import { mapGetters } from 'vuex'

export default {
  layout: 'padronization',
  validate({ params }) {
    return /^[a-z]/.test(params.id)
  },
  computed: {
    ...mapGetters({
      posts: 'blog/posts',
      filterdPost: 'blog/post'
    })
  },
  async fetch({ store, params }) {
    await store.dispatch('blog/actionPost', { slug: params.slug })
  }
}
</script>
 
 <style lang="scss" scoped>
.container-post {
  display: grid;
  grid-template-columns: repeat(autofit, 90%);
  grid-template-rows: 290px 100px auto;
  justify-items: center;
  width: 100%;
  min-height: 100vh;
  margin-top: 30px;
}
.container-post___container-image {
  display: grid;
  justify-items: center;
  align-items: center;
  width: 50%;
  height: 300px;
  justify-content: center;
}
.container-post__title-post {
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 50px;
  text-align: center;
  margin-top: -10px;
}

.container-post__img {
  width: 100%;
  height: 100%;
}
.container-post__content-post {
  max-width: 90%;
  margin-top: -6px;
  margin-bottom: 15px;
  width: 800px;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.9s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
@media (max-width: 800px) {
  .container-post {
    grid-template-columns: repeat(autofit, 90%);
    justify-content: center;
    align-content: center;
    align-items: center;
  }
}
</style>