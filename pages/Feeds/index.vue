<template>
  <div>
    <Menu />
    <Feeds :lang="$i18n.locale" />
  </div>
</template>
<script>
import Menu from '@/components/menu'
import Feeds from '@/components/Feeds/feeds'
export default {
  components: {
    Feeds,
    Menu
  }
}
</script>
