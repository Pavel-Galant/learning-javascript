// 1. Написать функцию, которая принимает массив чисел и возвращает сумму и количество отрицательных элементов массива.

function negativeSum(...values) {
    const numbers = values.reduce((res, item) => {
        (Array.isArray(item))
            ? Array.prototype.push.apply(res, item) // merge array
            : res.push(item);
        return res;
    }, []);

    return numbers.reduce((res, n) => {
        if (n < 0) {
            res.count++;
            res.sum += n;
        }
        return res;
    },{count: 0, sum: 0});
}

console.log(negativeSum(91, 93, 45, -67, -96, -40, 34, -96, 42, -58));
console.log(negativeSum(-91, 93, 45, -67, -96, -40, 34, 96, 42, -58, -10.7, 90, -1));
console.log(negativeSum([-91, 93], 45, [-67, -96, -40, 34, 96, 42, -58, -10.7], 90, -1))