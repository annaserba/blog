<template>
  <v-app id="inspire">
    
    <v-content>
          <router-view/>
    </v-content>
   
  </v-app>
</template>

<script>

export default {
    name: 'App',
    props: {
      source: String,
    },
    data: () => ({
      dialog: false,
      drawer: null,
      items: [
        { icon: 'mdi-history', text: 'Feed' }
      ],
    }),
  }
</script>
<style lang="less" scoped>

</style>
