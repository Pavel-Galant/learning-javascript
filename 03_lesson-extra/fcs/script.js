'use strict';

const result = addFlight(
    bigWorld,
    {
        name: 'Airbus 747',
        seats: 36,
        businessSeats: 4,
    },
    makeTime(16, 0),
    'BH118',
);

bigWorld = result.world;

console.log(bigWorld);

let res = buyTicket(bigWorld, 'BH118', makeTime(5, 10), 'Petrov I. I.');

bigWorld = res.world;
console.log(bigWorld);

let res2 = buyTicket(bigWorld, 'BH118', makeTime(5, 10), 'Ivanov I. I.');
bigWorld = res2.world;
console.log(bigWorld, res2.world);

let res3 = buyTicket(bigWorld, 'BH118', makeTime(5, 10), 'Sidorov A. I.', 1);
bigWorld = res3.world;
console.log(bigWorld, res3.world);

let res4 = buyTicket(bigWorld, 'BH118', makeTime(5, 10), 'Zavrazhnov P. A.', 1);
bigWorld = res4.world;
console.log(bigWorld, res4.world);
