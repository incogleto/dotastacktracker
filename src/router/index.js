import Vue from 'vue';
import Router from 'vue-router';
import Players from '@/components/Players-View';

Vue.use(Router);

export default new Router({
	routes: [
		{
			path: '/',
			name: 'Players',
			component: Players
		}
	]
});
