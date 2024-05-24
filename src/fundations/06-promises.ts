import { httpClientPlugin as http } from "../plugins";


export const getPokemonById = async (id?: number) => {
	if (!id) {
		throw Error('Id is required');
	}

	const { name } = await http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
	if (!name) throw Error(`Pokemon with id ${id} not found`);
	return name;
};
