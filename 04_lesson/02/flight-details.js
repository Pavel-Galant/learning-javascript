'use strict';

/**
 * Функция выводит данные по рейсу на html-страничке
 *
 * @param {World} world
 * @param {string} flightName номер рейса
 * @returns {undefined}
 */
function flightDetails(world, flightName) {
    const div = document.getElementById('flight-details');
    try {
        const ul = document.createElement('ul');
        const flightData = flightReport(world, flightName, Date.now());
        console.log(flightData);   
        for (let [key, value] of Object.entries(flightData)) {
            const li = document.createElement('li');
            ul.append(li);
            const text = document.createTextNode(`${key}: ${value}`);
            li.append(text);
            //console.log(`${key}: ${value}`);
        }  
        div.append(ul); 
        div.append(document.createTextNode(`Список билетов:`))
        const ulTickets = document.createElement('ul');
        const tickets = world.flights[flightName].tickets;
        for (let ticket of tickets) {
            const li = document.createElement('li');
            li.append(document.createTextNode(`Билет номер: ${ticket['id']}`));
            const subUl = document.createElement('ul');
            for (let prop of ['id', 'fullName', 'seat', 'registrationTime']) {
                const subLi = document.createElement('li');
                subUl.append(subLi);
                let value = ticket[prop];
                if (prop === 'registrationTime') {
                    value = (value === null) ? 'Не зарегистрирован' : Date(value).toString(); 
                }
                subLi.append(document.createTextNode(prop + `: ${value}`));
            }
            li.append(subUl);
            ulTickets.append(li);
        }
        div.append(ulTickets);  
    } catch (e) {
        console.log(e);
        div.append(document.createTextNode(`Error: ${e.message}`))    
    }
}

