  // var div = document.getElementById("randomCountry");
  // div.textContent = "Wylowsoany Kraj: ";
  // var text = div.textContent;
//   var data = [];
//
//   $.ajax({
//     type: 'GET',
//     url: "http://api.population.io:80/1.0/countries",
//     contentType: "application/json",
//     data: JSON.stringify(data),
//
//     xhrFields: {withCredentials: false
//     },
//     headers: {
//
//     },
//     success: function() {
//       var countriesArray = [];
//       countriesArray = data;
//     },
//     error: function() {
//       console.log("nie działa!")
//     }
// });

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
  			// counter++; // pozbycie sie cudzysłowia
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

  // .done(function(data) {
  //   var countriesArray = [];
  //   countriesArray = data;
  //   // $('#all_country_api').append(JSON.stringify(data))
  // });

 // var countries = [
 //    "Afghanistan",
 //    "AFRICA",
 //    "Albania",
 //    "Algeria",
 //    "Angola",
 //    "Antigua and Barbuda",
 //    "Arab Rep of Egypt",
 //    "Argentina",
 //    "Armenia",
 //    "Aruba",
 //    "ASIA",
 //    "Australia",
 //    "Australia/New Zealand",
 //    "Austria",
 //    "Azerbaijan",
 //    "The Bahamas",
 //    "Bahrain",
 //    "Bangladesh",
 //    "Barbados",
 //    "Belarus",
 //    "Belgium",
 //    "Belize",
 //    "Benin",
 //    "Bhutan",
 //    "Bolivia",
 //    "Bosnia and Herzegovina",
 //    "Botswana",
 //    "Brazil",
 //    "Brunei Darussalam",
 //    "Bulgaria",
 //    "Burkina Faso",
 //    "Burundi",
 //    "Cote-d-Ivoire",
 //    "Cabo Verde",
 //    "Cambodia",
 //    "Cameroon",
 //    "Canada",
 //    "Caribbean",
 //    "Central African Republic",
 //    "Central America",
 //    "Central Asia",
 //    "Chad",
 //    "Channel Islands",
 //    "Chile",
 //    "China",
 //    "Hong Kong SAR-China",
 //    "Macao SAR China",
 //    "Colombia",
 //    "Comoros",
 //    "Congo",
 //    "Costa Rica",
 //    "Croatia",
 //    "Cuba",
 //    "Curacao",
 //    "Cyprus",
 //    "Czech Republic",
 //    "Dem Peoples Rep of Korea",
 //    "Dem Rep of Congo",
 //    "Denmark",
 //    "Djibouti",
 //    "Dominican Republic",
 //    "Eastern Africa",
 //    "Eastern Asia",
 //    "Eastern Europe",
 //    "Ecuador",
 //    "El Salvador",
 //    "Equatorial Guinea",
 //    "Eritrea",
 //    "Estonia",
 //    "Ethiopia",
 //    "EUROPE",
 //    "Federated States of Micronesia",
 //    "Fiji",
 //    "Finland",
 //    "France",
 //    "French Guiana",
 //    "French Polynesia",
 //    "FYR Macedonia",
 //    "Gabon",
 //    "The Gambia",
 //    "Georgia",
 //    "Germany",
 //    "Ghana",
 //    "Greece",
 //    "Grenada",
 //    "Guadeloupe",
 //    "Guam",
 //    "Guatemala",
 //    "Guinea",
 //    "Guinea-Bissau",
 //    "Guyana",
 //    "Haiti",
 //    "Honduras",
 //    "Hungary",
 //    "Iceland",
 //    "India",
 //    "Indonesia",
 //    "Islamic Republic of Iran",
 //    "Iraq",
 //    "Ireland",
 //    "Israel",
 //    "Italy",
 //    "Jamaica",
 //    "Japan",
 //    "Jordan",
 //    "Kazakhstan",
 //    "Kenya",
 //    "Kiribati",
 //    "Kuwait",
 //    "Kyrgyz Republic",
 //    "Lao PDR",
 //    "LATIN AMERICA AND THE CARIBBEAN",
 //    "Latvia",
 //    "Least developed countries",
 //    "Lebanon",
 //    "Lesotho",
 //    "Less developed regions",
 //    "Less developed regions, excluding China",
 //    "Less developed regions, excluding least developed countries",
 //    "Liberia",
 //    "Libya",
 //    "Lithuania",
 //    "Luxembourg",
 //    "Madagascar",
 //    "Malawi",
 //    "Malaysia",
 //    "Maldives",
 //    "Mali",
 //    "Malta",
 //    "Martinique",
 //    "Mauritania",
 //    "Mauritius",
 //    "Mayotte",
 //    "Melanesia",
 //    "Mexico",
 //    "Micronesia",
 //    "Middle Africa",
 //    "Moldova",
 //    "Mongolia",
 //    "Montenegro",
 //    "More developed regions",
 //    "Morocco",
 //    "Mozambique",
 //    "Myanmar",
 //    "Namibia",
 //    "Nepal",
 //    "The Netherlands",
 //    "New Caledonia",
 //    "New Zealand",
 //    "Nicaragua",
 //    "Niger",
 //    "Nigeria",
 //    "Northern Africa",
 //    "NORTHERN AMERICA",
 //    "Northern Europe",
 //    "Norway",
 //    "OCEANIA",
 //    "Oman",
 //    "Other non-specified areas",
 //    "Pakistan",
 //    "Panama",
 //    "Papua New Guinea",
 //    "Paraguay",
 //    "Peru",
 //    "Philippines",
 //    "Poland",
 //    "Polynesia",
 //    "Portugal",
 //    "Puerto Rico",
 //    "Qatar",
 //    "Reunion",
 //    "RB-de-Venezuela",
 //    "Rep of Korea",
 //    "Rep of Yemen",
 //    "Romania",
 //    "Russian Federation",
 //    "Rwanda",
 //    "St-Lucia",
 //    "St-Vincent and the Grenadines",
 //    "Samoa",
 //    "Sao Tome and Principe",
 //    "Saudi Arabia",
 //    "Senegal",
 //    "Serbia",
 //    "Seychelles",
 //    "Sierra Leone",
 //    "Singapore",
 //    "Slovak Republic",
 //    "Slovenia",
 //    "Solomon Islands",
 //    "Somalia",
 //    "South Africa",
 //    "South America",
 //    "South Sudan",
 //    "South-Central Asia",
 //    "South-Eastern Asia",
 //    "Southern Africa",
 //    "Southern Asia",
 //    "Southern Europe",
 //    "Spain",
 //    "Sri Lanka",
 //    "West Bank and Gaza",
 //    "Sub-Saharan Africa",
 //    "Sudan",
 //    "Suriname",
 //    "Swaziland",
 //    "Sweden",
 //    "Switzerland",
 //    "Syrian Arab Rep",
 //    "Tajikistan",
 //    "Tanzania",
 //    "Thailand",
 //    "Timor-Leste",
 //    "Togo",
 //    "Tonga",
 //    "Trinidad and Tobago",
 //    "Tunisia",
 //    "Turkey",
 //    "Turkmenistan",
 //    "Uganda",
 //    "Ukraine",
 //    "United Arab Emirates",
 //    "United Kingdom",
 //    "United States",
 //    "US Virgin Islands",
 //    "Uruguay",
 //    "Uzbekistan",
 //    "Vanuatu",
 //    "Vietnam",
 //    "Western Africa",
 //    "Western Asia",
 //    "Western Europe",
 //    "Western Sahara",
 //    "World",
 //    "Zambia",
 //    "Zimbabwe"];

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
