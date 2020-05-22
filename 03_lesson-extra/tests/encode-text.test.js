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

describe('encodeText', () => {
    it('Empty text', () => {
        const result = encodeText('');
        assert.deepEqual(result, {dictionary:[],encodedText:""});
    });
    it('All spaces', () => {
        const result = encodeText('');
        assert.deepEqual(result, {dictionary:[],encodedText:""});
    });
    it('Some spaces', () => {
        const result = encodeText('Lorem    ipsum');
        assert.deepEqual(result, {
            dictionary:[
                {
                    word:"Lorem",
                    count:1,
                    code:"E7"
                },
                {
                    word:"ipsum",
                    count:1,
                    code:"FI"
                }
            ],
            encodedText:"E7,FI"
        });
    });
    it('Lorem ipsum ipsum dolor.', () => {
        const result = encodeText('Lorem ipsum ipsum dolor.');
        assert.deepEqual(result, {
            dictionary:[
                {
                    word:"Lorem",
                    count:1,
                    code:"E7"
                },
                {
                    word:"ipsum",
                    count:2,
                    code:"FI"
                },
                {
                    word:"dolor.",
                    count:1,
                    code:"GE"
                }
            ], encodedText:"E7,FI,FI,GE"});
    });

    it('Lorem ipsum ipsum dolor. Lorem Lorem', () => {
        const result = encodeText('Lorem ipsum ipsum dolor. Lorem Lorem');
        assert.deepEqual(result, {
            dictionary:[
                {
                    word:"Lorem",
                    count:3,
                    code:"E7"
                },
                {
                    word:"ipsum",
                    count:2,
                    code:"FI"
                },
                {
                    word:"dolor.",
                    count:1,
                    code:"GE"
                }
            ], encodedText:"E7,FI,FI,GE,E7,E7"});
    });

    
});