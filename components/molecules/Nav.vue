 <template>
  <div class="container-nav">
    <NavItem />
    <NavItem
      NavItemName="Blog"
      NavItemLink="/blog"
    />
    <NavItem
      NavItemName="Contato"
      NavItemLink="/contato"
    />
  </div>
</template>
 
 <script>
import { NavItem } from '@/components/atoms'

export default {
  name: 'Nav',
  components: {
    NavItem
  }
}
</script>
 
 <style lang="scss" scoped>
.container-nav {
  display: grid;
  grid-template-columns: repeat(auto-fit, 70px);
  align-content: center;
  justify-content: center;
}
</style>