// info sacada de goolge -- api de imagenes

const accessKey = 'pKHL7gpfL1dN-GrY3TXxfIGzeDIW2pRKdkqwDFH1xaI';

const apiUrl = 'https://api.unsplash.com/photos/random';

const xhr = new XMLHttpRequest();
xhr.open('GET', apiUrl);
xhr.setRequestHeader('Authorization', 'Client-ID ${accessKey}');
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


