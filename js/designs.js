let countries = []; // Array store all countries
let countriesCounter = 0;
let help = [];      // Array store individual country
let helpCounter = 0;

  $.ajax({
    url: "http://api.population.io:80/1.0/countries",
    type: 'GET',
    dataType: 'json'
  }).done(function(data) {
  	data = JSON.stringify(data);

  	for (let counter = 15; counter <= data.length-4; counter++) {

  		if(data[counter] == "\"") {

  		}
  		else {

  			if(data[counter] === ",") {
  				countries[countriesCounter]=help.join("");
  				countriesCounter++;  // increase counter countries
  				counter = counter+2; // skip comma and quotation marks
  				helpCounter = 0;     // for new letters
  				help = [];           // clear for next country
  			}

  			help[helpCounter] = data[counter];
  			helpCounter++;
  		}

  	}

    $('#all_country_api').append(JSON.stringify(data))

  });

let tablePosition = 0;
let tableScore = 0;
let randomCountry;
let myJson = [];
let totalPopulation = 0;

$("#startQuiz").click(function() {
  tablePosition++;
  console.log("variable tablePosition = " + tablePosition);
  randomCountry = countries[Math.floor(Math.random() * countries.length)];
  console.log(randomCountry);
  var div = document.getElementById("chosen");
  var textTop = div.textContent = randomCountry + " : ";

  let urlWithRandomCountry = "http://api.population.io:80/1.0/population/2018/" + randomCountry +"/";

  $.ajax({
    url: urlWithRandomCountry,
    type: 'GET',
    dataType: 'json'
  }).done(function(data) {

   for (var key in data) { // data place for jsona
     myJson[key] = data[key].total;
   }
   totalPopulation = myJson.reduce(getSum);

   console.log(urlWithRandomCountry);
   console.log(totalPopulation);
  });

});

function getSum(total, num) {
    return total + num;
}

$("#sendAnswer").click(function() {
  var div = document.getElementById("chosen"+tablePosition);
  var textTable = div.textContent = randomCountry;
  var div = document.getElementById("population"+tablePosition);
  var textTabelPopulation = div.textContent = populationSize.value;

  if(textTabelPopulation <= totalPopulation * 1.25  && textTabelPopulation >= totalPopulation * 0.75 ) {
    tableScore++;
  }
  console.log("variable  tableScore = " + tableScore);

  if(tablePosition == 5) {

    if(tableScore == 5) {
      alert("Your score: 5/5 You are the best!");
    }
    else if (tableScore == 4) {
      alert("Your score: 4/5");
    }
    else if (tableScore == 3) {
      alert("Your score: 3/5");
    }
    else if (tableScore == 2) {
      alert("Your score: 2/5");
    }
    else if (tableScore == 1) {
      alert("Your score: 1/5");
    }
    else {
      alert("Your score: 0/5 Try again");
    }
  }

  $("#populationSize").val("");

});
