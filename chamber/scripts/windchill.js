function showWindChill(temp, speed) {
  const windspeedSpan = document.getElementById("windchill");
  let message = "N/A";

  if (temp <= 50 && speed > 3) {
    let chillfactor = Math.pow(speed, 0.16);
    let chill = Math.round(
      35.74 + 0.6215 * temp - 35.75 * chillfactor + 0.4275 * temp * chillfactor
    );
    message = `${chill}`;
  }

  windspeedSpan.textContent = message;
}

const temperatureSpan = document.getElementById("temperature");
const windspeedSpan = document.getElementById("windspeed");
const temperature = parseInt(temperatureSpan.textContent);
const windspeed = parseInt(windspeedSpan.textContent);

showWindChill(temperature, windspeed);

const LAT = "43.8866";
const LON = "-111.6777";
const APIKEY = "f201ddd05d8463452d804252fc97ccc6";
const apiURL = `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${APIKEY}&units=imperial`;

function displayWeather(weatherData) {
  // You can use @2x or @4x to make the icon bigger, or omit it for the standard size
  // const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`
  const iconsrc = `https://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`;
  const desc = weatherData.weather[0].description;
  const windSpeed = weatherData.wind.speed.toFixed(0);
  const temperature = weatherData.main.temp.toFixed(0);

  //Set up the weather icon
  let weatherIcon = document.getElementById("weather-icon");
  weatherIcon.setAttribute("src", iconsrc);
  weatherIcon.setAttribute("alt", desc);

  //Set up the weather description
  let weatherDesc = document.getElementById("weather-desc");
  weatherDesc.innerHTML = `${desc}`;

  let weatherTemp = document.getElementById("weather-temp");
  weatherTemp.innerHTML = `${temperature}&deg;F | ${windSpeed} mph wind`;
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
