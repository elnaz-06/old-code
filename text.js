let searchBoxInput = document.querySelector(".searchBox");
let locationResult = document.querySelector(".location");
let form = document.querySelector("form");

form.addEventListener("submit", searchCity);

function searchCity(event) {
  event.preventDefault();
  let inputValue = searchBoxInput.value;
  if (inputValue) {
    locationResult.textContent = inputValue;
    showPosition();
  }
}


function showPosition() {
  let apiUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${searchBoxInput.value}&units=metric&appid=5f472b7acba333cd8a035ea85a0d4d4c`;
  axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  let lon = response.data[0].lon;
  let lat = response.data[0].lat;
  let apiUrlSecond = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=5f472b7acba333cd8a035ea85a0d4d4c`;
  axios.get(apiUrlSecond).then(applyWeather);
}

function applyWeather(response) {
  console.log(response);

  let cityname = response.data.name;
  let citymainname = document.querySelector(".location");

  let temp = Math.round(response.data.main.temp);
  let temprach = document.querySelector(".number");

  let weathermood = response.data.weather[0].main;
  let weathermainmood = document.querySelector(".weathermoods");

  let currenthumidity =  Math.round(response.data.main.humidity);
  let detailing = document.querySelector(".humidity");

  let speed =  Math.round(response.data.wind.speed);
  let windspeed = document.querySelector(".wind");

  citymainname.innerHTML = cityname;
  weathermainmood.innerHTML = weathermood;
  temprach.innerHTML = temp;
  detailing.innerHTML = `Humidity: ${currenthumidity}%`;
  windspeed.innerHTML = `Wind speed: ${speed} km/h`;
}











function showCurrentWeather(response) {
  let mainCity = response.data.name;
  let mainCurrent = document.querySelector(".location");

  let temperature = Math.round(response.data.main.temp);

  mainCurrent.innerHTML = mainCity;
  h1.innerHTML = `It is currently ${temperature}° in ${response.data.name}`;
}

function retrievePosition(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;
  axios.get(url).then(showCurrentWeather);
}