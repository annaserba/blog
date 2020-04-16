<template>
  <v-app color="white">
    <nuxt />
    <v-footer
      fixed
      app
    >
      <span>{{ $t('my_name') }} &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>
