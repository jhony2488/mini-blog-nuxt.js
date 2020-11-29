 <template>
  <div class="container-post">
    <div class="container-post___container-image">
      <img
        :src="ImagePost"
        :alt="TitleBlog"
      >
    </div>
    <h1 class="container-post__title-post">
      <nuxt-link
        :to="LinkPost"
        class="container-post__link"
      > {{ TitleBlog }}
      </nuxt-link>
    </h1>
    <p class="container-post__content-post"> {{ Content }} </p>
  </div>
</template>
 
 <script>
export default {
  name: 'PostBlog',
  props: {
    TitleBlog: {
      type: String,
      default: 'Title'
    },
    Content: {
      type: String,
      default: 'lorem ipsum'
    },
    LinkPost: {
      type: String,
      default: '/'
    },
    ImagePost: {
      type: String,
      default: 'imagem post'
    }
  }
}
</script>
 
<style lang="scss" scoped>
$border: 1px solid black;
.container-post {
  display: grid;
  grid-template-columns: repeat(autofit, 300px);
  grid-template-rows: 130px 50px auto;
  justify-items: center;
  border: $border;
  width: 200px;
}
.container-post___container-image {
  display: grid;
  justify-items: center;
  align-items: center;
  border: $border;
  width: 90%;
  height: 120px;
}
.container-post__title-post {
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 20px;
  text-align: center;
  margin-top: -10px;
}
.container-post__link {
  text-decoration: none;
  color: blueviolet;
  &:hover,
  &active {
    color: violet;
  }
}

img {
  max-width: 180px;
  height: 115px;
}
.container-post__content-post {
  max-width: 90%;
  margin-top: -6px;
  margin-bottom: 15px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
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