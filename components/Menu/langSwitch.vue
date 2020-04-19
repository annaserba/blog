<template>
  <v-menu offset-y>
    <template v-slot:activator="{ on }">
      <v-btn
        class="float-right"
        outlined
        color="white"
        v-on="on"
      >
        {{ $i18n.locale }}
      </v-btn>
    </template>
    <v-list>
      <v-list-item
        v-for="lang in $i18n.locales"
        :key="lang.code"
        :to="switchLocalePath(lang.code)"
      >
        <v-list-item-title>{{ lang.code.toUpperCase() }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
</template>
