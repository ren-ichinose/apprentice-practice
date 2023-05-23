'use strict';
const submit = document.querySelector('button');
const latitude = document.getElementById('latitude');
const longitude = document.getElementById('longitude');
const weatherResult = document.getElementById('weatherResult');
submit.addEventListener('click', async (e) => {
  e.preventDefault();
  weatherResult.innerHTML = '';
  const latitudeValue = latitude.value;
  const longitudeValue = longitude.value;
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?lat=${latitudeValue}&lon=${longitudeValue}&APPID=[apikey]]`
  );
  const data = await res.json();
  const weather = await data.weather[0].main;
  const temp = Math.round((await data.main.temp) - 273.15);
  const paragraphWeatherResult = document.createElement('p');
  paragraphWeatherResult.textContent = `Weather：${weather}   Temperature：${temp} `;
  weatherResult.appendChild(paragraphWeatherResult);
});
//# sourceMappingURL=weather.js.map
