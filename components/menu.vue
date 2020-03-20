<template>
  <v-toolbar
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-toolbar-title>
      <v-btn
        nuxt
        :to="'/'"
        outlined
      >
        {{ $t('my_name') }}
      </v-btn>
    </v-toolbar-title>
    <v-spacer />
  </v-toolbar>
</template>
