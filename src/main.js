import Vue from 'vue'
import App from './App.vue'
import { ValidationProvider } from 'vee-validate/dist/vee-validate.full.esm';
import {ValidationObserver} from 'vee-validate'

Vue.component("ValidationProvider", ValidationProvider);
Vue.component('ValidationObserver', ValidationObserver);

import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import CxltToastr from 'cxlt-vue2-toastr'
import 'cxlt-vue2-toastr/dist/css/cxlt-vue2-toastr.css'

Vue.use(CxltToastr)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
