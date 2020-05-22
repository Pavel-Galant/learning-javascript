/**
 *  функция возвращает сумму кодов слова
 *
 * @params {string} word Слово
 * @returns {number} сумма кодов слова
 */
function sumCodes(word) {
    return word.split('').reduce((sum, ch) => { 
        return sum + ch.charCodeAt(0);
    },0);
}

/**
 *  функция возвращает сумму и количество положительных элементов массива
 *
 * @params {string} text Текст
 * @returns { {word: string: code: number}[] } массив объектов
 */
function wordStat(text) {
    return text.split(' ').reduce((res, word) => {
        return (word.length > 0)
            ? [...res,{
                word, 
                sum: sumCodes(word)
            }]
            : [...res];
    
    }, []);
}