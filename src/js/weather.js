// https://www.weatherbit.io/api

import getWeatherByCityName from './weather-api';

import weatherCardTemplate from '../templates/weather-card.hbs';

const weatherFormEl = document.querySelector('.js-search-form');
const cityInputEl = weatherFormEl.firstElementChild;
const weatherWrapperEl = document.querySelector('.weather-wrapper');

const convertSecondsToHoursAndMinutes = seconds => {
  const date = new Date(seconds * 1000);

  return `${`${date.getHours()}`.padStart(
    2,
    0
  )}:${`${date.getMinutes()}`.padStart(2, 0)}`;
};

const handleWeatherFormSubmit = event => {
  event.preventDefault();

  const searchQuery = cityInputEl.value.trim();

  if (!searchQuery) {
    return;
  }

  cityInputEl.value = '';
  weatherWrapperEl.innerHTML = '';

  getWeatherByCityName(searchQuery)
    .then(({ sys: { sunset, sunrise, ...sysData }, ...data }) => {
      const enhancedData = {
        ...data,
        sys: {
          ...sysData,
          sunrise: convertSecondsToHoursAndMinutes(sunrise),
          sunset: convertSecondsToHoursAndMinutes(sunset),
        },
      };

      weatherWrapperEl.innerHTML = weatherCardTemplate(enhancedData);
    })
    .catch(console.warn);

  console.log(getWeatherByCityName(searchQuery));
};

// function createMarkup(arr) {
//   return arr
//     .map(
//       ({
//         name,
//         main: { temp, feels_like },
//         sys: { sunrise, sunset },
//         clouds: { all },
//       }) => `<div class='weather__card'>
//   <h2 class='city-name'>${name}</h2>
//   <ul class='weather-info list'>
//     <li class='weather-info-item'>
//       <p class='temp'>Температура: ${temp}</p>
//     </li>
//     <li class='weather-info-item'>
//       <p class='feels-like-temp'>Відчувається як:
//         ${feels_like}</p>
//     </li>
//     <li class='weather-info-item'>
//       <p class='sunrise-time'>Схід сонця: ${sunrise}</p>
//     </li>
//     <li class='weather-info-item'>
//       <p class='sunset-time'>Захід сонця: ${sunset}</p>
//     </li>
//     <li class='weather-info-item'>
//       <p class='clouds'>Хмарність: ${all}</p>
//     </li>
//   </ul>
// </div>`
//     )
//     .join('');
// }

weatherFormEl.addEventListener('submit', handleWeatherFormSubmit);
