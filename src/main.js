import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyA1UUspgTof77OW47x9Q6V195OAyMHBezY",
  authDomain: "cs-260-creative-projects.firebaseapp.com",
  databaseURL: "https://cs-260-creative-projects.firebaseio.com",
  projectId: "cs-260-creative-projects",
  storageBucket: "cs-260-creative-projects.appspot.com",
  messagingSenderId: "1009512193493",
  appId: "1:1009512193493:web:f7b72228a8b65a32"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

firebase.auth().onAuthStateChanged(user => {
  if(user){
    store.commit('setUser',user);
  }
  else {
    store.commit('setUser',null);
  }
});
