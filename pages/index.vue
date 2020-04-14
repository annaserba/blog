<template>
  <div>
    <div class="header">
      <MenuItems />
    </div>
    <v-parallax dark src="/img/back.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin ">
            {{ $t('my_name') }}
          </h1>
          <h4 class="subheading">
            {{ $t('subheading') }}
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container
      class=" dark color-bl mb-10 container relative"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center " cols="12">
          <h2 class="display-1 font-weight-thin mt-4 mb-4">
            {{ $t('aboutMeHead') }}
          </h2>
          <p class="pl-12 pr-12 mb-0">
            {{ $t('aboutMe') }}
          </p>
        </v-col>
        <v-col class="text-center" cols="12">
          <h2 class="display-1 font-weight-thin mt-4 mb-4">
            {{ $t('basicSkilsHead') }}
          </h2>
          <v-chip
            class="ma-2 "
            color="primary"
            outlined
            label
          >
            C#
          </v-chip>
          <v-chip
            class="ma-2"
            color="primary"
            outlined
            label
          >
            HTML
          </v-chip>
          <v-chip
            class="ma-2"
            color="primary"
            outlined
            label
          >
            CSS
          </v-chip>
          <v-chip
            class="ma-2"
            color="primary"
            outlined
            label
          >
            JavaScript
          </v-chip>
          <v-chip
            class="ma-2 "
            color="primary"
            outlined
            label
          >
            Vue.js
          </v-chip>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <h2 class="display-1 font-weight-thin mt-4 mb-4">
          {{ $t('contactsHead') }}
        </h2>
        <v-col class="text-center" cols="12">
          <v-btn
            v-if="$i18n.locale === 'en'"
            color="primary"
            depressed
            href="https://hh.ru/resume/6a5cea43ff0327c3fd0039ed1f4c694f583857"
            target="_blank"
          >
            {{ $t('resume') }}
          </v-btn>
          <v-btn
            v-if="$i18n.locale === 'ru'"
            color="primary"
            depressed
            href="https://hh.ru/resume/7af89ac0ff074b181a0039ed1f74687968354e"
            target="_blank"
          >
            {{ $t('resume') }}
          </v-btn>
          <v-btn
            class="ml-4"
            color="#24292e"
            dark
            depressed
            href="https://github.com/annaserba"
            target="_blank"
          >
            GitHub  <fa class="ml-1" :icon="['fab', 'github']" />
          </v-btn>
        </v-col>
        <!-- <v-col class="text-center" cols="12">
          <v-btn
            color="primary"
            small
            href="mailto:annserba94@gmail.com"
            target="_blank"
          >
            Send me email
          </v-btn>
        </v-col> -->
      </v-row>
    </v-container>
  </div>
</template>
<style scope>
.header{
  position: absolute;
  z-index: 1;
  width: 100%;
  padding: 4px 16px;
}
</style>
<script>
import MenuItems from '@/components/Menu/menuItems'
export default {
  components: {
    MenuItems
  },
  data () {
    return {
      yearExperience: (new Date(Date.now()).getFullYear()) - 2016
    }
  },
  head () {
    return {
      titleTemplate: '',
      title: 'Anna Serba',
      meta: [
        { hid: 'description', name: 'description', content: (process.env.npm_package_description || '') + '. ' + this.$t('aboutMe') }
      ]
    }
  }
}
</script>
