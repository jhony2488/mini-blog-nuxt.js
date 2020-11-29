 <template>
  <div class="container-content">
    <TitleContentHome />
  </div>
</template>
 
 <script>
import { TitleContentHome } from '@/components/atoms'

export default {
  name: 'ContentHome',
  components: {
    TitleContentHome
  }
}
</script>
 
 <style lang="scss" scoped>
 .container-content{
     display: grid;
     grid-template-columns: 1fr;
     justify-items: center;
     align-items: center;
     height: 80vh;
 }
</style>