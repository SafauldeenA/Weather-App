// Safauldeen

function getWeather() {
  const apiKey = 'ab36f6f31e57224bb16ef4c17a39d787'; // Replace with your actual API key
  const city = document.getElementById('city').value;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok.');
      }
      return response.json();
    })
    .then(data => {
      console.log(data); // Log the data to check if it's retrieved successfully
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `
        <h2>${data.name}</h2>
        <p>Temperature: ${data.main.temp} °C</p>
        <p>Description: ${data.weather[0].description}</p>
      `;
    })
    .catch(error => {
      console.error(error); // Log any errors to the console
      const weatherInfo = document.getElementById('weather-info');
      weatherInfo.innerHTML = `<p>${error.message}</p>`;
    });
}
