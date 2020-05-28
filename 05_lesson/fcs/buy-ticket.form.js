const btf = document.getElementById('buy-ticket-form');

btf.addEventListener('submit', btfSubmitHandler);

/**
 * Обработчик отправки формы
 * @param {KeyboardEvent} event
 */
function btfSubmitHandler(event) {
    
    // прерываем всплытие что бы форма не отправлялась
    event.preventDefault();

    const formData = {
        flightName: btf.elements.flightname.value,
        fullName: btf.elements.fullname.value,
        buyTime: btf.elements.buytime.value,
        type: btf.elements.type.value
    };
    //console.log(formData); return;
    try {
        if (formData.buyTime === '') throw new Error('Wrong time')
        const [hours, minutes] = formData.buyTime.split(':');
        const ticket = buyTicket(
            world.flights, 
            formData.flightName, 
            makeTime(+hours, +minutes),formData.fullName, 
            +formData.type
        );
        alert(`You successfully buy ticket! Your place number ${ticket.seat}`);
    } catch (error) {
        console.error(error);
        alert(error.message);
    }

    //updateView();
}

