describe('sumCodes', () => {
    it('Lorem', () => {
        const result = sumCodes('Lorem');
        assert.equal(result, 511);
    });
    it('amet.', () => {
        const result = sumCodes('amet.');
        assert.equal(result, 469);
    });
    it('empty string', () => {
        const result = sumCodes('');
        assert.equal(result, 0);
    });
});
describe('wordStat', () => {
    it('Lorem ipsum dolor sit amet.', () => {
        const result = wordStat('Lorem ipsum dolor sit amet.');
        assert.deepEqual(result, [
            { word: 'Lorem', sum: 511 },
            { word: 'ipsum', sum: 558 },
            { word: 'dolor', sum: 544 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }
        ]);
    });
    it('Some spaces', () => {
        const result = wordStat('Lorem   ipsum dolor sit   amet.');
        assert.deepEqual(result, [
            { word: 'Lorem', sum: 511 },
            { word: 'ipsum', sum: 558 },
            { word: 'dolor', sum: 544 },
            { word: 'sit', sum: 336 },
            { word: 'amet.', sum: 469 }
        ]);
    });
    it('Only spaces', () => {
        const result = wordStat('       ');
        assert.deepEqual(result, []);
    });
    it('Empty string', () => {
        const result = wordStat('');
        assert.deepEqual(result, []);
    });
});