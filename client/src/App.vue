<template>
  <div id="app">
    <div class="display-3 text-center">
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
      query: PersonQuery(3),
      update: ({ person }) => person
    }
  }
}
</script>
