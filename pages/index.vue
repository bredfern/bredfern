<template>
  <v-layout column justify-center align-center>
    <v-flex xs12 sm8 md6>
      <div class="text-xs-center"><redfern-image /></div>
      <v-card>
        <v-card-title class="headline">Web Developer</v-card-title>
        <v-card-text>
          <p>
            I am a fullstack developer, I work with vue, react and vanilla js on the client side and with nodejs, php, and python on the server side.
          </p>
	  <p>
	    I am always working on new things, currently working on learning google's golang.
	  </p>
          <p>
          I also work with docker and other dev ops tools such as kubernetes, jenkins and ansible and have often worn many hats at the same time.
          </p>
          <p>
            My hobbies are digital signal processing and natural language
            generation and Native American music and culture and playing jazz trombone.
          </p>
	  <p>
            Try out my fun new app, <a href="https://bredfern.github.io/mysynth" target="_blank">MySynth</a>,
	    a web audio fm synth that runs in your browser.
	    If you're running a supported browser you can control the synth with midi hardware
	    using the webmidi protocol.
	  </p>
	  <p>
            I support a <a href="https://github.com/bredfern/docker-janus">docker project</a> for use with janus webrtc server.
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
