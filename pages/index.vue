<template>
  <div>
    <div class="header">
      <MenuItems />
    </div>
    <v-parallax dark src="/img/back.png">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 v-if="person && person.fields.name" class="display-1 font-weight-thin ">
            {{ person.fields.name }}
          </h1>
          <h2 v-if="person && person.fields.title" class="subheading">
            {{ person.fields.title }}
          </h2>
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
        <v-col v-if="person && person.fields.shortBio" class="text-center " cols="12">
          <h3 class="display-1 font-weight-thin mt-4 mb-4">
            {{ $t('aboutMeHead') }}
          </h3>
          <p class="pl-12 pr-12 mb-0">
            {{ person.fields.shortBio }}
          </p>
        </v-col>
        <v-col class="text-center" cols="12">
          <h3 class="display-1 font-weight-thin mt-4 mb-4">
            {{ $t('basicSkilsHead') }}
          </h3>
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
        <h3 class="display-1 font-weight-thin mt-4 mb-4">
          {{ $t('contactsHead') }}
        </h3>
        <v-col class="text-center" cols="12">
          <v-btn
            v-if="person && person.fields.github"
            color="primary"
            depressed
            :href="person && person.fields.hh"
            target="_blank"
          >
            {{ $t('resume') }}
          </v-btn>
          <v-btn
            v-if="person && person.fields.github"
            class="ml-4"
            color="#24292e"
            dark
            depressed
            :href="person && person.fields.github"
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
import { createClient } from '~/plugins/contentful.js'
export default {
  layout: 'main',
  components: {
    MenuItems
  },
  asyncData ({ app, env }) {
    const client = createClient()
    return Promise.all([
      client.getEntries({
        'sys.id': env.CTF_PERSON_ID,
        locale: app.i18n.locales.filter(l => l.code === app.i18n.locale)[0].contentfulName
      })
    ]).then(([entries]) => {
      return {
        person: entries.items[0]
      }
    })
      // eslint-disable-next-line handle-callback-err
      .catch((error) => {
        return {
          errored: true
        }
      })
  },
  data () {
    return {
      loading: true,
      yearExperience: (new Date(Date.now()).getFullYear()) - 2016
    }
  },
  head () {
    return {
      titleTemplate: '',
      title: 'Anna Serba',
      meta: [
        { hid: 'description', name: 'description', content: this.$t('aboutMe') }
      ]
    }
  }
}
</script>
