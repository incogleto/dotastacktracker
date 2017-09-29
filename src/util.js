import bigInt from 'big-integer';

export const steamid32 = (id64) => {
	return bigInt(id64).subtract('76561197960265728');
};

export const steamid64 = (id32) => {
	return bigInt(id32).add('76561197960265728');
};