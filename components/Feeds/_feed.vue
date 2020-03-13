<template>
  <v-card
    class="mx-auto mb-5 mt-5"
    width="100%"
  >
    <v-img
      v-if="feed.urlTileImage"
      class="white--text align-end"
      height="100"
      :src="feed.urlTileImage"
    >
      <v-card-title>
        {{ feed.title }}
      </v-card-title>
    </v-img>
    <v-card-title
      v-else
    >
      {{ feed.title }}
    </v-card-title>
    <v-card-text
      class="text--primary text-left"
      v-html="feed.content"
    />
    <div
      class="pl-4 pr-4 pb-5 pt-2"
      id="anycomment-app"
    />
    <script>
      AnyComment = window.AnyComment || []; AnyComment.Comments = [];
      AnyComment.Comments.push({
      "root": "anycomment-app",
      "app_id": 742,
      "track_get_params": true,
      "language": "ru"
      })
    </script>
    <script type="text/javascript" async src="https://cdn.anycomment.io/assets/js/launcher.js" />
  </v-card>
</template>
<script>
export default {
  props: {
    feed: {
      type: Object,
      required: true
    }
  },
  methods: {
    formatDate (date) {
      if (!date) { return null }

      const [year, month, day] = date.split('T')[0].split('-')
      return `${month}/${day}/${year}`
    }
  }
}
</script>
<style scoped>
.v-application p {
  margin-bottom: 0;
}
</style>
