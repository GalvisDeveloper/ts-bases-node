import { getUserById } from '../../src/fundations/03-callbacks';

describe('Callbacks', () => {
    test('Get user byId should return an error if the user doesn`t exist', (done) => {
        // getUserById(id).then(user => {
        //     expect(user).toBe(`User with id: ${id} not found`);
        //     done();
        // }).catch(err => console.log(err));
        const id = 10;
        getUserById(id, (err, user) => {
            expect(err).toBe(`User with id: ${id} not found`);
            expect(user).toBeUndefined();
            done();
        });

    });

    test('Name of the user should be Cachon Doe', (done) => {

        getUserById(2, (err, user) => {
            expect(err).toBeUndefined();
            expect(user).toEqual({
                id: 2,
                name: 'Cachon Doe',
                age: 25,
            });
            done();
        });
    });

});