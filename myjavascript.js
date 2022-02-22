const travellerName = prompt('Qual è il tuo nome?');
document.getElementById('travellerName').innerHTML += travellerName;

const travellerFamilyName = prompt('Qual è il tuo cognome?');
document.getElementById('travellerFamilyName').innerHTML += travellerFamilyName;

const travellerAge = parseInt( prompt('Quanti anni hai?') );
document.getElementById('travellerAge').innerHTML += travellerAge;