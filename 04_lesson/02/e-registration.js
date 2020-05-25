'use strict';

/**
 * Функция пробует произвести электронную регистрацию пассажира
 *
 *  * проверка билета
 *  * проверка данных пассажира
 *  * в информации о рейсе указано время начала
 *  * и конца электронной регистрации
 *
 * @param {World} world
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns {World} если успешно или ошибка
 */
function eRegistration(world, ticket, fullName, nowTime) {
    if (typeof world !== 'object') throw new Error(`param 'word' - expected object`);
    if (typeof ticket !== 'string') throw new Error(`param 'ticket' - expected string`);
    if (typeof fullName !== 'string') throw new Error(`param 'fullName' - expected string`);
    if (typeof nowTime !== 'number') throw new Error(`param 'nowTime' - expected number`);
    const [flightName] = ticket.split('-');
    if (!(flightName in world.flights)) throw new Error(`Not found ${flightName} in flights`);
    const flight = world.flights[flightName];
    if (!(flight.registrationStarts <= nowTime && 
        flight.registrationEnds >= nowTime))  throw new Error(`Invalid registration time`);  
    const index = flight.tickets.findIndex(item => (item.id === ticket && item.fullName === fullName));
    if (index === -1) throw new Error(`Not found ticket`);
    if (flight.tickets[index].registrationTime) throw new Error(`Registration already passed`)
    
    const tickets = [
        ...flight.tickets
    ];
    tickets[index].registrationTime = nowTime;
    //console.log(tickets);

    const newFlight = {
        ...flight,
        tickets,
    };

    const flights = {
        ...world.flights,
        [flightName]: newFlight,
    };

    const newWorld = {
        ...world,
        flights,
    };

    return newWorld;   
}