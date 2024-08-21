import greeting from '../../src/utils';

describe('greeting function', () => {
    it('should return \'Hello World\'', async () => {
        expect(greeting()).toBe('Hello World');
    });
});
