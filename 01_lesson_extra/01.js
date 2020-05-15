//1. Выведите в консоль таблицу умножения пример (частично):
//    1 2 3 4
// 2 2 4 6 8
// 3 3 6 9 12
// 4 4 8 12 16

for (let i = 0; i < 11; i++) {
    let row = (i > 0) ? [(i + '').padStart(3)] : ['   '];
    for (let j = 1; j < 11; j++) {
        if (i === 0 ){
            row.push((j + '').padStart(3));
        } else {
            row.push((i*j + '').padStart(3));
        }
    }
    console.log(row.join(' '))
}