describe('parseTemplate', () => {
    it(`not found 'BH118-9'`, () => {
        flightDetails(bigWorld, 'BH118-9');
        assert.equal('Error: Not found BH118-9 in flights', document.querySelector('#flight-details').innerText);
    });
    it(`done`, () => {
        document.querySelector('#flight-details').innerText = '';
        flightDetails(bigWorld, 'BH118');
        console.log(document.querySelector('#flight-details').innerHTML);
        assert.equal('<ul><li>flight: BH118</li><li>registration: false</li><li>complete: false</li><li>countOfSeats: 36</li><li>reservedSeats: 4</li><li>registeredSeats: 1</li><li>countOfReservations: 1</li><li>countOfReverts: 3</li><li>percentOfReverts: 75</li></ul>', document.querySelector('#flight-details').innerHTML);
    });
});