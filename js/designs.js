let countries= []; // tablica przechowuje wszytkie kraje
let countriesCounter = 0;
let help = []; // tablica przechowuje pojedyńczy kraj
let helpCounter = 0;

  $.ajax({
    url: "http://api.population.io:80/1.0/countries",
    type: 'GET',
    dataType: 'json'
  }).done(function(data) {
  	data = JSON.stringify(data);

  	for (let counter = 15; counter <= data.length-4; counter++) {

  		if(data[counter] == "\""){
        
  		}
  		else {

  			if(data[counter] === ","){
  				countries[countriesCounter]=help.join("");
  				countriesCounter++; // zwiększy licznik kraju
  				counter = counter+2; // przeskoczenie przecinka i cudzysłów
  				helpCounter = 0; // na now wisywanie liter nowego kraju
  				help = []; // kolejny kraj
  			}
  			help[helpCounter] = data[counter];
  			helpCounter++;
  		}

  	}

    $('#all_country_api').append(JSON.stringify(data))

  });

var i = 0;
var a = 0;
$("#startQuiz").click(function() {
  i++;
  console.log("zmienna i = " + i);
  var randomCountry = countries[Math.floor(Math.random() * countries.length)];
  console.log(randomCountry);
  var div = document.getElementById("chosen");
  var textTop = div.textContent = randomCountry + " : ";

  $("#sendAnswer").click(function() {
    var div = document.getElementById("chosen"+i);
    var textTable = div.textContent = randomCountry;
    var div = document.getElementById("population"+i);
    var textTabelPopulation = div.textContent = populationSize.value;

    if( textTabelPopulation == 100) {
      a++;
    }
    console.log("zmienna a = " + a);


  });

  if(i===6) {
    if(a == 5) {
      alert("Your score: 5/5 You are the best!");
    }
    else if (a == 4) {
      alert("Your score: 4/5");
    }
    else if (a == 3) {
      alert("Your score: 3/5");
    }
    else if (a == 2) {
      alert("Your score: 2/5");
    }
    else if (a == 1) {
      alert("Your score: 1/5");
    }
    else {
      alert("Your score: 0/5 Try again");
    }
  }

});
