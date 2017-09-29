<template>
  <div id="app">
    <nav class="nav"><div id="title">DotaStackTracker</div></nav>
    <!--<router-view></router-view>-->
    <Players></Players>
    <Matches></Matches>
  </div>
</template>

<script>
import {getPlayerHistory, getPlayerSummary} from '@/api';
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
    n => {
      this.buildList();
    })
  },
	methods: {
    async populateFam(){
      var data, history;
			for (var index = 0; index < this.$store.state.fam.length; index++) {
				var fam = this.$store.state.fam;
				data = await getPlayerSummary(this.$store.state.fam[index].id);
        fam[index].data = data;
				history = await getPlayerHistory(this.$store.state.fam[index].id);
				fam[index].matchHistory = history;
				if(data) this.$store.commit('SET_FAM', fam);
      }
      this.buildList();
    },
		buildList(){
			var allHistories = [];
			for (var index = 0; index < 5; index++) {
				var flag;
				if(index == 0)
					flag = 16;
				if(index == 1)
					flag = 8;
				if(index == 2)
					flag = 4;
				if(index == 3)
					flag = 2;
				if(index == 4)
					flag = 1;
				if(this.$store.state.activeFlag & flag)
					allHistories.push(...this.$store.state.fam[index].matchHistory);
			}
			allHistories.sort(function(a,b){
				if(a.match_id > b.match_id)
					return -1;
				if(a.match_id < b.match_id)
					return 1;
				return 0;
			});
			this.$store.commit('SET_HISTORY', allHistories);
			this.filterHistory();
		},
		filterHistory(){
			var filtered;
			if(this.$store.state.uniq){
				filtered = this.$store.state.matchHistory.filter((item, index, array) => {
					return array.map((mapItem) => mapItem['match_id']).indexOf(item['match_id']) !== index;
				});
			}
			this.$store.commit('SET_FILTERED', filtered);
		}
	}
}
</script>

<style>
body{
    background-color: #20242E;
    margin: 0;
}

.nav{
  font-size: 2em;
  color: #C1CCC2;
  background-color: #2c3e50;
  margin: 0;
  line-height: 2em;
}

#title{
  margin-left: 1em;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
  width: 100%;
}

.logo{
  display: block;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>
