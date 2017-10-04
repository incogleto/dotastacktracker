<template>
	<div class="player" v-on:click="toggleActive">
		<div class="name">{{playerName}}</div>
		<img class="avatar" v-bind:class="{active:isActive}" v-bind:src="avatar"></img>
	</div>
</template>

<script>
export default {
	name: 'Player',
	data (){
		return {
			
		};
	},
	props: [
		'playerId', 'pos'
	],
	asyncComputed: {
		async playerName (){
			for (var index = 0; index < this.$store.state.fam.length; index++) {
				if(this.playerId == this.$store.state.fam[index].id)
					return this.$store.state.fam[index].data.personaname;
			}
			throw new Error('Id not found');
		},
		async avatar (){
			for (var index = 0; index < this.$store.state.fam.length; index++) {
				if(this.playerId == this.$store.state.fam[index].id)
					return this.$store.state.fam[index].data.avatarfull;
			}
			throw new Error('Id not found');
		}
	},
	computed: {
		mask(){
			var flag;
			if(this.pos == 0)
				flag = 16;
			if(this.pos == 1)
				flag = 8;
			if(this.pos == 2)
				flag = 4;
			if(this.pos == 3)
				flag = 2;
			if(this.pos == 4)
				flag = 1;
			return flag;
		},
		isActive(){
			return (this.$store.state.activeFlag & this.mask);
		}
	},
	methods: {
		toggleActive(){
			var flag = this.$store.state.activeFlag ^ this.mask;
			this.$store.commit('SET_ACTIVEFLAG', flag);
			this.$forceUpdate();
		}
	}
};
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
