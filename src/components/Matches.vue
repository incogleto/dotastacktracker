<template>
	<div class="container">
		<Match class="match" v-for="(match, index) in matches" :key="index" :matchData="match"></Match>
	</div>
</template>

<script>
import Match from "./Match";

export default {
	name: 'matches',
	components: {
		Match
	},
	computed: {
		matches(){
			return this.$store.state.filteredHistory;
		}
	}
}
</script>

<style scoped>
.container{
	margin: 20px;
	color: #C1CCC2
}

</style>
