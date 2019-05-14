<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img src="/articles.jpg" height="300px">
          <v-layout column fill-height>
            <v-card-title>
              <v-spacer></v-spacer>
            </v-card-title>
            <v-spacer></v-spacer>
            <v-card-title class="white--text pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">Articles</div>
            </v-card-title>
          </v-layout>
        </v-img>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a
                href="http://csoundjournal.com/issue8/liveFluteSynthesis.html"
                target="_new"
              >
                Live Flute Synthesis
              </a>
              - Using Csound to Simluate Acoustic Flutes
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a
                href="http://csoundjournal.com/issue9/FlutesInOrbit.html"
                target="_new"
              >
                Flutes in Orbit
              </a>
              - Using Csound Orbital Filters with Flute Synthesis
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a
                href="http://csoundjournal.com/issue10/HackingSugarOLPC.html"
                target="_new"
              >
                Hacking with csndsugui and Sugar
              </a>
              - Building Csound GUIs for the OLPC
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a
                href="http://csoundjournal.com/issue11/MakingBeatsWithBlue.html"
                target="_new"
              >
                Making Beats With Blue
              </a>
              - Digital Dance Music with Csound and Blue
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>
              <a
                href="http://csoundjournal.com/issue19/kaoss_droid.html"
                target="_new"
              >
                Kaoss Droid
              </a>
              - Building a Touchpad Synth with Android and Csound
            </v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-card>
    </v-flex>
  </v-layout>
</template>
