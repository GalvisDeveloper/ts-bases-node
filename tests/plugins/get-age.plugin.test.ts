import { getAge } from "../../src/plugins";



describe('Get Age', () => {
    it('should calculate the age correctly', () => {
        const birthDate = '1990-01-01';
        const expectedAge = new Date().getFullYear() - new Date(birthDate).getFullYear();

        const result = getAge(birthDate);

        expect(result).toEqual(expectedAge);
    });

    it('should return an error if birthDate is not provided', () => {
        expect.assertions(1);
        const result = getAge('');

        if (result instanceof Error) {
            expect(result.message).toBe('birthDate is required');
        }
    });

    it('getAge should return 0 years', () => {
        const spy = jest.spyOn(Date.prototype, 'getFullYear').mockReturnValue(1990);
        const birthDate = '1990-01-01';
        const expectedAge = getAge(birthDate);
        expect(expectedAge).toBe(0);
        spy.mockRestore();
    })
});