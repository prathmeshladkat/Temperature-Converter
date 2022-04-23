//Accesses the results area of the page
var farenheitResult = document.getElementById("farenheitResult");
var celsiusResult = document.getElementById("celsiusResult");
var kelvinResult = document.getElementById("kelvinResult");



//function to convert the temperature based on user input
function executeConversion() {
  var farenheitTemp = 0;
  var celsiusTemp = 0;
  var kelvinTemp = 0;

  var tempInput = document.getElementById("temp-input").value;
  var tempScale = document.getElementById("temp-scale").value;

  //Checks to ensure that input is a number 
  if ($.isNumeric(tempInput) == false) {
    alert("You must enter the temperature as a number.")
  }

  //User inputs farenheit temp  
  if (tempScale == "celsius") {
    farenheitTemp = tempInput;
    celsiusTemp = ((farenheitTemp - 32) * (5 / 9));
    // kelvinTemp = (celsiusTemp + 273.15);

    farenheitTemp = Math.round(10 * farenheitTemp) / 10;
    celsiusTemp = Math.round(10 * celsiusTemp) / 10;
    kelvinTemp = Math.round(10 * kelvinTemp) / 10;

    //Displays coversion results on the page
    farenheitResult.innerText = farenheitTemp + " degrees Farenheit.";
    celsiusResult.innerText = celsiusTemp + " degrees Celsius.";
  }


  //User inputs kelvin temp
  else if (tempScale == "kelvin") {
    fahrenheit = tempInput;
    cels = ((fahrenheit - 32) * (5 / 9));
    kelvinTemp = cels + 273.15;

    farenheitTemp = Math.round(10 * farenheitTemp) / 10;
    kelvinTemp= Math.round(10*kelvinTemp)/10;

    //Displays coversion results on the page
    farenheitResult.innerText = fahrenheit + " degrees Farenheit.";
    celsiusResult.innerText = kelvinTemp + " degrees Kelvin" ;
  }

  //User neglects to choose a temp scale
  else {
    alert("Please select a temperature scale");
  }

} //Ends function

//Calls function to convert on click
document.getElementById("convert-temp-button").addEventListener("click", executeConversion);