//const e= d.getElementById("button").addEventListener("click", countdown);
//ways to makes dates - formas de hacer fechas
let milisecondsDate = new Date(1646284207256);
let stringDate = new Date("Aug 30 , 2022 14:00:10");
let valueDate = new Date(1995,11,17,3,24,0);

console.log(milisecondsDate);
console.log(stringDate);
console.log(valueDate);

//get realTime Date - obtener la fecha actual
let date = new Date();
console.log("Date: "+date+" return in string");
let dateNow = Date.now();
console.log("DateNow: "+dateNow+" return in miliseconds");

//add hours -  añadir horas

function addHours(hours){
//adding to realTime date - añadir fecha actual
var addedHours = new Date().setHours(date.getHours() + hours);
return addedHours;
}
let Date1hour =  addHours(8);
console.log(new Date (Date1hour));
console.log(limitDate = addHours(8))


