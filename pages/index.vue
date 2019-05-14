<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center"><redfern-image /></div>
      <v-card>
        <v-card-title class="headline">Full Web Stack Developer</v-card-title>
        <v-card-text>
          <p>
            I am a fullstack web, mobile web and webrtc developer and my primary
            tool at the moment is vuejs and node/express although I have also
            worke with socket.io, react/redux, vanillajs, angular, and with
            other languages, python, c#, java for android native and php.
          </p>
          <p>
            My hobbies are digital signal processing and natural language
            generation and Native American music and culture.
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
          <p>
            Try my automated music react app
            <a href="https://bredfern.github.io/reactron/" target="_blank">
              Reactron
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
