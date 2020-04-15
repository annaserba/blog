<template>
  <div>
    <v-img
      v-if="model.fields.heroImage"
      class="white--text align-end float-right mr-5 mb-5"
      max-width="400px"
      :src="model.fields.heroImage"
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
