<template>
  <Feed :feed="feed" />
</template>
<script>
import axios from '~/plugins/axios'
import Feed from '@/components/Feeds/_feed'
export default {
  components: {
    Feed
  },
  data () {
    return {
      feed: {},
      id: this.$route.params.id,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('api/Feeds/' + this.id, {
      })
      .then((response) => {
        this.feed = response.data
      })
      // eslint-disable-next-line handle-callback-err
      .catch((error) => {
        this.errored = true
      })
      .finally(() => (this.loading = false))
  }
}
</script>
