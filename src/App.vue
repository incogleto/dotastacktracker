<template>
	<div id="app">
		<nav class="nav">
			<div id="title">DotaStackTracker</div>
		</nav>
		<!--<router-view></router-view>-->
		<div class="content">
			<Players></Players>
			<Matches></Matches>
		</div>
		<vue-progress-bar></vue-progress-bar>
	</div>
</template>

<script>
import { getPlayerHistory, getPlayerSummary } from '@/api';
import Players from '@/components/Players-View';
import Matches from '@/components/Matches';

export default {
	name: 'app',
	components: {
		Players, Matches
	},
	created() {
		this.populateFam();
		this.$store.watch(this.$store.getters.getActiveFlag,
			n => { //eslint-disable-line no-unused-vars
				this.buildList();
			});
	},
	methods: {
		async populateFam() {
			this.$Progress.start();
			var data, history;
			var idArray = this.$store.state.fam.map((data) => {
				return data.id;
			});
			var ids = idArray.join();
			data = await getPlayerSummary(ids);
			for (var index = 0; index < this.$store.state.fam.length; index++) {
				var fam = this.$store.state.fam;
				fam[index].data = data[index];
				fam[index].id = data[index].steamid;
				this.$store.commit('SET_FAM', fam);
				this.$Progress.increase(10);
			}
			for (var index = 0; index < this.$store.state.fam.length; index++) {
				var fam = this.$store.state.fam;
				history = await getPlayerHistory(this.$store.state.fam[index].id);
				fam[index].matchHistory = history;
				if (data) this.$store.commit('SET_FAM', fam);
				this.$Progress.increase(10);
			}
			this.$Progress.finish();
			this.$store.commit('SET_LOADED', true);
			this.buildList();
		},
		buildList() {
			var allHistories = [];
			for (var index = 0; index < 5; index++) {
				var flag;
				if (index == 0)
					flag = 16;
				if (index == 1)
					flag = 8;
				if (index == 2)
					flag = 4;
				if (index == 3)
					flag = 2;
				if (index == 4)
					flag = 1;
				if (this.$store.state.activeFlag & flag)
					allHistories.push(...this.$store.state.fam[index].matchHistory);
			}
			allHistories.sort(function(a, b) {
				if (a.match_id > b.match_id)
					return -1;
				if (a.match_id < b.match_id)
					return 1;
				return 0;
			});
			this.$store.commit('SET_HISTORY', allHistories);
			this.filterHistory();
		},
		filterHistory() {
			var filtered;
			if (this.$store.state.uniq) {
				filtered = this.$store.state.matchHistory.filter((item, index, array) => {
					return array.map((mapItem) => mapItem['match_id']).indexOf(item['match_id']) !== index;
				});
			}
			this.$store.commit('SET_FILTERED', filtered);
		}
	}
};
</script>

<style>
body {
	background-color: #20242E;
	margin: 0;
}

.content {
	width: 100%;
	margin: 0 15px;
}

@media screen and (min-width: 1400px) {
	.content {
		width: 60%;
		margin: 0 auto;
	}
}

.nav {
	font-size: 2em;
	color: #C1CCC2;
	background-color: #2c3e50;
	margin: 0;
	line-height: 2em;
	width: 100%;
}

#title {
	margin-left: 1em;
}

#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	margin: 0;
}

.logo {
	display: block;
	margin-top: 50px;
	margin-left: auto;
	margin-right: auto;
}
</style>
