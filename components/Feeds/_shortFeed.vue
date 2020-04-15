<template>
  <v-card
    class="mx-auto mb-5"
    width="100%"
    nuxt
    :to="'Blog/' + model.fields.slug"
  >
    <v-img
      v-if="model.fields.heroImage"
      class="white--text align-end"
      :src="model.fields.heroImage"
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
  }
}
</script>
<style scoped>
.v-application p {
  margin-bottom: 0;
}
</style>
