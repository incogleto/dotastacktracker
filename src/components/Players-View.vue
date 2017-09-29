<template>
	<div class='players'>
		<player v-for="(player, index) in players" 
				:playerId="$store.state.fam[index].id" 
				:pos="index"
				:key="index"></player>
	</div>
</template>

<script>
import Player from './Player';

export default {
	components: {
		Player
	},
	data() {
		return {
		players: [
			{id: 0},
			{id: 1},
			{id: 2},
			{id: 3},
			{id: 4},
		]
		}
	}
}
</script>

<style scoped>
.players{
	display: grid;
	grid-template-columns: repeat(5, 1fr);
}

</style>

