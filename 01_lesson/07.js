// 7. Напишите программу, позволяющую удалить все лишние пробелы в тексте оставив по одному.
// Текст запрашивать у пользователя
const  str = prompt('Введите любую фразу');
alert(str.replace(/\s\s+/g, ' '))