// 6. Постройте алгоритм реверсии слова
// Например, если аргумент слово «cat», то результатом должно быть слово «tac».
// Слово запрашивать у пользователя

const  str = prompt('Введите слово');
alert(`Реверсия слова - ${str.split('').reverse().join('')}`)
// или так
alert(`Реверсия слова - ${[...str].reverse().join('')}`)
// или так
alert(`Реверсия слова - ${[...str].reduce((reverse, ch)=> ch + reverse, '')}`)