<template>
  <div id="app">
    <div class="text-xs-center">
      Welcome to this Vue-Apollo demo!
    </div>
    <div v-if="$apollo.loading" class="display-4 text-center">
      Loading...
    </div>
    <div
     class="container">
      {{personData.firstName}} {{personData.lastName}}
      <br>
      Age - {{personData.age}}
      <img :src="personData.avatar" width="64" height="64" style="border-radius: 50%">
    </div>
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
