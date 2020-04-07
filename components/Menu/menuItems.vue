<template>
  <v-row align="start" justify="start">
    <v-col cols="6">
      <v-btn
        v-if="this.$route.path!=='/'"
        nuxt
        :to="'/'"
        outlined
      >
        {{ $t('my_name') }}
      </v-btn>
    </v-col>
    <v-col cols="6" align="end">
      <v-btn
        v-if="$i18n.locale == 'ru'&&this.$route.path!=='/feeds'"
        class="mr-2"
        outlined
        right
        color="white"
        :to="'/feeds'"
      >
        {{ $t('blog') }}
      </v-btn>
      <v-btn
        v-if="$i18n.locale !== 'en'&&this.$route.path==='/'"
        outlined
        color="white"
        :to="switchLocalePath('en')"
      >
        EN
      </v-btn>
      <v-btn
        v-if="$i18n.locale !== 'ru'"
        outlined
        color="white"
        :to="switchLocalePath('ru')"
      >
        RU
      </v-btn>
    </v-col>
  </v-row>
</template>
<script>
export default {
  mounted () {
  }
}
</script>
