// 4. Шифр подменой - декодировщик
// Задача, обратная задаче, рассмотренной на лайв кодинге.
// Дается символьная строка, использованная для кодирования, и несколько закодированных текстов, требуется написать программу для декодирования

// кодировщик

const keyCodeA = 'a'.charCodeAt(0);
let key = 'sqnzbeuigvxtmhfpdcjyoakwlr';

let text = `Back in the good old days | the "Golden Era" of Computers, it was easy 
to separate the men from the boys (sometimes called "Real Men" and "Quiche
Eaters" in the literature). During this period, the Real Men were the ones
that understood computer programming, and the Quiche Eaters were the ones
that didn't.`;
text = text.toLocaleLowerCase();
let encoded = '';

for (let index = 0; index < text.length; index++) {
    let code = text.charCodeAt(index) - keyCodeA;
    if (code < 0 || code >= 26)
        encoded += ' ';
    else
        encoded += key[code];
}

console.log(text);
console.log();
console.log(encoded);
console.log();

// decode
let decoded = '';
for (let index = 0; index < encoded.length; index++) {
    let pos = key.indexOf(encoded[index]);
    //console.log(pos); break;
    let ch = ' ';
    if (pos > -1) {
        ch = String.fromCharCode(pos + keyCodeA);
    }
    decoded += ch
}
console.log(decoded);