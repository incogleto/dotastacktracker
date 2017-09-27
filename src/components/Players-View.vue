<template>
	<div class='players'>
		<player v-bind:playerId="''+7656+$store.state.fam[0]"></player> 
		<player v-bind:playerId="''+7656+$store.state.fam[1]"></player>
		<player v-bind:playerId="''+7656+$store.state.fam[2]"></player>
		<player v-bind:playerId="''+7656+$store.state.fam[3]"></player>
		<player v-bind:playerId="''+7656+$store.state.fam[4]"></player>
	</div>
</template>

<script>
import Player from './Player';

export default {
	components: {
		Player
	}
}
</script>

<style scoped>
.players{
	display: grid;
	grid-template-columns: repeat(5, 1fr);
}

</style>

