import { JSONPlaceholderAPI } from './gallery-api';

const jsonplaceholderInstance = new JSONPlaceholderAPI();

jsonplaceholderInstance
  .fetchPhotos()
  .then(data => {
    console.log(data);
  })
  .catch(err => {
    console.warn(err);
  });
