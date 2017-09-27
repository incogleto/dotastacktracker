<template>
	<div class="player">
		<h1>{{playerName}}</h1>
		<img v-bind:src="avatar"></img>
	</div>
</template>

<script>
import {getPlayerSummary} from '@/api';

export default {
	name: "Player",
	data (){
		return {
			
		}
	},
	props: [
		'playerId'
	],
	asyncComputed: {
		async playerName (){
			return getPlayerSummary(this.playerId).then((data)=>{
				return data.personaname;
			})
		},
		async avatar (){
			return getPlayerSummary(this.playerId).then((data)=>{
				return data.avatarfull;
			})
		}
	}
}
</script>

<style scoped>
.player{
	min-width: 300px;
	border: 1px solid grey;
	margin: 0 auto;
}
</style>
