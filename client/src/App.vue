<template>
  <div id="app">
    <div class="text-xs-center">
      Welcome to this Vue-Apollo demo!
    </div>
    <br>
    <div v-if="$apollo.loading" class="text-xs-center">
      <v-progress-circular indeterminate color="blue"></v-progress-circular>
    </div>
    <v-container grid-list-md >
      <v-layout row wrap>
        <v-flex xs4 v-for="i in 1" :key="`4${i}`">
          <v-card dark color="primary">
            <v-card-title primary-title>
              <h3 class="headline mb-0">
                <v-avatar :size="32">
                  <img src="https://s3.amazonaws.com/uifaces/faces/twitter/adamnac/128.jpg">
                </v-avatar>
                Bob Smith
                </h3>
            </v-card-title>
            <v-card-text>
              <v-icon color="blue" small>email</v-icon> bsmith234@yahoo.com 
              <br>
              <v-icon color="blue" small>work</v-icon> Lead Security Architect
            </v-card-text>
            <v-card-actions>
            <v-btn flat color="blue">Share</v-btn>
            <v-btn flat color="grey">Explore</v-btn>
            <v-btn
              color="blue"
              dark
              small
              absolute
              bottom
              right
              fab
            >
              <v-icon>edit</v-icon>
            </v-btn>
          </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>

  <!-- <div v-if="personData.avatar !== undefined">
    <img :src="personData.avatar" width="64" height="64" style="border-radius: 50%">
  </div> -->
  </div>
</template>

<script>
import { PersonQuery } from './queries/graphql'

export default {
  name: 'App',
  data: () => ({
    personData: [],
    loading: 0
  }),
  apollo: {
    personData: {
      query: PersonQuery(1),
      update: ({ person }) => person
    }
  }
}
</script>

<style>
#app
{
  font-family: 'Roboto', sans-serif
}
</style>
