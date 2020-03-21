<template>
  <div>
    <v-img
      v-if="model.feed.urlTileImage"
      class="white--text align-end float-right mr-5 mb-5"
      max-width="400px"
      :src="model.feed.urlTileImage"
    />
    <v-card-title>
      {{ model.feed.title }}
    </v-card-title>
    <v-card-text
      class="text--primary text-left"
    >
      <div v-html="model.feed.content" />
      <a
        v-for="(name,url) in model.sources"
        :key="url"
        class="text-left"
        :href="url"
        right
      >
        {{ name }}
      </a>
    </v-card-text>
  </div>
</template>
<script>
export default {
  props: {
    model: {
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
  },
  head () {
    return {
      titleTemplate: '%s - Anna Serba',
      title: this.model.feed.title
    }
  }
}
</script>
<style scoped>
.v-application p {
  margin-bottom: 0;
}
</style>
