import { character } from '../../src/fundations/02-destructuring';


describe('Destructuring', () => {

    test('Someone should be a data from the heroes array', () => {
        const someone = 'Hulk';
        character.find(ch => ch === someone);

        expect(character).toContain(someone);
    })

    test('Someone should be a data from the heroes array', () => {
        const someone = 'Hulk';
        const [, , hero] = character;

        expect(hero).toBe(someone);
    });

    test('IronMan should be the first character', () => {
        const firstCharacter = 'Iron Man';
        const [first] = character;
        expect(first).toBe(firstCharacter);
    })

});