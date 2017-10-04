<template>
	<div>
		<div class='loading' v-if="!$store.state.loaded">
			Loading
		</div>
		<div class='players' v-if="$store.state.loaded">
			<player v-for="(player, index) in players" 
					:playerId="$store.state.fam[index].id" 
					:pos="index"
					:key="index"></player>
		</div>
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
		};
	}
};
</script>

<style scoped>
.players{
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 2px;
	margin: 0 auto;
}

.loading{
	color: #C1CCC2;
	text-align: center;
	font-size: 3em;
	margin: 20px;
}
/*
@media screen and (min-width: 1200px){
	.players{
		grid-template-columns: repeat(3, 1fr);
	}
}

@media screen and (min-width: 1400px){
	.players{
		grid-template-columns: repeat(5, 1fr);
	}
}*/
</style>

