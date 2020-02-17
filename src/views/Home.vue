<template>
  <div class="home">
    <Feeds/>
  </div>
</template>

<script>
// @ is an alias to /src
import Feeds from '@/components/Feeds/Feeds.vue'

export default {
  name: 'home',
  components: {
    Feeds
  }
}
</script>
