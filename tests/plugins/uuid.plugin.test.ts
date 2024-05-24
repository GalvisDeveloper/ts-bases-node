import { assignId } from '../../src/plugins/uuid.plugin';


describe('assignId', () => {
    it('should return a valid UUID', () => {
        const id = assignId();
        expect(id).toMatch(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i);
    });

    it('should return a different UUID', () => {
        const id1 = assignId();
        const id2 = assignId();
        expect(id1).not.toEqual(id2);
    });
});