function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateELement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateELement.innerHTML = formatDate(currentDate);

//homework
function myCity(event) {
  event.preventDefault();
  let userCity = document.querySelector("#search-input");
  let query = userCity.value;
  let apiKey = "t9cd3c54bob2168beb2fccadbbfa42d0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${query}&key=${apiKey}`;
  axios.get(apiUrl).then(changeTemp);
}
function changeTemp(response) {
  let currentTemperature = response.data.temperature.current;
  let ourTemp = document.querySelector("#degree");
  ourTemp.innerHTML = `${Math.round(currentTemperature)}`;
}
let searchform = document.querySelector("#search-form");
searchForm.addEventListener("submit", myCity);
