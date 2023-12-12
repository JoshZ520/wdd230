// weather and drink count

const LAT = "33.1216362";
const LON = "-117.3702038";
const APIKEY = "06eef557d0797fb1b04ad9ce8f17ea02";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
//const apiURL = "data/weather.json";

function displayWeather(weatherData) {
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  // const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const temperature = weatherData.main.temp.toFixed(0);

  //Set up the weather icon
  let weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  //Set up the weather description
  let weatherDesc = document.getElementById("weather-desc");
  weatherDesc.innerHTML = `${desc}`;

  let weatherTemp = document.getElementById("temp");
  weatherTemp.innerHTML = `${temperature}&deg;F`;
}

async function getTheWeather() {
  try {
    const response = await fetch(apiURL);
    if (response.ok) {
      const data = await response.json();
      displayWeather(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

getTheWeather();

const weatherURL = `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;
const ONE_DAY = 24 * 60 * 60 * 1000;
function showForecast(forecasts) {
  console.log(forecasts);
  let dates = [];
  let mydate = new Date();
  for (let i = 0; i < 3; i++) {
    mydate = new Date(mydate.getTime() + ONE_DAY);
    nextdate = mydate.toISOString().slice(0, 10);
    dates.push(nextdate);
  }
  console.log(dates);

  highTemps = dates.map((date) =>
    forecasts
      .filter((x) => x.dt_txt.startsWith(date) && x.dt_txt.endsWith("09:00:00"))
      .reduce((prev, next) => (prev.main.temp < next.main.temp ? prev : next))
  );
  let forecastImg = dates.map((dates) =>
    forecasts
      .filter(
        (x) => x.dt_txt.startsWith(dates) && x.dt_txt.endsWith("09:00:00")
      )
      .reduce((currentObj) => currentObj.weather.icon)
  );

  lowTemps = dates.map((date) =>
    forecasts
      .filter((x) => x.dt_txt.startsWith(date))
      .reduce((prev, next) => (prev.main.temp < next.main.temp ? prev : next))
  );

  let weatherElt = document.querySelector("#three-day");
  for (let i = 0; i < 3; i++) {
    let newsection = document.createElement("section");
    newsection.innerHTML = `<h2>${dates[i]}</h2> <img id="weather-icon" src="https://openweathermap.org/img/wn/${forecastImg[i].weather[0].icon}/>`;
    weatherElt.append(newsection);
  }
}

async function fetchForecast() {
  try {
    const response = await fetch(weatherURL);
    if (response.ok) {
      const data = await response.json();
      showForecast(data.list);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

fetchForecast();
