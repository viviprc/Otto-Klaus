import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBA5lMLhUUJwYfXPqqIc8sTLE5SZRQP7qM",
  authDomain: "otto-klaus-3b36f.firebaseapp.com",
  databaseURL: "https://otto-klaus-3b36f.firebaseio.com",
  projectId: "otto-klaus-3b36f",
  storageBucket: "otto-klaus-3b36f.appspot.com",
  messagingSenderId: "216252696555",
  appId: "1:216252696555:web:9be1bfc650d9f945773bae"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
