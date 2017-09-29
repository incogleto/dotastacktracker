<template>
	<div class='match'>
		<div class="time">
			<div class="absTime">{{this.time.format('h:mm a')}}</div>
			<div class="relTime">{{this.time.fromNow()}}</div>
		</div>
		<div class='id'>{{this.matchData.match_id}}</div>
		<img v-for="(avatar, index) in avatars" :key="index" :src="avatars[index]"></img>
		<a class="dotabuff" v-bind:href="'http://dotabuff.com/matches/' + this.matchData.match_id">dotabuff</a>  
		<a class="opendota" v-bind:href="'http://opendota.com/matches/' + this.matchData.match_id">opendota</a> 
	</div>
</template>

<script>
import {steamid32} from "@/util";
import moment from 'moment';

export default {
  name: "Match",
  props: [
	  'matchData'
  ],
  data() {
	  return {
		  avatars: []
	  }
  },
  created(){
	  this.getAvatars();
  },
  methods: {
	  getAvatars(){
		  for (var x = 0; x < this.$store.state.fam.length; x++) {
			  for (var y = 0; y < this.matchData.players.length; y++) {
				  if(this.matchData.players[y].account_id == steamid32(this.$store.state.fam[x].id)){
					  this.avatars.push(this.$store.state.fam[x].data.avatar);
				  }
			  }
		  }
	  },
	  resetAvatars(){
		  this.avatars = [];
	  }
  },
  computed: {
	  time(){
		  return moment.unix(this.matchData.start_time);
	  }
  },
  watch:{
	  matchData: function(){
		  this.resetAvatars();
		  this.getAvatars();
	  }
  }
}
</script>

<style scoped>

.match{
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
	background-color: #242F39;
	margin-bottom: 5px;
	line-height: 2em;
	font-size: 1.5em;
	padding-left: 10px;
}

a{
	float: right;
	padding: 0 10px;
	color:#C1CCC2;
	text-decoration: none;
	text-shadow: 1px 1px 2px rgba(0,0,0,0.12);
}

.dotabuff{
	background-color: #ED3B1C;
}

.opendota{
	background-color: #66BBFF;
}

img{
	vertical-align: middle;
	margin: 0 5px;
}

.time{
	float: left;
	margin: 0;
	margin-right: 20px;
	line-height: 1em;
	margin-top: .1em;
	text-align: center;
}

.absTime{
	font-size: .8em;
}

.relTime{
	font-size: .6em;
}

.id{
	float: left;
}
</style>
