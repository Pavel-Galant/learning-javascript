// 5. Замена слово А на слово B только в предложениях, где имеется слово C
// Текст и слова А, В можно задать в коде решения
// Пример:
// Заменить “Java” на “JS” только в предложении где есть слово “overloading”

const A = 'Java',
      B = 'JS',
      C = 'overloading';  

const txt = `The syntax of Java is largely influenced by C++. The syntax of overloading Java is overloading largely influenced by C++. 
Unlike C++, Java does not support operator overloading. Java uses comments similar to those of C++.`;
console.log(txt);
console.log();

// регулярка не учитывает, если C начало предложения 
const outTxt  = txt.replace(new RegExp(`[A-Z][^.?!]+${C}[^.?!]*[.!?]`, 'g'), (match) => { 
    return match.replace(A,B);
});
console.log(outTxt)
