<template>
  <div>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center" cols="12">
          <h1 class="display-1 font-weight-thin ">
            Anna Serba
          </h1>
          <h4 class="subheading">
            .Net Programmer and entrepreneur
          </h4>
        </v-col>
      </v-row>
    </v-parallax>
    <v-container
      class=" dark color-bl mb-10 container"
    >
      <v-row
        align="center"
        justify="center"
      >
        <v-col class="text-center " cols="12">
          <h2 class="display-1 font-weight-thin mt-4 mb-4">
            About me
          </h2>
          <p class="pl-12 pr-12 mb-0">
            I am a business automation web engineer.
            The area of my expertise covers the full stack .Net technologies.
            But I specialize in front-end technologies.
            I have extensive experience in fixing software bugs.
            I work only remotely
          </p>
        </v-col>
        <v-col class="text-center" cols="12">
          <h2 class="display-1 font-weight-thin mt-4 mb-4">
            Basic skils
          </h2>
          <v-chip
            class="ma-2"
            color="primary"
            label
          >
            HTML
          </v-chip>
          <v-chip
            class="ma-2"
            color="primary"
            label
          >
            CSS
          </v-chip>
          <v-chip
            class="ma-2"
            color="primary"
            label
          >
            JavaScript
          </v-chip>
          <v-chip
            class="ma-2 "
            color="primary"
            label
          >
            C#
          </v-chip>
        </v-col>
      </v-row>
      <v-row
        align="center"
        justify="center"
      >
        <h2 class="display-1 font-weight-thin mt-4 mb-4">
          Contacts
        </h2>
        <v-col class="text-center" cols="12">
          <v-btn
            color="primary"
            small
            href="https://hh.ru/resume/6a5cea43ff0327c3fd0039ed1f4c694f583857"
            target="_blank"
          >
            Resume
          </v-btn>
          <v-btn
            color="#24292e"
            dark
            small
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
<style scoped>
.container{
  position: relative;
}
</style>
<script>
export default {
  components: {
  },
  data () {
    return {
      yearExperience: (new Date(Date.now()).getFullYear()) - 2016
    }
  },
  head () {
    return {
      titleTemplate: '',
      title: 'Anna Serba'
    }
  }
}
</script>
