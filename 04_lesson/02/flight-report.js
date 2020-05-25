'use strict';

/**
 * Функция генерации отчета по рейсу
 *
 * Отчет строится на основании данных, содержащихся в параметре flight
 *
 *  * проверка рейса
 *  * подсчет
 *
 * @param {World} world
 * @param {string} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(world, flight, nowTime) {
    if (typeof world !== 'object') throw new Error(`param 'world' - expected object`);
    if (typeof flight !== 'string') throw new Error(`param 'flight' - expected string`);
    if (typeof nowTime !== 'number') throw new Error(`param 'nowTime' - expected number`);
    if (!(flight in world.flights)) throw new Error(`Not found ${flight} in flights`);

    const itemFlight = world.flights[flight];  
    const registration = 
        (itemFlight.registrationStarts <= nowTime && itemFlight.registartionEnds >= nowTime);
    const complete = (nowTime > itemFlight.registartionEnds);
    const countOfSeats = itemFlight.seats;
    const reservedSeats = itemFlight.tickets.length;
    const registeredSeats = itemFlight.tickets.reduce((res, item) => {
        res += (item.registrationTime && item.fullName !== '') ? 1 : 0;
        return res;
    }, 0);
    const countOfReservations = itemFlight.tickets.reduce((res, item) => {
        res += (item.registrationTime) ? 1 : 0;
        return res;
    }, 0);
    const countOfReverts = itemFlight.tickets.reduce((res, item) => {
        res += (item.fullName !== '') ? 1 : 0;
        return res;
    }, 0);
    const percentOfReverts = countOfReverts/reservedSeats*100;
    /**
     * @type {Report}
     */
    const report = {
        flight,
        registration,
        complete,
        countOfSeats,
        reservedSeats,
        registeredSeats,
        countOfReservations,
        countOfReverts,
        percentOfReverts
    }
    return {
        ...report
    };
}

