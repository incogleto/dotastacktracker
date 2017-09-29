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
	width: 60%;
	margin: 20px auto;
	color: #C1CCC2
}

</style>
