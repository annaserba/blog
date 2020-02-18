<template>
<div>
  <v-sheet
    :color="`grey  lighten-5`"
    v-if="loading"
    class=""
  >
    <v-skeleton-loader
      class="mx-auto"
      max-width="400"
      min-width=400
      type="card"
    ></v-skeleton-loader>
  </v-sheet>
  <div v-else-if="feeds.length">
<ShortFeed v-for="(feed, index) in feeds"
  v-bind:feed="feed"
  v-bind:index="index"
  v-bind:key="feed.ID" />
  </div>
   <div v-else >No feeds</div>
   </div>
</template>

<script>
 import axios from 'axios';
import ShortFeed from '@/components/Feeds/ShortFeed';
export default {
    components:{
        ShortFeed
    },
  data() {
    return {
      feeds: [],
      loading: true,
      errored: false
    };
  },
  filters: {
    currencydecimal(value) {
      return value.toFixed(2);
    }
  },
  mounted() {
    axios
      .get(process.env.API_URL_ENV+"Feeds",{
          
      })
      .then(response => {
        this.feeds = response.data;
      })
      // eslint-disable-next-line no-unused-vars
      .catch(error => {
        this.errored = true;
      })
      .finally(() => (this.loading = false));
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">

</style>
