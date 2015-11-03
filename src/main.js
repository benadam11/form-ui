var Vue = require('vue')
var App = require('./app.vue')
var validator = require('vue-validator')

Vue.use(validator)

new Vue({
  el: 'body',
  components: {
    app: App
  }
})
