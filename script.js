const flightData = [
    {
    departure: {
        code: 'THR',
        city: 'Tehran',
        airport: 'Mehrabad Airport'
    },
    arrival: {
        code: 'MHD',
        city: 'Mashhad',
        airport: 'Hashemi Nejad Airport'
    },
    date: 'Mon 15 Jul',
    departureTime: '09:30 AM',
    arrivalTime: '11:45 AM',
    duration: '1h 20m',
    price: 100
    }
];

function createTicket(flight) {
    return `
    <div class="ticket">
        <div class="flight-info">
            <div>
                <div class="airport">
                    <div class="airport-code">${flight.departure.code}</div>
                    <div class="airport-name">${flight.departure.city}</div>
                    <div class="airport-detail">${flight.departure.airport}</div>
                </div>
            </div>
            <div >
                <div class="airport">
                    <div class="airport-code">${flight.arrival.code}</div>
                    <div class="airport-name">${flight.arrival.city}</div>
                    <div class="airport-detail">${flight.arrival.airport}</div>
                </div>
            </div>
        </div>
        <div class="time-info">
            <div class="time">
                <div class="time-label">Depart</div>
                <div class="time-value">${flight.departureTime}</div>
                <div class="time-label">${flight.date}</div>
            </div>
            <div class="depart-flight-line">
                <div class="line"></div>
                <div class="plane"></div>
                <div class="line"></div>
                
            </div>
            <div class="time">
                <div class="time-label">Arrive</div>
                <div class="time-value">${flight.arrivalTime}</div>
                <div class="time-label">${flight.date}</div>
            </div>
        </div>
        <div class="price">
        <span class="price-value">$${flight.price}</span>
        <span class="price-label">Per Adult</span>
        </div>
    </div>
    `;
}

function loadTickets() {
    const container = document.getElementById('tickets-container');
    container.innerHTML = '';
    // Create multiple tickets for demonstration
    for (let i = 0; i < 10; i++) {
    container.innerHTML += createTicket(flightData[0]);
    }
}

function toggleMenu() {
    // Add menu toggle functionality here
    console.log('Menu toggled');
}

// Add current date as minimum date for departure and return
const today = new Date().toISOString().split('T')[0];
document.getElementById('departure').min = today;
document.getElementById('return').min = today;

// Update return date minimum when departure date changes
document.getElementById('departure').addEventListener('change', function() {
    document.getElementById('return').min = this.value;
});


// Initial load
loadTickets();