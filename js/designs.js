  var div = document.getElementById("randomCountry");
  div.textContent = "Wylowsoany Kraj: ";
  var text = div.textContent;

$.ajax({
  url: "http://api.population.io:80/1.0/countries",
  type: 'GET',
  dataType: 'json'
}).done(function(data) {
  $('#all_country_api').append(JSON.stringify(data))
});
