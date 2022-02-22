const travellerName = prompt('Qual è il tuo nome?');
document.getElementById('travellerName').innerHTML += travellerName;
console.log(travellerName);

const travellerFamilyName = prompt('Qual è il tuo cognome?');
document.getElementById('travellerFamilyName').innerHTML += travellerFamilyName;
console.log(travellerFamilyName);

const travellerAge = parseInt( prompt('Quanti anni hai?') );
document.getElementById('travellerAge').innerHTML += travellerAge;
console.log(travellerAge);




let travellerKms = parseInt( prompt('Quanti chilometri devi percorrere?'));

let travellerTicketPrice = travellerKms * 0.21.toFixed(2);

if (travellerAge < 18) {
    console.log ('Hai diritto ad uno sconto del 20% sul prezzo del biglietto!');
    travellerTicketPrice = (travellerTicketPrice - (travellerTicketPrice * (20 / 100))).toFixed(2);
} else if (travellerAge > 65) {
    console.log ('Hai diritto ad uno sconto del 40% sul prezzo del biglietto!');
    travellerTicketPrice = (travellerTicketPrice - (travellerTicketPrice * (40 / 100))).toFixed(2);
} else {
    console.log ('Non rientri in nessuna categoria per applicare uno sconto');
}

document.getElementById ('travellerTicketPrice').innerHTML += travellerTicketPrice;

console.log(travellerTicketPrice);



