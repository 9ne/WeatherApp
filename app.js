let weather = {
  apiKey: '3b34ae2f0fb016b587f69afe5758f218',
  fetchWeather: (city) => {
    fetch(
      'https://api.openweathermap.org/data/2.5/weather?q='
       + city + '&appid=3b34ae2f0fb016b587f69afe5758f218&units=metric'
    )
    

    .then((response) => response.json())
    .then((data) => console.log(data))
  }
};


console.log(weather);

