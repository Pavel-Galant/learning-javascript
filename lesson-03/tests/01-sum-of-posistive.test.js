describe('sumOfPositive', () => {
    it('is empty', () => {
        const result = sumOfPositive([]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('[-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]', () => {
        const result = sumOfPositive([-91, -93, -45, 67, 96, 40, -34, 96, -42, 58]);
        assert.deepEqual(result, {count: 5, sum: 357});
    });
    it('[-91, 5, 10, 100, 5, 45, -34, 50, -42, 100, 200]', () => {
        const result = sumOfPositive([-91, 5, 10, 100, 5, 45, -34, 50, -42, 100, 200]);
        assert.deepEqual(result, {count: 8, sum: 515});
    });
    it('all positive numbers', () => {
        const result = sumOfPositive([100, 5, 15, 100, 5, 45, 35, 50, 800, 100, 200]);
        assert.deepEqual(result, {count: 11, sum: 1455});
    });
    it('all negative numbers', () => {
        const result = sumOfPositive([-100, -5, -15, -100, -5, -45, -35, -50, -800, -100, -200]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
    it('array with 0', () => {
        const result = sumOfPositive([0, 5, 15, 100, 0, -45, 0, -50, 800, 100, 200]);
        assert.deepEqual(result, {count: 6, sum: 1220});
    });
    it('all 0', () => {
        const result = sumOfPositive([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
        assert.deepEqual(result, {count: 0, sum: 0});
    });
});
