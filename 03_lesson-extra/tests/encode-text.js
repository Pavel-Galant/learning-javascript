/**
 *  функция возвращает сумму кодов слова
 *
 * @param {string} word Слово
 * @returns {number} сумма кодов слова
 */
function sumCodes(word) {
    return word.split('').reduce((sum, ch) => { 
        return sum + ch.charCodeAt(0);
    },0);
}


/**
 *  функция принимает текст, выбирает все уникальные слова в нем, 
 *  для каждого слова подсчитывает количество вхождений и присваивает уникальный код.
 *
 * @param {string} txt текст
 * @returns {EncodeTextResult}
 */
function encodeText(txt) {
    return txt.split(' ').reduce((result, word) => {
        if (word === '') return result;
        let index = result.dictionary.findIndex(item => item.word === word);
        if (index === -1) { // первое вхождение слова
            // генерим случайный код
            let code, exists;
            do {
                // делаем функцию чистой, генерируем код на основе sumCodes
                code = sumCodes(word).toString(36).toUpperCase(); 
                exists = result.dictionary.find(item => item.code === code);
            } while (exists);
            index += result.dictionary.push({
                word,
                count: 0,
                code 
            });
        } 
        result.dictionary[index].count++;
        result.encodedText += (result.encodedText === '') 
            ? `${result.dictionary[index].code}` 
            : `,${result.dictionary[index].code}`;
        return result;
    },{dictionary: [], encodedText: ''});
};