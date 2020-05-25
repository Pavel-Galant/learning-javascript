/**
 * Функция возврата билета
 * 
 * * проверка рейса
 * * проверка билета
 * * вернуть билет можно если до рейса не менее 3 часов
 * * вернуть билет можно это не бизнес класс
 * 
 * @param {World} world
 * @param {string} ticket номер билета
 * @param {number} nowTime текущее время
 * @returns {boolean} удалось ли отменить билет
 */
function revertTicket(world, ticket, nowTime) {
    if (typeof world !== 'object') throw new Error(`param 'world' - expected object`);
    if (typeof ticket !== 'string') throw new Error(`param 'ticket' - expected string`);
    const [flightName] = ticket.split('-');
    if (!(flightName in world.flights)) throw new Error(`Not found ${flightName} in flights`);

    const flight = world.flights[flightName];
    // ищем билет в данном рейсе
    const index = flight.tickets.findIndex(item => (item.id === ticket));
    if (index === -1) throw new Error('Not found ticket');
    const isRevert = (flight.registrationEnds - nowTime > 2*3600000) && (flight.tickets[index].type !== 1); 
    // если можно отменить билет, то очищаем имя покупателя
    if (isRevert) world.flights[flightName].tickets[index].fullName = '';
    return isRevert;
}