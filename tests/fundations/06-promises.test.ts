import { getPokemonById } from '../../src/fundations/06-promises';


describe('Promises', () => {

    it('should throw an error if id is not provided', async () => {
        await expect(getPokemonById()).rejects.toThrow('Id is required');
    });

    it('should return a response when id is provided', async () => {
        const pokemon = await getPokemonById(1);
        expect(pokemon).toBeDefined();
        expect(pokemon).toBe('bulbasaur');
    });

    it('should return an error if the pokemon doesn`t exists', async () => {
        const id = 99999;
        try {
            await expect(getPokemonById(id))
        } catch (error) {
            expect(getPokemonById(id)).rejects.toThrow(`Pokemon with id ${id} not found`);
        }
    });

});