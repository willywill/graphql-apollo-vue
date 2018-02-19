/* eslint-disable */
import { process } from './config'
import Vue from 'vue'
import App from './App'

import ApolloVue from 'vue-apollo'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: process.env.GRAPHQL_ENDPOINT }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__ || {}),
  connectToDevTools: true
})

const apolloProvider = new ApolloVue({
  defaultClient: apolloClient
})

Vue.use(ApolloVue)
Vue.use(Vuetify)

new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})
