import { buildLogger, logger as winstonLogger } from '../../src/plugins/logger.plugin';


describe("LoggerPlugin", () => {

    it('BuildLogger should return a function logger', () => {
        const logger = buildLogger("test");
        expect(typeof logger.log).toBe('function');
        expect(typeof logger.error).toBe('function');
    })

    it("should log a message with the correct service name", () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, "log");

        const message = "Test message";
        const service = "user-service";

        const logger = buildLogger(service);

        logger.log(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith("info", expect.objectContaining({ message, service }));
    });

    it("should log an error message with the correct service name and timestamp", () => {
        const winstonLoggerMock = jest.spyOn(winstonLogger, "error");

        const at = new Date();
        const message = "Test error";
        const service = "user-service";

        const logger = buildLogger(service);

        logger.error(message);

        expect(winstonLoggerMock).toHaveBeenCalledWith('error', { message, service, at });
    });
});