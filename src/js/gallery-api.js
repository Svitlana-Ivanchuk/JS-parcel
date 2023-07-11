'use strict';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const API_KEY = '';

export class JSONPlaceholderAPI {
  fetchPhotos() {
    return fetch(`${BASE_URL}/photos?_limit=12&_page=1`).then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    });
    //   .then(data => {
    //     console.log(data);
    //   })
    //   .catch(err => {
    //     console.warn(err);
    //   });
  }
}
