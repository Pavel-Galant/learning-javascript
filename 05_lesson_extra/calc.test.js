
describe('rpnTest', () => {
    it('(5+5)/2=5)', () => {
        const result = rpn(yard('( 5 + 5 ) / 2'.split(' ')));
        assert.equal(result, 5);
    });
    it('0 + 2 = 2', () => {
        const result = rpn(yard('0 + 2'.split(' ')));
        assert.equal(result, 2);
    });
    it('( 5 + 5 ) / 2 + 15 / 3 + 45 * 2 = 100', () => {
        const result = rpn(yard('( 5 + 5 ) / 2 + 15 / 3 + 45 * 2'.split(' ')));
        assert.equal(result, 100);
    });
    it('0 + 2 ( = error', () => {
        const result = rpn(yard('0 + 2 ('.split(' ')));
        assert.equal(result, 'error');
    });
});
