<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center"><redfern-image /></div>
      <v-card>
        <v-card-title class="headline">Designer/Developer/Digital Artist</v-card-title>
        <v-card-text>
          <p>
            I am a fullstack developer, I work with vue primarily although I also enjoy pure standards based work.
          </p>
          <p>
          I've worked with some of the more arcane html5 apis especially webrtc which is the only client api with 
          a mandatory server side to it.
          </p>
          <p>
          I also work with docker and other dev ops tools and have often worn many hats at the same time.
          </p>
          <p>
            My hobbies are digital signal processing and natural language
            generation and Native American music and culture and playing jazz trombone.
          </p>
          <p>
            To see more of my projects
            <a href="https://github.com/bredfern" target="_blank">
              Github
            </a>
          </p>
          <p>
            See my experience or contact me
            <a href="https://www.linkedin.com/in/bredfern/" target="_blank">
              Linkedin
            </a>
          </p>
          </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import RedfernImage from '~/components/RedfernImage.vue'

export default {
  components: {
    RedfernImage
  }
}
</script>
