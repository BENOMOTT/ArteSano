//info sacada de google -- api de perfiles 

const firstNameElement = document.getElementById('first-name');
const lastNameElement = document.getElementById('last-name');
const photoElement = document.getElementById('user-photo');

fetch('https://randomuser.me/api/')
  .then(response => response.json())
  .then(data => {
    const firstName = data.results[0].name.first;
    const lastName = data.results[0].name.last;
    const photoUrl = data.results[0].picture.large;

    firstNameElement.textContent = firstName;
    lastNameElement.textContent = lastName;
    photoElement.src = photoUrl;
    photoElement.alt = '${firstName} ${lastName}';
  })
  .catch(error => console.error('Error', error));



