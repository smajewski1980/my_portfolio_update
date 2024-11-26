const baseUrl = "https://api.weatherapi.com/v1/current.json";
const apiKey = "?key=447395c50a794d13a72195110240306";
const loc = "&q=12302";
const url = baseUrl + apiKey + loc;

async function getTheWeather() {
  const response = await fetch(url);
  const data = await response.json();

  const currentTemp = Math.floor(data.current.temp_f);
  setCurrentTemp(currentTemp);

  setDate(getCurrentDate());

  const currentCond = data.current.condition.text;
  setCondition(currentCond);

  const iconSrc = data.current.condition.icon;
  setIcon(iconSrc);
}

function setIcon(icon) {
  const iconElem = document.querySelector(".icon img");
  iconElem.src = `http:${icon}`;
}

function setCondition(condition) {
  const conditionElem = document.querySelector(".weather-condition");
  conditionElem.innerHTML = condition;
}

function setCurrentTemp(currentTemp) {
  const tempElem = document.querySelector(".temp");
  tempElem.innerHTML = `${currentTemp}&deg;F`;
}

function getCurrentDate() {
  const date = new Date();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = days[date.getDay()];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = months[date.getMonth()];
  const numberDate = date.getDate();
  const year = date.getFullYear();

  return day + ", " + month + " " + numberDate + ", " + year;
}

function setDate(date) {
  const dateElem = document.querySelector(".date");
  dateElem.innerHTML = date;
}

getTheWeather();
