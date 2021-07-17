const city = document.querySelector('#weather span:first-child ');
const weather = document.querySelector('#weather span:last-child ');

navigator.geolocation.getCurrentPosition(async (position) => {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const apiKey = '5b96147eca88d639e520347f95f1eab2';

  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  const response = await fetch(url);
  const data = await response.json();

  city.innerText = `@${data.name}`;
  weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
});
