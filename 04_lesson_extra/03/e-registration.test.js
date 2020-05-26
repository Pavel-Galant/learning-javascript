describe('eRegistration', () => {
    it(`invalid type (param 'word')`, () => {
        assert.throws(() => eRegistration('test', '', 'Sidorov A. I.', makeTime(11, 40)), Error, `param 'word' - expected object`);
    });
    it(`invalid type (param 'ticket')`, () => {
        assert.throws(() => eRegistration(bigWorld, {}, 'Sidorov A. I.', makeTime(11, 40)), Error, `param 'ticket' - expected string`);
    });
    it(`invalid type (param 'fullName')`, () => {
        assert.throws(() => eRegistration(bigWorld, 'BH118-2', [], makeTime(11, 40)), Error, `param 'fullName' - expected string`);
    });
    it(`invalid type (param 'nowTime')`, () => {
        assert.throws(() => eRegistration(bigWorld, 'BH118-2', 'Sidorov A. I.',' makeTime(11, 40)'), Error, `param 'nowTime' - expected number`);
    });
    it(`invalid flight 'BH119'`, () => {
        assert.throws(() => eRegistration(bigWorld, 'BH119-0', 'Sidorov A. I.', makeTime(11, 40)), Error, `Not found BH119 in flights`);
    });
    it(`invalid registration time`, () => {
        assert.throws(() => eRegistration(bigWorld, 'BH118-2', 'Sidorov A. I.', makeTime(2, 40)), Error, `Invalid registration time`);
    });
    it(`Not found ticket`, () => {
        assert.throws(() => eRegistration(bigWorld, 'BH118-50', 'Sidorov A. I.', makeTime(12, 15)), Error, `Not found ticket`);
    });
    it(`Not found fullName`, () => {
        assert.throws(() => eRegistration(bigWorld, 'BH118-2', 'NotSidorov A. I.', makeTime(12, 15)), Error, `Not found ticket`);
    });
    it(`Success registration`, () => {
        const result = eRegistration(bigWorld, 'BH118-2', 'Sidorov A. I.', makeTime(12, 15));
        assert.equal(result.flights['BH118'].tickets[2].registrationTime, makeTime(12, 15));
    });
    it(`Registration already passed`, () => {
        assert.throws(() => eRegistration(bigWorld, 'BH118-2', 'Sidorov A. I.', makeTime(12, 15)), Error,`Registration already passed`);
    });
});