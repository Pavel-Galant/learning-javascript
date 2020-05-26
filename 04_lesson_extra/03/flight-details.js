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
    console.log(div);
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
    } catch (e) {
        console.log(e);
        div.append(document.createTextNode(`Error: ${e.message}`))    
    }
}

