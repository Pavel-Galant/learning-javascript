//2. Нормализация введенного времени в 24-часовой формат
//Привести заданное время в формат hh:mm где hh - час с ведущим нулем (01, 07, 12). Примеры входных данных и результата:

//const tm = '12: 07 am';
//const tm = '12: 07';
//const tm = '03.2 pm';
//const tm = '1-17 am';
const tm = '34:67';

const formatingTime  = tm.replace(/(\d{1,2})\D+(\d{1,2}).*/, (match, h, m) => { 
    let hh = +h;
    let mm = +m;
    let pam = match.replace(/.*([a|p]m)/, (match, n) => {
        return n;
    });
    if (pam === match) pam = ''
    
    if (pam === 'pm') {
        hh += 12
    } else if (pam === 'am'){ 
        if (hh > 11) hh -= 12
    }
    
    return (hh > 23 || mm > 59) ? 'error' : `${(hh+'').padStart(2, '0')}:${(mm+'').padStart(2, '0')}`;
});
console.log(formatingTime);