<template>
  <v-toolbar
    dark
    src="./img/back.png"
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
