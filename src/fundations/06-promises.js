const { httpClientPlugin: http } = require('../public/http-client.plugin');

const getPokemonById = async (id) => {
	if (!id) {
		throw Error('Id is required');
	}
	const response = await http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
	return response;
};

module.exports = {
	getPokemonById,
};
