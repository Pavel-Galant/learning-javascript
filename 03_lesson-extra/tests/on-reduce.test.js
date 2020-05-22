describe('mapOnReduce', () => {
    it('empty array', () => {
        const result = Array().mapOnReduce(v => v*2);
        assert.deepEqual(result, []);
    });
    it('empty array', () => {
        const result = Array(5).mapOnReduce(v => v*2);
        assert.deepEqual(result, []);
    });
    it('[1,2,3,4,5]', () => {
        const result = Array(1,2,3,4,5).mapOnReduce(v => v*2);
        assert.deepEqual(result, [2,4,6,8,10]);
    });
    it('invalid parameter array', () => {
        //const result = Array(1,2,3,4,5).mapOnReduce([1,2,3]);
        //assert.deepEqual(result, [2,4,6,8,10]);
        assert.throws(() => Array(1,2,3,4,5).mapOnReduce([1,2,3]), Error, "function expected");
    });
    it('invalid parameter object', () => {
        //const result = Array(1,2,3,4,5).mapOnReduce([1,2,3]);
        //assert.deepEqual(result, [2,4,6,8,10]);
        assert.throws(() => Array(1,2,3,4,5).mapOnReduce({}), Error, "function expected");
    });
});

describe('filterOnReduce', () => {
    it('empty array', () => {
        const result = Array().filterOnReduce(v => v > 0);
        assert.deepEqual(result, []);
    });
    it('empty array', () => {
        const result = Array(5).filterOnReduce(v => v > 0);
        assert.deepEqual(result, []);
    });
    it('[-5,6,-8,9, 0, 56]', () => {
        const result = Array(-5,6,-8,9, 0, 56).filterOnReduce(v => v > 0);
        assert.deepEqual(result, [6,9,56]);
    });
    it('trim equal', () => {
        const result = Array('Hello ', 'php', ' JavaScript ', 'Flutter', 'Dart').filterOnReduce((word) => {
            return word.trim() !== word;
        });
        assert.deepEqual(result, ['Hello ',' JavaScript ']);
    });
    it('invalid parameter array', () => {
        assert.throws(() => Array(1,2,3,4,5).filterOnReduce([1,2,3]), Error, "function expected");
    });
    it('invalid parameter object', () => {
        assert.throws(() => Array(1,2,3,4,5).filterOnReduce({}), Error, "function expected");
    });
});