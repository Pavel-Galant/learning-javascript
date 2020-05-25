describe('flightReport', () => {
    it(`invalid type (param 'world')`, () => {
        assert.throws(() => flightReport('test', 'BH118', makeTime(11, 40)), Error, `param 'world' - expected object`);
    });
    it(`invalid type (param 'flight')`, () => {
        assert.throws(() => flightReport(bigWorld, {}, makeTime(11, 40)), Error, `param 'flight' - expected string`);
    });
    it(`invalid type (param 'nowTime')`, () => {
        assert.throws(() => flightReport(bigWorld, 'BH118', 'makeTime(11, 40)'), Error, `param 'nowTime' - expected number`);
    });
    it(`not found 'BH119'`, () => {
        assert.throws(() => flightReport(bigWorld, 'BH119', makeTime(11, 40)), Error, `Not found BH119 in flights`);
    });
    it(`report on 11-40'`, () => {
        const result = flightReport(bigWorld, 'BH118', makeTime(11, 40));
        assert.deepEqual(result, {
            complete: false,
            countOfSeats: 36,
            flight: "BH118",        
            registeredSeats: 1,
            registration: false,
            reservedSeats: 4,
            countOfReservations: 1,
            countOfReverts: 4,
            percentOfReverts: 100
        });
    });
});