<template>
  <div class="home">
   
    <v-parallax
    dark
    src="https://cdn.vuetifyjs.com/images/backgrounds/vbanner.jpg"
  >
    <v-row
      align="center"
      justify="center" style="height:300px"
    >
      <v-col class="text-center" cols="12">
        
        <h1 class="display-1 font-weight-thin mb-4">Ann Serba</h1>
        <h4 class="subheading">.Net Programmer and entrepreneur</h4>
        
      </v-col>
    </v-row>
    
  </v-parallax>
  <v-container
        class="fill-height dark color-bl"  style="position:relative"
         >
          
        <v-row align="center"
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
                    right href="https://github.com/annaserba" target="_blank"
                  >
                    <i class="fab fa-github"></i>
                  </v-btn>
          <h2 class="display-1 font-weight-thin mb-4">About me</h2>
          <p style="padding:0 30px;">I am a business automation web engineer. 
            The area of my expertise covers the full stack .Net technologies. 
            But I specialize in front-end technologies. 
            I have extensive experience in fixing software bugs.
            I work only remotely</p>
          </v-col>
          <v-col class="text-center" cols="12">
          
          <h2 class="display-1 font-weight-thin mb-4">Skils</h2>
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

