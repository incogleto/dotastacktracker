<template>
	<div class="player" v-on:click="toggleActive">
		<div class="name">{{playerName}}</div>
		<img class="avatar" v-bind:class="{active:isActive}" v-bind:src="avatar"></img>
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
		'playerId', 'pos'
	],
	asyncComputed: {
		async playerName (){
			return this.$store.state.fam[this.pos].data.personaname;
		},
		async avatar (){
			return this.$store.state.fam[this.pos].data.avatarfull;
		}
	},
	computed: {
		mask(){
			var flag;
			if(this.pos == 0)
				flag = 16;
			if(this.pos == 1)
				flag = 8
			if(this.pos == 2)
				flag = 4
			if(this.pos == 3)
				flag = 2
			if(this.pos == 4)
				flag = 1
			return flag;
		},
		isActive(){
			console.log(this.$store.state.activeFlag);
			return (this.$store.state.activeFlag & this.mask);
		}
	},
	methods: {
		toggleActive(){
			var flag = this.$store.state.activeFlag ^ this.mask;
			this.$store.commit("SET_ACTIVEFLAG", flag);
			this.$forceUpdate();
		}
	}
}
</script>

<style scoped>
.name{
	font-size: 1.5em;
	padding-bottom: 10px; 
}

.player{
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	margin: 0 auto;
	margin-top: 20px;
	text-align: center;
	color: #C1CCC2;
	background-color: #242F39;
	padding: 10px;
}

.avatar{
	width: 100%;
}

.avatar, :not(.active){
	filter: grayscale(100%);
}

.active{
	filter: none;
}

</style>
