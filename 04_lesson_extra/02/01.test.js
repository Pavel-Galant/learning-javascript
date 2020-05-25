describe('nodeDisplay', () => {
    it(`test`, () => {
        let out = [];
        const original = window.console;
        window.console = {
            log: function(){
                // перехватываем вывод console.log
                out.push(Array.prototype.slice.apply(arguments).join(' '));
                original.log.apply(original, arguments); //  вызываем оригинальный метод
            }
        }
        displayNode(document.documentElement);
        assert.equal(out[4],'   3 #text \n    ')
        assert.equal(out[6],'    3 #text Testing Flight Control System')
    });
});