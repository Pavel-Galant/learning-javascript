/* 2. Написать функцию, которая принимает текст, и возвращает массив объектов со структурой
word: само слово
code: сумма кодов всех символов слова
Словом можно считать символы между пробелами
Пример
исходный текст:
Lorem ipsum dolor sit amet.
результат:
[
  { word: 'Lorem', sum: 511 },
  { word: 'ipsum', sum: 558 },
  { word: 'dolor', sum: 544 },
  { word: 'sit', sum: 336 },
  { word: 'amet.', sum: 469 }
] */

function getDetailsWords(txt) {
    return txt.split(' ').map(word => {
        return {
            word, 
            sum: word.split('').reduce((sum, ch) => { 
                return sum + ch.charCodeAt(0);
            },0)
        };
    });
};

console.log(getDetailsWords('Lorem ipsum dolor sit amet.'))