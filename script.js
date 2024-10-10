//1. Zeptáme se uživatele na den, měsíc a rok
const day = prompt("Zadejte den:");
const month = prompt("Zadejte měsíc:");
const year = prompt("Zadejte rok:");

document.body.innerHTML += `<p class="date"><span class="day">28</span>. <span class="month">4</span>.<span class="year">2021</span></p>`;


//2. Zeptáme se uživatele na teplotu ve stupních Fahrenheita
const fahrenheit = prompt("Zadejte teplotu ve stupních Fahrenheita:");
const celsius = (5 / 9) * (fahrenheit - 32);

document.body.innerHTML += `<div class="result">Teplota ${fahrenheit}°F odpovídá ${celsius.toFixed(2)}°C.</div>`;


//3. Objekt představující let
const flight = {
    id: '145c01af48dd00002715248e_0',
    dTimeUTC: '01/26/2021 @ 1:25pm (UTC)',
    aTimeUTC: '01/26/2021 @ 3:45pm (UTC)',
    duration: {
        departure: 8400,
        return: 0,
        total: 8400,
    },
    fly_duration: '2h 20m',
    flyFrom: 'PRG',
    cityFrom: 'Prague',
    cityCodeFrom: 'PRG',
    countryFrom: {
        code: 'CZ',
        name: 'Czechia',
    },
    flyTo: 'BCN',
    cityTo: 'Barcelona',
    cityCodeTo: 'BCN',
    countryTo: {
        code: 'ES',
        name: 'Spain',
    },
    distance: 1359.54,
    airline: 'FR',
    pnr_count: 1,
    technical_stops: 0,
    price: 36,
    bags_price: {
        1: 34.95,
        2: 69.91,
    },
    baglimit: {
        hand_width: 20,
        hand_height: 40,
        hand_length: 55,
        hand_weight: 10,
        hold_width: 81,
        hold_height: 119,
        hold_length: 119,
        hold_dimensions_sum: 319,
        hold_weight: 20,
    },
    availability: {
        seats: 2,
    },
    conversion: {
        EUR: 36,
    },
    quality: 66.66659,
};

// Vypisování názvů startovní a cílové země
document.body.innerHTML += `<div class="flight-info"><p><strong>Startovní země:</strong> ${flight.countryFrom.name}</p>`;
document.body.innerHTML += `<p><strong>Cílová země:</strong> ${flight.countryTo.name}</p>`;

// Uložení rozměrů zavazadel do proměnné
const bagDimensions = flight.baglimit;

// Vypisování maximálních rozměrů příručního zavazadla
document.body.innerHTML += `<p><strong>Maximální rozměry příručního zavazadla:</strong></p>`;
document.body.innerHTML += `<p>Šířka: ${bagDimensions.hand_width} cm</p>`;
document.body.innerHTML += `<p>Výška: ${bagDimensions.hand_height} cm</p>`;
document.body.innerHTML += `<p>Délka: ${bagDimensions.hand_length} cm</p>`;
document.body.innerHTML += `<p>Maximální hmotnost: ${bagDimensions.hand_weight} kg</p>`;

// Vypisování ceny za druhé zavazadlo zaokrouhleno na celé koruny
const secondBagPrice = Math.ceil(flight.bags_price[2]); // Zaokrouhleno na celé koruny
document.body.innerHTML += `<p><strong>Cena za druhé zavazadlo:</strong> ${secondBagPrice} Kč</p></div>`;


//3. Získání velikostí okna
const innerWidth = window.innerWidth;
const innerHeight = window.innerHeight;
const outerWidth = window.outerWidth;
const outerHeight = window.outerHeight;

// Vypisování hodnot do HTML
document.body.innerHTML += `<p>Vnitřní šířka (innerWidth): ${innerWidth} px</p>`;
document.body.innerHTML += `<p>Vnitřní výška (innerHeight): ${innerHeight} px</p>`;
document.body.innerHTML += `<p>Vnější šířka (outerWidth): ${outerWidth} px</p>`;
document.body.innerHTML += `<p>Vnější výška (outerHeight): ${outerHeight} px</p>`;
document.body.innerHTML += `<hr>`;
document.body.innerHTML += `<p>Rozdíl mezi vnější a vnitřní šířkou: ${widthDifference} px</p>`;
document.body.innerHTML += `<p>Rozdíl mezi vnější a vnitřní výškou: ${heightDifference} px</p>`;