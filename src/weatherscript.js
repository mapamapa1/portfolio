async function fetchWeather() {
    
    const URL = "http://api.weatherapi.com/v1/current.json?key=9306cb47e4d744f1aab01113243012&q=Stockholm&aqi=no"

      const response = await fetch(URL);

      const data = await response.json();
      
      displayWeather(data);
    
}
  
function displayWeather(data) {
    const weatherDiv = document.getElementById('weather');
    weatherDiv.innerHTML = `
      <h2>${data.location.name}, ${data.location.country}:</h2>
      <div class="temp-icon">
        <p>${data.current.temp_c}°C</p>
        <img src="${data.current.condition.icon}" alt="${data.current.condition.text}">
      </div>
    `;
}
  
fetchWeather();