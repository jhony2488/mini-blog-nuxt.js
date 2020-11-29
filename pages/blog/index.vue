 <template >
  <div class="container-posts-content">
    <transition>
      <BlogPosts />
    </transition>
  </div>
</template>
 
 <script>
import { BlogPosts } from '@/components/organisms'

export default {
  name: 'blog',
  layout: 'padronization',
  components: {
    BlogPosts
  }
}
</script>
<style lang="scss" scoped>
.container-posts-content {
  display: grid;
  grid-template-columns: auto;
  height: 80vh;
}
.page-enter-active,
.page-leave-active {
  transition: opacity 0.5s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
}
</style>