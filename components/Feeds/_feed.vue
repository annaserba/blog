<template>
  <div>
    <v-img
      v-if="image"
      class="white--text align-end float-right mr-5 mb-5"
      max-width="400px"
      :src="image"
    />
    <v-card-title>
      {{ model.fields.title }}
    </v-card-title>
    <v-card-text
      class="text--primary text-left"
    >
      <vue-markdown>{{ model.fields.body }}</vue-markdown>
      <div
        v-for="(name,url) in model.sources"
        :key="url"
      >
        <a
          class="text-left"
          :href="url"
          right
        >
          {{ name }}
        </a>
      </div>
    </v-card-text>
  </div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import { createClient } from '~/plugins/contentful.js'
export default {
  components: {
    VueMarkdown
  },
  props: {
    model: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      image: '',
      loading: true
    }
  },
  mounted () {
    if (this.model.fields.heroImage) {
      const client = createClient()
      client.getAsset(this.model.fields.heroImage.sys.id)
        .then((asset) => { this.image = asset.fields.file.url })
        .finally(() => (this.loading = false))
    } else {
      this.loading = false
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
      title: this.model.fields.title
    }
  }
}
</script>
<style scoped>
.v-application p {
  margin-bottom: 0;
}
</style>
