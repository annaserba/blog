<template>
  <v-card
    class="mx-auto mb-5"
    width="100%"
    tile
    :loading="loading==true?'warning':false"
    nuxt
    :to="url"
  >
    <v-img
      v-if="image&&loading==false"
      class="white--text align-end"
      :src="image"
    />
    <v-card-title>
      {{ model.fields.title }}
    </v-card-title>
    <v-card-text
      class="text--primary pb-0"
    >
      {{ model.fields.description }}
    </v-card-text>
    <v-chip-group
      class="pl-2 pr-2"
      column
      active-class="primary--text"
    >
      <v-chip
        v-for="tag in model.fields.tags"
        :key="tag"
      >
        {{ tag }}
      </v-chip>
    </v-chip-group>
  </v-card>
</template>
<script>
import { createClient } from '~/plugins/contentful.js'
export default {
  props: {
    url: {
      type: String,
      required: false,
      default: ''
    },
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
    const that = this
    if (this.model.fields.image) {
      const client = createClient()
      client.getAsset(this.model.fields.image.sys.id)
        .then((asset) => { this.image = asset.fields.file.url })
        .finally(() => (setTimeout(function () { that.loading = false }, 1000)))
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
  }
}
</script>
