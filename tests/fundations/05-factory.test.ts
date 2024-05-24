import { buildMakePerson } from '../../src/fundations/05-factory';


describe('Factory', () => {

    const getUUID = () => '1234-1234-1234-1234';
    const getAgeLocal = () => 27;

    test('BuildMakePerson should return a function', () => {
        const makePerson = buildMakePerson({ getAge: getAgeLocal, assignId: getUUID });
        expect(makePerson).toBeInstanceOf(Function);
    });

    test('BuildMakePerson should return a person', () => {
        const makePerson = buildMakePerson({ getAge: getAgeLocal, assignId: getUUID });
        const person = makePerson('Cristian', '1995-05-05');

        expect(person).toEqual({
            id: '1234-1234-1234-1234',
            name: 'Cristian',
            birthDate: '1995-05-05',
            age: 27,
        });
    });


});