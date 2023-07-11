'use strict';

const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
const API_KEY = '9c6d356df795525b572ef209f6cb500f';

const getWeatherByCityName = cityName =>
  fetch(`${BASE_URL}?q=${cityName}&appid=${API_KEY}&lang=ua&units=metric`).then(
    res => {
      if (!res.ok) {
        throw new Error(res.status);
      }

      return res.json();
    }
  );
// console.log(getWeatherByCityName('Paris'));
export default getWeatherByCityName;
