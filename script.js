function getWeather() {
  var city = document.getElementById('cityInput').value;

  // Make a request to the weather API
  var apiKey = '172d8d29162081a025580d7a50c4982a';
  var url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + '172d8d29162081a025580d7a50c4982a' ;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      displayWeather(data);
    })
    .catch(function(error) {
      console.log('Error:', error);
    });
}

function displayWeather(data) {
  var weatherInfo = document.getElementById('weatherInfo');
  weatherInfo.innerHTML = '';

  if (data.cod === '404') {
    weatherInfo.innerHTML = 'City not found';
    return;
  }

  var cityName = data.name;
  var temperature = data.main.temp;
  var description = data.weather[0].description;

  var weatherHTML = '<h2>' + cityName + '</h2>';
  weatherHTML += '<p>Temperature: ' + temperature + ' K</p>';
  weatherHTML += '<p>Description: ' + description + '</p>';

  weatherInfo.innerHTML = weatherHTML;
}