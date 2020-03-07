<template>
  <v-card
    class="mx-auto mb-5"
    max-width="300"
    min-width="300"
  >
    <v-img
      class="white--text align-end"
      height="150px"
      :src="feed.urlTileImage"
    >
      <v-card-title>
        {{ feed.title }}
      </v-card-title>
    </v-img>
    <v-card-text
      class="text--primary pb-0"
    >
      {{ feed.shortDescription }}
    </v-card-text>
    <v-card-actions>
      <v-btn
        color="orange"
        nuxt
        small
        outlined
        :to="'/Feeds/'+feed.id"
      >
        {{ $t('moreDetails') }}
      </v-btn>
    </v-card-actions>
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
