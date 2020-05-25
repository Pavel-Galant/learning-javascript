describe('parseTemplate', () => {
    it(`not found 'title'`, () => {
        assert.throws(() => parseTemplate(document.getElementById('item1'), 
            {
                description: 'The first program',
            }), Error, `Not found property title in data Object`);
    });
    it(`done test`, () => {
        parseTemplate(
            document.getElementById('item1'),
            {
              title: 'Hello world',
              description: 'The first program',
            }
        );
        assert.equal('Hello world', document.querySelector('div#item1 > h3').innerText);
        assert.equal('The first program', document.querySelector('div#item1 > p').innerText);
    });
});