<template>
  <v-row align="start" justify="start">
    <v-col cols="4">
      <v-btn
        v-if="this.$route.path!=='/'"
        nuxt
        :to="'/'"
        outlined
      >
        {{ $t('my_name') }}
      </v-btn>
    </v-col>
    <v-col class="end" cols="8">
      <v-btn
        v-if="$i18n.locale !== 'en'&&this.$route.path==='/'"
        class="float-right"
        outlined
        color="white"
        :to="switchLocalePath('en')"
      >
        EN
      </v-btn>
      <v-btn
        v-if="$i18n.locale !== 'ru'"
        class="float-right"
        outlined
        color="white"
        :to="switchLocalePath('ru')"
      >
        RU
      </v-btn>
      <v-btn
        v-if="$i18n.locale == 'ru'&&this.$route.path!=='/blog'"
        class="float-right mr-2"
        outlined
        color="white"
        :to="'/blog'"
      >
        {{ $t('blog') }}
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
