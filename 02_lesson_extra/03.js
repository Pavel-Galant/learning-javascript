/*3. Написать функцию encodeText, которая принимает текст, выбирает все уникальные слова в нем, для каждого слова подсчитывает количество вхождений и присваивает уникальный код.
Словом считать последовательность символов между пробелами.
Далее перекодирует текст, заменяя слова из словаря на код слова
Уникальный код - случайное число (желательно - в 16ричной или 36ричной системе)
Проверить что код действительно уникален для этого словаря
Возвращает объект
{
  dictionary: [
    {
      word: слово
      count: количество использований в тексте
      code: уникальный код.
    }
  ],
  encodedText: перекодированный текст
}*/

function encodeText(txt) {
    return txt.split(' ').reduce((result, word) => {
        let index = result.dictionary.findIndex(item => item.word === word);
        if (index === -1) { // первое вхождение слова
            // генерим случайный код
            let code;
            do {
                // случайное число от 1 до 1000 в 36-ричном виде
                const rand = Math.floor(1 + Math.random() * 1000);
                code = rand.toString(36).toUpperCase() 
                exists = result.dictionary.find(item => item.code === code);
            } while (exists);
            index += result.dictionary.push({
                word,
                count: 0,
                code 
            });
        } 
        result.dictionary[index].count++;
        result.encodeText += (result.encodeText === '') 
            ? `${result.dictionary[index].code}` 
            : ` ${result.dictionary[index].code}`;
        return result;
    },{dictionary: [], encodeText: ''});
};

console.log(encodeText('Lorem ipsum ipsum dolor.'))
console.log(encodeText("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium totam rem aperiam eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo"));