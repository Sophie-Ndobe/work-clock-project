function updateDateTime(){
//Canberra
let canberraDateElement = document.querySelector("#can-date");
let canberraTimeElement = document.querySelector("#can-time");

let canberraDate = moment().format("MMMM Do YYYY")
let canberraTime = moment().tz("Australia/Canberra").format("h:mm:ss [<small>]A[</small>]");

canberraDateElement.innerHTML = canberraDate;
canberraTimeElement.innerHTML = canberraTime;

//New york
let newYorkDateElement = document.querySelector("#ny-date");
let newYorkTimeElement = document.querySelector("#ny-time");

let newYorkDate = moment().format("MMMM Do YYYY")
let newYorkTime = moment().tz("America/New_York").format("h:mm:ss [<small>]A[</small>]");

newYorkDateElement.innerHTML = newYorkDate;
newYorkTimeElement.innerHTML = newYorkTime;

//Madrid
let madridDateElement = document.querySelector("#mad-date");
let madridTimeElement = document.querySelector("#mad-time");

let madridDate = moment().format("MMMM Do YYYY")
let madridTime = moment().tz("Europe/Madrid").format("h:mm:ss [<small>]A[</small>]");

madridDateElement.innerHTML = madridDate;
madridTimeElement.innerHTML = madridTime;

}

function updateTimeInformation(event) {
   let cityTimeZone = event.target.value;
   let cityName = cityTimeZone;
   let cityTime = moment.tz(cityTimeZone);
   let updatingDate = cityTime.format("MMMM Do YYYY");
   let updatingTime = cityTime.format("h:mm:ss");
   let updatingAmPm = cityTime.format("A");

   let citiesElement = document.querySelector("#cities");
   citiesElement.innerHTML = `
      <div class="city">
         <div>
            <h2 >${cityName} </h2>
            <div class="date" id="ny-date">${updatingDate}</div>
         </div>
         <div class="time" id="ny-time">${updatingTime}<small>  ${updatingAmPm}</small></div>
      </div>
   `;
}

updateDateTime();
setInterval(updateDateTime, 1000);

let selectElement = document.querySelector("#city");
selectElement.addEventListener("change", updateTimeInformation);