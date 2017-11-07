import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue'
import Notifications from "vue-notification";
import { sync } from "vuex-router-sync";
import { routes } from './system/routes';
import store from './store/index'

Vue.use(VueRouter);
Vue.use(Notifications)

export const router = new VueRouter({
	mode: 'history',
	routes,
})

sync(store, router)

new Vue({
	el: '#app',
	store,
	router,
	render: h => h(App),
});
