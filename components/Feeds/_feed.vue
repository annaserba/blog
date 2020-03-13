<template>
  <v-card
    class="mx-auto mb-5 mt-5"
    max-width="1000"
    min-width="1000"
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
      class="text--primary"
      v-html="feed.content"
    />
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
