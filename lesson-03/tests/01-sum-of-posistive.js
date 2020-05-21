/**
 *  функция возвращает сумму и количество положительных элементов массива
 *
 * @params {number[]} arr Массив целых чисел
 * @returns { {count: number, sum: number} } объект
 */
function sumOfPositive(arr){
    return arr.reduce((res, n) => {
        if (n > 0) {
            res.count++;
            res.sum += n;
        }
        return res;
    },{count: 0, sum: 0});    
}
