var endpoint = "https://api.pexels.com/v1/search?query=nature&per_page=6&page=1";


var apiKey = "gabD9PIpi7jJvp6FPUVZqbnPJgS5VlwS366ifnQxhOSSS8ppZlIhg1ZD";

var headers = {
  Authorization: apiKey
};
var keywords = [
    "nature",
    "animals",
    "food",
    "sports",
    "travel",
    "architecture"
  ];
  
  var randomIndex = Math.floor(Math.random() * keywords.length);
  
  var randomKeyword = keywords[randomIndex];

  var endpoint = "https://api.pexels.com/v1/search?query=" + randomKeyword + "&per_page=6&page=1";

$.ajax({
  url: endpoint,
  headers: headers,
  success: function(response) {
    var images = response.photos;
    for (var i = 0; i < images.length; i++) {
      var img = "<img src='" + images[i].src.medium + "' alt='" + images[i].photographer + "'>";
      $("#images").append(img);
    }
  }
});