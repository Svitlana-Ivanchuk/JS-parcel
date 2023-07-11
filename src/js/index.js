import axios from 'axios';

/*
 * Method (GET).
 */

const BASE_URL = 'http://localhost:3000';

// const getComments = () =>
//   fetch(`${BASE_URL}/comments`, { method: 'GET' }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });

const getComments = () => axios.get(`${BASE_URL}/comments`);

getComments()
  .then(response => console.log(response.data))
  .catch(console.warn);

/*
 * Method (POST). Headers ("Content-Type": "application/json"). Body.
 */
const BASE_URL = 'http://localhost:3000';

// const createUser = newUser =>
//   fetch(`${BASE_URL}/users`, {
//     method: 'POST',
//     body: JSON.stringify(newUser),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });

const createUser = newUser => axios.post(`${BASE_URL}/users`, newUser);

createUser({
  name: 'Warren Soto',
  username: 'Antonette',
  email: 'votutor@vorildo.cd',
  address: {
    street: 'Victor Plains',
    suite: 'Suite 879',
    city: 'Wisokyburgh',
    zipcode: '90566-7771',
    geo: {
      lat: '-43.9509',
      lng: '-34.4618',
    },
  },
  phone: '(811) 572-9923',
  website: null,
  company: {
    name: 'Deckow-Crist',
    catchPhrase: 'Proactive didactic contingency',
    bs: 'synergize scalable supply-chains',
  },
})
  .then(response => {
    console.log(response.data);
  })
  .catch(err => {
    console.log(err);
  });

/*
 * Method(PUT/PATCH). Headers ("Content-Type": "application/json"). Body.
 */

const BASE_URL = 'http://localhost:3000';

// const updateUserById = (userId, infoForUpdate) =>
//   fetch(`${BASE_URL}/users/${userId}`, {
//     method: 'PATCH',
//     body: JSON.stringify(infoForUpdate),
//     headers: {
//       'Content-Type': 'application/json',
//     },
//   }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });

const updateUserById = (userId, infoForUpdate) =>
  axios.patch(`${BASE_URL}/users/${userId}`, infoForUpdate);

updateUserById(1, { address: {} })
  .then(({ data }) => {
    console.log(data);
  })
  .catch(err => {
    console.log(err);
  });

/*
 * Method(DELETE)
 */

const BASE_URL = 'http://localhost:3000';

// const deleteUserById = userId =>
//   fetch(`${BASE_URL}/users/${userId}`, { method: 'DELETE' }).then(response => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }

//     return response.json();
//   });

const deleteUserById = userId => axios.delete(`${BASE_URL}/users/${userId}`);

deleteUserById(1).then(console.log).catch(console.warn);
