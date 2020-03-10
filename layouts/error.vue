<template>
  <v-app dark>
    <v-container
      class="text-center"
      fill-height
      style="height: calc(100vh - 58px);"
    >
      <v-row align="center">
        <v-col>
          <h1
            v-if="error.statusCode === 404"
            class="display-2 primary--text"
          >
            {{ pageNotFound }}
          </h1>
          <h1 v-else>
            {{ otherError }}
          </h1>

          <p>The page you were looking for does not exist</p>
          <NuxtLink to="/">
            Home page
          </NuxtLink>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
  head () {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError
    return {
      title
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 20px;
}
</style>
