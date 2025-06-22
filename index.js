async function getWeather() {
  const location = document.getElementById('locationInput').value;
  const key = '9b85ec801dcd43a5abc154309251804';
  const url = `https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=7&aqi=yes&alerts=no`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    document.getElementById('locationName').textContent = `${data.location.name}, ${data.location.country}`;
    document.getElementById('tempC').textContent = data.current.temp_c;
    document.getElementById('condition').textContent = data.current.condition.text;
    document.getElementById('feelsLike').textContent = data.current.feelslike_c;
    document.getElementById('humidity').textContent = data.current.humidity;
    document.getElementById('wind').textContent = data.current.wind_kph;
    document.getElementById('highTemp').textContent = data.forecast.forecastday[0].day.maxtemp_c;
    document.getElementById('lowTemp').textContent = data.forecast.forecastday[0].day.mintemp_c;
    document.getElementById('sunrise').textContent = data.forecast.forecastday[0].astro.sunrise;
    document.getElementById('sunset').textContent = data.forecast.forecastday[0].astro.sunset;

    const forecastContainer = document.getElementById('forecastContainer');
    forecastContainer.innerHTML = '';
    data.forecast.forecastday.forEach((day, index) => {
      const date = new Date(day.date);
      const dayName = date.toLocaleDateString('en-US', { weekday: 'short' });
      forecastContainer.innerHTML += `
        <div class="day" style="animation-delay: ${index * 0.2}s">
          <h4>${dayName}</h4>
          <img src="${day.day.condition.icon}" alt="${day.day.condition.text}">
          <p>${day.day.avgtemp_c}°C</p>
          <p>☀️ ${day.day.maxtemp_c}° / 🌙 ${day.day.mintemp_c}°</p>
        </div>`;
    });

    document.getElementById('weatherInfo').style.display = 'block';
  } catch (error) {
    alert("Error fetching weather data. Please try again.");
    console.error(error);
  }
}
