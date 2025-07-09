function updateDateTime(){
let canberraDateElement = document.querySelector("#can-date");
let canberraTimeElement = document.querySelector("#can-time");

let canberraDate = moment().format("MMMM Do YYYY")
let canberraTime = moment().tz("Australia/Canberra").format("h:mm:ss [<small>]A[</small>]");

canberraDateElement.innerHTML = canberraDate;
canberraTimeElement.innerHTML = canberraTime;

let newYorkDateElement = document.querySelector("#ny-date");
let newYorkTimeElement = document.querySelector("#ny-time");

let newYorkDate = moment().format("MMMM Do YYYY")
let newYorkTime = moment().tz("America/New_York").format("h:mm:ss [<small>]A[</small>]");

newYorkDateElement.innerHTML = newYorkDate;
newYorkTimeElement.innerHTML = newYorkTime;

let madridDateElement = document.querySelector("#mad-date");
let madridTimeElement = document.querySelector("#mad-time");

let madridDate = moment().format("MMMM Do YYYY")
let madridTime = moment().tz("Europe/Madrid").format("h:mm:ss [<small>]A[</small>]");

madridDateElement.innerHTML = madridDate;
madridTimeElement.innerHTML = madridTime;

}

updateDateTime();
setInterval(updateDateTime, 1000);