let weather = {
  apiKey: '3b34ae2f0fb016b587f69afe5758f218',
  fetchWeather: (city) => {
    fetch(
    'https://api.openweathermap.org/data/2.5/weather?q='
    + city +
    '&appid=3b34ae2f0fb016b587f69afe5758f218&units=metric'
    )
    .then((response) =>  {
      if (!response.ok) throw Error (response.statusText)
      return response.json();
    })
    .catch(() => {
      alert('City not found, please try again');
      app.style.opacity = '1';
    })
    .then((data) => {
      const { name } = data;
      const { icon, description } = data.weather[0];
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      console.log(name, icon, description, temp, humidity, speed);
      document.querySelector('.city').innerText = `Weather in ${name}`;
      document.querySelector('.icon').src = 'https://openweathermap.org/img/wn/' + icon + '.png';
      document.querySelector('.description').innerText = description;
      document.querySelector('.temp').innerText =  Math.round(temp) + '°C';
      document.querySelector('.humidity').innerText = `Humidity is ${humidity} %`
      document.querySelector('.wind').innerText = `Wind speed is ${Math.round(speed)} km/h`;
    })
  }, 
  search: function () {
    this.fetchWeather(document.querySelector('.search-bar').value);
    
  },
};

document.querySelector('.search button').addEventListener('click', (event) => {
  weather.search();
});

document.querySelector('.search-bar').addEventListener('keyup', (event) => {
  if (event.key == 'Enter') {
    weather.search();
  }
});

