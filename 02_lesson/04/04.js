function makeTime(hours, minutes) {
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date.getTime();
}

/**
 * @type {Object<string, Flight>} Список всех рейсов
 */
let flights = {
    BH118: {
        name: 'BH118',
        seats: 28,
        businessSeats: 4,
        registrationStarts: makeTime(10, 0),
        registartionEnds: makeTime(15, 0),
        tickets: [
            {
                id: 'BH118-B50',
                flight: 'BH118',
                fullName: 'Ivanov I. I.',
                type: 0,
                seat: 18,
                buyTime: makeTime(2, 0),
                registrationTime: null,
            }
        ],
    }
};

/**
 * Добавление рейса
 * 
 * * назначение номера рейса
 * * подготовка рейса
 *   * вычисление времени регистрации
 *   * подготовка структуры Flight
 * 
 * @param {Airliner} airliner Информация о самолете
 * @param {number} time Время вылета
 * @returns {Flight}
 */
// function createFlight(airliner, time) { }

/**
 * Поиск свободного места нужного типа
 * 
 * Гарантирует что найдет свободное место нужного типа или вернет null
 * 
 * @param {Flight} flight 
 * @param {number} type
 * @returns {number} seat
 */
function findAvailableSeat(flight, type) {
    let exists;
    let seat;
    let seatsOfType = 0;

    switch (type) {
        case 0: // standart
            const availableSeats = [];

            for (let i = flight.businessSeats + 1; i <= flight.seats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    availableSeats.push(i)

            if (availableSeats.length === 0)
                return null;

            const index = Math.floor(Math.random() * availableSeats.length);
            return availableSeats[index];
        case 1: // business
            for (let i = 1; i <= flight.businessSeats; i++)
                if (!flight.tickets.find(item => item.seat === i))
                    seatsOfType++;

            if (seatsOfType === 0)
                return null;

            do {
                seat = Math.floor(Math.random() * flight.businessSeats) + 1;
                exists = flight.tickets.find(item => item.seat === seat);
            } while (exists);

            return seat;
        default:
            throw new Error(`Unknown type`)
    }
}

/**
 * Покупка билета на самолет
 * 
 * * проверка рейса
 * * проверка возможности купить (время и наличие мест)
 * * сохранение данных билета в информации о рейсе
 * 
 * @param {string} flightName Номер рейса
 * @param {number} buyTime Время покупки
 * @param {string} fullName Имя пассажира
 * @param {number} type Тип места
 * @returns {Ticket} Возвращаем копию билета
 */
function buyTicket(flightName, buyTime, fullName, type = 0) {
    const flight = flights[flightName];

    if (!flight)
        throw new Error('Flight not found');

    if (flight.tickets.length >= flight.seats)
        throw new Error('No seats available');

    if (buyTime > flight.registartionEnds)
        throw new Error('Time away');

    const seat = findAvailableSeat(flight, type);
    if (!seat)
        throw new Error(`No seats of type ${type} available. You can choose another type`);

    let id;
    do {
        id = flight.name + '-' + Math.random().toString().substr(2, 3);
        exists = flight.tickets.find(item => item.id === id);
    } while (exists);

    /**
     * @type {Ticket}
     */
    const ticket = {
        id,
        flight: flight.name,
        buyTime,
        fullName,
        registrationTime: null,
        type,
        seat,
    }

    flight.tickets.push(ticket);

    // return Object.assign({}, ticket);
    return {
        ...ticket,
        welcome: 'Nice to choose us',
    };
}

const a = buyTicket('BH118', makeTime(5, 10), 'Petrov I. I.');
//console.log(a);

/**
 * Функция пробует произвести электронную регистрацию пассажира
 * 
 *  * проверка билета
 *  * проверка данных пассажира
 *  * электронную регистрацию можно произвести только в период от 5 до 1 часа до полета
 * 
 * @param {string} ticket номер билета
 * @param {string} fullName имя пассажира
 * @param {number} nowTime текущее время
 * @returns boolean успешна ли регистрация
 */
function eRegistration(ticket, fullName, nowTime) {
    for (let flight in flights) { // по все рейсам
        // если текущее время не попадает в промежуток регистрации то пропускаем рейс
        if (!(flights[flight].registrationStarts <= nowTime 
            && flights[flight].registartionEnds >= nowTime)) continue
        
        const index = flights[flight].tickets
            .findIndex(item => (item.id === ticket && item.fullName === fullName));
        // если нашли, то записать время регистрации и вернуть true    
        if (index > -1) { 
            // если уже была регистрация, то бросаем исключение
            if (flights[flight].tickets[index].registrationTime) throw new Error(`Registration already passed!`)
            flights[flight].tickets[index].registrationTime = nowTime;
            return true;    
        }
    }    
    return false;
}

/*let isRegistration = eRegistration('BH118-B50', 'Ivanov I. I.',  makeTime(11, 10)); // true
console.log(isRegistration);
isRegistration = eRegistration('BH118-B50', 'Zavrazhnov P. A.',  makeTime(12, 10)); // false
console.log(isRegistration);
isRegistration = eRegistration('BH118-B50', 'Ivanov I. I.',  makeTime(12, 10)); // trow error
console.log(isRegistration);*/


 /**
 * Функция генерации отчета по рейсу
 * 
 *  * проверка рейса
 *  * подсчет
 * 
 * @param {string} flight номер рейса
 * @param {number} nowTime текущее время
 * @returns {Report} отчет
 */
function flightReport(flight, nowTime) {
    if (!(flight in flights)) throw new Error('Not found flight!');

    const itemFlight = flights[flight];    
    const registration = 
        (itemFlight.registrationStarts <= nowTime && itemFlight.registartionEnds >= nowTime);
    const complete = (nowTime > itemFlight.registartionEnds);
    const countOfSeats = itemFlight.seats;
    const reservedSeats = itemFlight.tickets.length;
    const registeredSeats = itemFlight.tickets.reduce((res, item) => {
        res += (item.registrationTime) ? 1 : 0;
        return res;
    }, 0);
    /**
     * @type {Report}
     */
    const report = {
        flight,
        registration,
        complete,
        countOfSeats,
        reservedSeats,
        registeredSeats
    }
    return {
        ...report
    };
}

eRegistration('BH118-B50', 'Ivanov I. I.',  makeTime(11, 10));
const report = flightReport('BH118',  makeTime(18, 10));
console.log(report);

function displayFlights() {
    console.log('*** List of all flights ***');
    console.table(flights);
}

function flightDetails(flightName) {
    console.log(`*** Details of flight ${flightName} ***`);
    const flight = flights[flightName];
    if (!flight) {
        console.warn('Flight not found');
        return;
    }

    console.table(flight);
    console.table(flight.tickets);
}
