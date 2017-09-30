const baseURL = '67.205.132.235:8081/api';

export const getPlayerHistory = async (playerId) => {
	const json = await fetch(`http://${baseURL}/getPlayerHistory/${playerId}`).then(r => r.json());
	if(json.result.status != 1) throw new Error('Error fetching match history');
	return json.result.matches;
};

export const getPlayerSummary = async (playerId) => {
	const json = await fetch(`http://${baseURL}/player/${playerId}`).then(r => r.json());
	if(json.response.players[0].steamid != playerId) throw new Error('Error fetching profile');
	return json.response.players[0];
};