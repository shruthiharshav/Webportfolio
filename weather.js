let getWeather = async (city) => {
  let weatherAPI = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8e9c693f0ba41baadfdb83a62d0ba2fd&units=metric`;
  let weatherObj = await fetch(weatherAPI);
  let response = await weatherObj.json();
  return response;
}

async function callWeather() {
  const response = await getWeather('Stockholm');
  const icon = response.weather[0].icon;
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  console.log(response);
  console.log("Country: ", response.sys.country);
  console.log("City:", response.name);

  document.getElementById("weather").innerHTML = `
  <div class="weatherwidget">
      <h3>${response.name}, ${response.sys.country}</h3>
      <img src="${iconUrl}" alt="weather icon" />
      <p><b>${response.weather[0].main}</b></p>
      <p>${response.weather[0].description}</p>
      <p>Temp: ${response.main.temp} °C</p>
      <p>Humidity: ${response.main.humidity}%</p>
      <p>Wind: ${response.wind.speed} m/s</p>
    </div>
  `;
}

callWeather();

