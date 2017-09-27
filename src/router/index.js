import Vue from 'vue';
import Router from 'vue-router';
import Hello from '@/components/Hello';
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
