<template>
  <div>
    <v-img
      v-if="feed.urlTileImage"
      class="white--text align-end float-right mr-5 mb-5"
      max-width="400px"
      :src="feed.urlTileImage"
    />
    <v-card-title>
      {{ feed.title }}
    </v-card-title>
    <v-card-text
      class="text--primary text-left"
    >
      <div v-html="feed.content" />
      <a
        v-if="feed.source"
        class="text-left"
        :href="feed.source"
        right
      >
        {{ $t('source') }}
      </a>
    </v-card-text>
  </div>
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
