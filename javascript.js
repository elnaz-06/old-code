function city(event) {
    event.preventDefault();
    result.innerHTML = input.value;
  }
  
  function changer(event) {
    event.preventDefault();
    let tempValue = parseFloat(temprach.innerHTML);
    let fahrenheitValue = (tempValue * 9) / 5 + 32;
    fahrenheitValue = Math.round(fahrenheitValue);
    temprach.innerHTML = fahrenheitValue;
  }

let now = new Date();
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];

let fullMonth = months[now.getMonth()];
let fullDay = days[now.getDay()];
let currentDay = now.getDay();
let hour = now.getHours();
let min = now.getMinutes();
let firstCh = document.querySelector(".date");
firstCh.innerHTML = `${fullDay},  ${fullMonth} ${currentDay}, ${hour}:${min}`;

let input = document.querySelector(".searchBox");
let result = document.querySelector(".location");
let form = document.querySelector("form");
form.addEventListener("submit", city);

let temprach = document.querySelector(".number");
let farenhite = document.querySelector(".fahrenheit");
farenhite.addEventListener("click", changer);
let celci = document.querySelector(".celsius");
celci.addEventListener("click", rechanger);











function showPosition(position) {
let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
let lat = position.coords.latitude;
let lon = position.coords.longitude;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q={input}&units=metric&appid={apiKey}`;
axios.get(apiUrl).then(showWeather);
}

function showWeather(response) {
  response.preventDefault();
  let temp = Math.round(response.data.main.temp);
  let text = document.querySelector("temprach");
  text.innerHTML = `${temp}`;
}



