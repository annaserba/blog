<template>
  <div>
    <Menu />
    <Feed :feed="feed" />
  </div>
</template>
<script>
import Menu from '@/components/menu'
import axios from '~/plugins/axios'
import Feed from '@/components/Feeds/_feed'
export default {
  components: {
    Feed,
    Menu
  },
  data () {
    return {
      feed: {},
      url: this.$route.params.url,
      loading: true,
      errored: false
    }
  },
  mounted () {
    axios
      .get('Feeds/' + this.url + '?lang=' + this.$i18n.locale, {
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
