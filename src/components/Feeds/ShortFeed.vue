<template>
<v-card
    class="mx-auto mb-5"
    max-width="400"
    min-width="400"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
      <v-card-title>{{feed.title}}</v-card-title>
    </v-img>

    <v-card-subtitle class="pb-0">{{feed.postedOn}}</v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{feed.shortDescription}}</div>

    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Explore
      </v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
    props:{
        feed:{
            type:Object,
            required:true
        }
    }
}
</script>