import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		fam: [
			{
				id:'76561198160033917',
				data: {},
				matchHistory: []
			}, //squid
			{
				id:'76561198025336218',
				data: {},
				matchHistory: []
			}, //sinan
			{
				id:'76561198019644728',
				data: {},
				matchHistory: []
			}, //leto
			{
				id:'76561198038828010',
				data: {},
				matchHistory: []
			}, //james
			{
				id:'76561198027449543',
				data: {},
				matchHistory: []
			}  //ian
		],
		matchHistory: [],
		filteredHistory: [],
		activeFlag: 31,
		uniq: true,
		loaded: false
	},
	mutations: {
		SET_HISTORY: (state, history) => {
			if (history) return state.matchHistory = history;
			return state.matchHistory = [];
		},
		SET_FILTERED: (state, history) => {
			if (history) return state.filteredHistory = history;
			return state.filteredHistory = [];
		},
		SET_ACTIVEFLAG: (state, active) => {
			if (active) return state.activeFlag = active;
			return state.activeFlag = 31;
		},
		SET_FAM: (state, fam) => {
			if (fam) return state.fam = fam;
			return state.fam = [];
		},
		SET_LOADED: (state, loaded) => {
			if (loaded) return state.loaded = loaded;
			return state.loaded = false;
		}
	},
	getters: {
		getActiveFlag: state => () => state.activeFlag
	}
});

// 76561198160033917, //squid
// 76561198025336218, //sinan
// 76561198019644728, //leto
// 76561198038828010, //james
// 76561198027449543  //ian