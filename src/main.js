import Vue from 'vue'
import router from './router'
import App from './App'
import vuetify from './plugins/vuetify'
import store from './store/store'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

new Vue({
    render: h => h(App),
    vuetify,
    router,
    store
}).$mount('#app')
