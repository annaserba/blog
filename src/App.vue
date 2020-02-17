<template>
  <v-app id="inspire">

    <v-app-bar
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      app
      color="blue darken-3"
      dark
    >
     
      <v-toolbar-title
        class="ml-0 pl-4"
      >
        <span class="hidden-sm-and-down">Blog</span>
      </v-toolbar-title>
      <v-row>
         <v-col  cols="9">
            
            </v-col>
            <v-col  cols="3">
            <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="mdi-magnify"
        label="Search"
        class="hidden-sm-and-down search"
      />
            </v-col>
           
          </v-row>
      
     
    </v-app-bar>
    <v-content>
      <v-container
        class="fill-height"
        fluid >
        <v-row align="center"
          justify="center"
        >
          <router-view/>
        </v-row>
      </v-container>
      
      
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
