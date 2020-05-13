let sum = 0;
let step = 0;
while (true) {
    const a = prompt('Введите число');
    if (+a > 0 || +a < 0) {
        step++;
        sum += +a;
        console.log(`Текущая сумма - ${sum}\nСреднее арифметическое - ${sum/step}`);
    } else {
        break;
    }
}
if (step > 0) {
    alert(`Текущая сумма - ${sum}\nСреднее арифметическое - ${sum/step}`);
} else {
    alert('Вы не ввели ниодного числа!')
}
