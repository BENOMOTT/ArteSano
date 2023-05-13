// info sacada de goolge -- api de imagenes


const accessKey = 'M9WJIuaXlTqW3l9VdO-05ASc38_5gdxNHuBrdIETpVQ';

const apiUrl = 'https://api.unsplash.com/photos/random';

const xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl);
xhr.setRequestHeader('Authorization', `Client-ID ${accessKey}`);
xhr.onload = function() {
  if (xhr.status === 200) {
    const responseData = JSON.parse(xhr.responseText);
    if (responseData.urls && responseData.urls.regular) {
      const imageElement = document.getElementById('randomImage');
      imageElement.src = responseData.urls.regular;
    }
  } else {
    console.log('Error al obtener la imagen aleatoria');
  }
};
xhr.send();


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



