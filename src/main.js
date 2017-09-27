// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import {getPlayerSummary} from './api';
import store from './store';
import AsyncComputed from 'vue-async-computed';

Vue.config.productionTip = false;

Vue.use(AsyncComputed);

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store: store,
	template: '<App/>',
	components: { App }
});