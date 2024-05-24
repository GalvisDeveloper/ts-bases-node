import { httpClientPlugin } from "../../src/plugins";

describe("httpClientPlugin", () => {
    describe("get", () => {
        it("should make a GET request and return the response data", async () => {
            // Arrange
            const url = "https://example.com";

            // Act
            const result = await httpClientPlugin.get(url);

            // Assert
            expect(result).toBeDefined();
        });

        it("should handle errors and return the error object", async () => {
            // Arrange
            const url = "https://nonexistent-url.com";

            // Act
            try {
                await httpClientPlugin.get(url);
            } catch (error) {
                // Assert
                expect.assertions(3);
                expect(error).toBeDefined();
                expect(error).toBeInstanceOf(Error);
                if (error instanceof Error) expect(error.message).toContain('Request failed'); // Asegúrate de que este sea el mensaje de error que esperas
            }
        });
    });

    describe("post", () => {
        it("should make a POST request with the provided body and return the response data", async () => {
            // Arrange
            const url = "https://example.com";
            const body = { key: "value" };

            // Act
            const result = await httpClientPlugin.post(url, body);

            // Assert
            expect(result).toBeDefined();
        });

        it("should handle errors and return the error object", async () => {
            // Arrange
            const url = "https://nonexistent-url.com";
            const body = { key: "value" };

            // Act
            const result = await httpClientPlugin.post(url, body);

            // Assert
            expect(result).toBeDefined();
        });
    });
});