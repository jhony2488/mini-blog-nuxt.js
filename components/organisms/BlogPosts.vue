 <template >
  <div class="container-posts">
    <div
      v-for="post in posts"
      :key="post.id"
      class="container-posts__posts"
    >
      <PostBlog
        :ImagePost="post.thumbnail"
        :TitleBlog="post.title"
        :Content="post.content"
        :LinkPost="'blog/' +post.slug"
      />
    </div>
  </div>
</template>
 
 <script>
import { PostBlog } from '@/components/molecules'
import { mapGetters } from 'vuex'

export default {
  components: {
    PostBlog
  },
  computed: mapGetters({
    posts: 'blog/posts'
  })
}
</script>
<style lang="scss" scoped>
.container-posts {
  display: grid;
  grid-template-columns: repeat(4, 250px);
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 100%;
  min-height: 60vh;
}
@media(max-width: 800px){
 .container-posts {
  grid-template-columns: repeat(1, 250px);
  justify-items: center;
  margin-top:330px;
  grid-row-gap: 20px;
}   
}

</style>