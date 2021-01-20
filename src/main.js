import 'core-js/stable'
import Vue from 'vue'
import App from './App'
import router from './router'
import CoreuiVue from '@coreui/vue'
import { iconsSet as icons } from './assets/icons/icons.js'
import store from './store'
import AOS from "aos"
import "aos/dist/aos.css"
import vuetify from './plugins/vuetify';

Vue.config.performance = true
Vue.use(CoreuiVue)
Vue.prototype.$log = console.log.bind(console)

//#region FILTRO PER RIDURRE LA LUNGHEZZA DEI TESTI ED AGGIUNGERE "READ MORE"
var filter = function(text, length, clamp){
  clamp = clamp || '...';
  var node = document.createElement('div');
  node.innerHTML = text;
  var content = node.textContent;
  return content.length > length ? content.slice(0, length) + clamp : content;
};
Vue.filter('truncate', filter);
//#endregion

new Vue({
  el: '#app',
  router,
  store,
  icons,

  created(){
    AOS.init({disable:"phone"});
  },

  template: '<App/>',
  vuetify,

  components: {
    App
  }
})
