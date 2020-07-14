<template>
  <v-card
    class="mx-auto mb-5"
    :loading="loading==true?'warning':false"
  >
    <v-img
      v-if="image"
      class="white--text align-end float-right mr-5 mb-5"
      width="40%"
      tile
      :src="image"
    />
    <v-card-title>
      {{ model.fields.title }}
    </v-card-title>
    <v-card-text
      class="text--primary text-left body-text"
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
  </v-card>
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
    if (this.model.fields.image) {
      const client = createClient()
      client.getAsset(this.model.fields.image.sys.id)
        .then((asset) => { this.image = asset.fields.file.url })
        .finally(() => (this.loading = false))
    } else {
      this.loading = false
    }
  },
  methods: {
  },
  head () {
    return {
      titleTemplate: '%s - Anna Serba',
      title: this.model.fields.title
    }
  }
}
</script>
<style>
  .v-card ul{
    margin-bottom: 10px;
  }
</style>
