<template>
  <div>
    <Menu :items="items" />
    <v-parallax dark :src="image">
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
        <v-col v-if="person && person.fields.basicSkils" class="text-center" cols="12">
          <h3 class="display-1 font-weight-thin mt-4 mb-4">
            {{ $t('basicSkilsHead') }}
          </h3>
          <v-chip
            v-for="basicSkil in person.fields.basicSkils"
            :key="basicSkil"
            class="ma-2 "
            color="primary"
            outlined
            label
          >
            {{ basicSkil }}
          </v-chip>
        </v-col>
      </v-row>
      <v-row
        v-if="person && (person.fields.hh || person.fields.github)"
        align="center"
        justify="center"
      >
        <h3 class="display-1 font-weight-thin mt-4 mb-4">
          {{ $t('contactsHead') }}
        </h3>
        <v-col class="text-center" cols="12">
          <v-btn
            v-if="person && person.fields.hh"
            color="primary"
            depressed
            :href="person && person.fields.hh"
            target="_blank"
          >
            {{ $t('resume') }} <fa-icon class="ml-1" :icon="faExternalLinkAlt" />
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
            GitHub  <fa-icon class="ml-1" :icon="faGithub" />
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

<script>
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import Menu from '@/components/Menu/menu'
import { createClient } from '~/plugins/contentful.js'
export default {
  components: {
    Menu
  },
  asyncData ({ app, env }) {
    const client = createClient()
    return Promise.all([client.getEntries({
      'sys.id': env.CTF_PERSON_ID,
      locale: app.i18n.locales.filter(l => l.code === app.i18n.locale)[0].contentfulName
    }), client.getEntries({
      content_type: 'menu',
      order: '-fields.order',
      locale: app.i18n.locales.filter(l => l.code === app.i18n.locale)[0].contentfulName
    })
    ]).then(([person, menuItems]) => {
      return client.getAsset(person.items[0].fields.image.sys.id)
        .then((asset) => {
          return {
            person: person.items[0],
            image: asset.fields.file.url,
            items: menuItems.items
          }
        })
    })
  },
  data () {
    return {
      loading: true,
      yearExperience: (new Date(Date.now()).getFullYear()) - 2016
    }
  },
  computed: {
    faGithub () {
      return faGithub
    },
    faExternalLinkAlt () {
      return faExternalLinkAlt
    }
  },
  head () {
    return {
      titleTemplate: '',
      title: this.person.fields.name,
      meta: [
        { hid: 'description', name: 'description', content: this.$t('aboutMe') }
      ]
    }
  }
}
</script>
