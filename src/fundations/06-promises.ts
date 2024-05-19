import { httpClientPlugin as http } from "../plugins";


export const getPokemonById = async (id: number) => {
	if (!id) {
		throw Error('Id is required');
	}
	const response = await http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
	return response;
};
