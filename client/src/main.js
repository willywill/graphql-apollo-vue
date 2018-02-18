/* eslint-disable */
import Vue from 'vue'
import App from './App'

import ApolloVue from 'vue-apollo'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.config.productionTip = false

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8000/graphql' }),
  cache: new InMemoryCache().restore(window.__APOLLO_STATE__ || {}),
  connectToDevTools: true
})

const apolloProvider = new ApolloVue({
  defaultClient: apolloClient
})

Vue.use(ApolloVue)
Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  provide: apolloProvider.provide(),
  components: { App },
  template: '<App/>'
})
