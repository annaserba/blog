<template>
  <v-app color="white">
    <!-- <v-navigation-drawer
      v-model="drawer"
      :mini-variant="miniVariant"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <nuxt />
    <v-btn
      v-if="$i18n.locale !== 'en'"
      right
      absolute
      class="mt-3"
      outlined
      color="white"
      :to="switchLocalePath('en')"
    >
      EN
    </v-btn>
    <v-btn
      v-if="$i18n.locale !== 'ru'"
      right
      absolute
      class="mt-3"
      outlined
      color="white"
      :to="switchLocalePath('ru')"
    >
      RU
    </v-btn>
    <v-btn
      v-if="$i18n.locale == 'ru'"
      right
      absolute
      class="mt-3"
      outlined
      color="white"
      :to="'/Feeds'"
      style="margin-right:90px"
    >
      {{ $t('blog') }}
    </v-btn>
    <!-- <v-navigation-drawer
      v-model="rightDrawer"
      :right="right"
      temporary
      fixed
    >
      <v-list>
        <v-list-item @click.native="right = !right">
          <v-list-item-action>
            <v-icon light>
              mdi-repeat
            </v-icon>
          </v-list-item-action>
          <v-list-item-title>Switch drawer (click me)</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer> -->
    <v-footer
      :fixed="fixed"
      app
    >
      <span>{{ $t('my_name') }} &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: 'mdi-apps',
          title: 'Welcome',
          to: '/'
        },
        {
          icon: 'mdi-chart-bubble',
          title: 'Inspire',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: false,
      rightDrawer: false
      // title: 'Vuetify.js'
    }
  }
}
</script>
