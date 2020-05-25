describe('revertTicket', () => {
    it(`invalid type (param 'world')`, () => {
        assert.throws(() => revertTicket('test', 'BH118', makeTime(11, 40)), Error, `param 'world' - expected object`);
    });
    it(`invalid type (param 'ticket')`, () => {
        assert.throws(() => revertTicket(bigWorld, {}, makeTime(11, 40)), Error, `param 'ticket' - expected string`);
    });
    it(`not found 'BH119'`, () => {
        assert.throws(() => revertTicket(bigWorld, 'BH119', makeTime(11, 40)), Error, `Not found BH119 in flights`);
    });
    it(`not found ticket`, () => {
        assert.throws(() => revertTicket(bigWorld, 'BH118-200', makeTime(11, 40)), Error, `Not found ticket`);
    });
    it(`not revert (type = business class)`, () => {
        const result = revertTicket(bigWorld, 'BH118-2', makeTime(9, 40))
        assert.equal(result, false);
    });
    it(`revert (type = econom)`, () => {
        const result = revertTicket(bigWorld, 'BH118-1', makeTime(9, 40))
        assert.equal(result, true);
    });
});