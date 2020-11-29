 <template>
  <div>
    <nuxt-link
      class="nav-item"
      :to="NavItemLink"
    > {{ NavItemName }}
    </nuxt-link>
  </div>
</template>
 
 <script>
export default {
  name: 'NavItem',
  props: {
    NavItemName: {
      type: String,
      default: 'Home'
    },
    NavItemLink: {
      type: String,
      default: '/'
    }
  }
}
</script>
 
 <style lang="scss" scoped>
$color-items: whitesmoke;
.nav-item {
  text-decoration: none;
  color: $color-items;
  &:hover,
  &:active {
    color: rgb(0, 217, 255);
  }
}
</style>