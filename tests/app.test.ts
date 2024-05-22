// AAA => Arrange, Act, Assert
describe('App', () => {

    it('should be 30 my operation', () => {
        // Arrange
        const num1 = 10;
        const num2 = 20;

        // Act
        const sum = num1 + num2;

        // Assert
        expect(sum).toBe(30);
    });

});

