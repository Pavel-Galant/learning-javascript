/**
 * @typedef {Object} Airliner
 * @property {string} name
 * @property {number} seats
 * @property {number} businessSeats
 */

/**
 * @typedef {Object} Flight
 * @property {string} name Номер рейса
 * @property {number} seats Общее количество мест (включая бизнес класс)
 * @property {number} businessSeats Количество мест бизнес класса (первые номера мест в нумерации)
 * @property {number} registrationStarts Время начала регистрации на борт
 * @property {number} registartionEnds Время окончания регистрации на борт
 * @property {Ticket[]} tickets Массив всех билетов
 */

/**
 * @typedef {Object} Ticket
 * @property {string} id
 * @property {string} flight
 * @property {string} fullName
 * @property {number} type Тип места (0 - стандарт, 1 - бизнес)
 * @property {number} seat
 * @property {number} buyTime
 * @property {number} registrationTime
 */

 /**
 * @typedef {Object} Report
 * @property {string} flight Номер рейса
 * @property {boolean} registration Доступна регистрация на самолет
 * @property {boolean} complete Регистрация завершена или самолет улетел
 * @property {number} countOfSeats Общее количество мест
 * @property {number} reservedSeats Количество купленных (забронированных) мест
 * @property {number} registeredSeats Количество пассажиров, прошедших регистрацию
 * @property {number} countOfReservations Количество всех регистраций мест
 * @property {number} countOfReverts Количество возвратов билетов 
 * @property {number} percentOfReverts Процент возвратов от общего числа бронирований
 */