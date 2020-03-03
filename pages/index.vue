<template>
  <div>
    <v-parallax dark src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg">
      <v-row align="center" justify="center">
        <v-col class="text-center mt-10" cols="12" />
        <v-col class="text-center mt-10" cols="12">
          <h1 class="display-1 font-weight-thin ">
            Ann Serba
          </h1>
          <h4 class="subheading">
            .Net Programmer and entrepreneur
          </h4>
        </v-col>
        <v-col class="text-center mb-10" cols="12">
          <span class="display-1 font-weight-thin ">
            {{ yearExperience }}
          </span>
          <p class="font-weight-thin">
            Years of experience
          </p>
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
        <v-col class="text-center" cols="12">
          <v-btn
            color="#24292e"
            fab
            dark
            small
            absolute
            top
            right
            href="https://github.com/annaserba"
            target="_blank"
          >
            <fa :icon="['fab', 'github']" />
          </v-btn>
          <h2 class="display-1 font-weight-thin mt-4 mb-4">
            About me
          </h2>
          <p class="pl-12 pr-12">
            I am a business automation web engineer.
            The area of my expertise covers the full stack .Net technologies.
            But I specialize in front-end technologies.
            I have extensive experience in fixing software bugs.
            I work only remotely
          </p>
        </v-col>
        <v-col class="text-center" cols="12">
          <h2 class="display-1 font-weight-thin mb-4">
            Skils
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
            class="ma-2"
            color="primary"
            label
          >
            C#
          </v-chip>
        </v-col>
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
  }
}
</script>
