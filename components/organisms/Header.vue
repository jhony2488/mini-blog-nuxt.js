 <template>
  <div class="Header">
    <Logo />
    <Nav />
  </div>
</template>
 
 <script>
import { Nav } from '@/components/molecules'
import { Logo } from '@/components/atoms'

export default {
  name: 'Header',
  components: {
    Nav,
    Logo
  }
}
</script>
 
 <style lang="scss" >
.Header {
  display: grid;
  grid-template-columns: 1fr 2fr;
  width: 100%;
  background-color: gray;
  height: 80px;
}
</style>