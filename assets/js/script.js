// This calls Luxon API to keep current day and time 
const DateTime = luxon.DateTime; // Call Luxon API for time
const dt = DateTime.now(); // Set current date

// show the current date in header
function showDate() {
  $('#todayDate').html(dt.toLocaleString(DateTime.DATE_HUGE));
}

// Use "now-" and currentHour value as a class for the body element to use css selectors for color
function highlightCurrentHour() {
  let currentHour = DateTime.local().hour; // set the current hour
  $("#current-day").html(dt.toLocaleString(DateTime.DATE_HUGE)); // show the current date
  $("body").addClass(`now-${currentHour}`); 
   }

setInterval(showDate, 1000); // call for the current hour every second


// this saves the list of cities


// This is used for Calling NASA API
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

fetch(`${url}${api_key}`)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {

    // This is used for showing the Nasa image
    let imageUrl = data.hdurl;
    $("#headerArea").css("background-image", "url(" + imageUrl + ")");

    // This is used for showing the text of about image
    $('#explanation').text(data.explanation);
    console.log(data)
  });

let urlWeather = ""

// This is used for Calling Open Weather API
function changeCity(urlWeather= 'https://api.openweathermap.org/data/2.5/onecall?lat=52.5244&lon=13.4105&exclude=hourly,daily&units=metric&appid=') {

  const api_key_2 = config.OPEN_WEATHER_API_KEY
  
  
  fetch(`${urlWeather}${api_key_2}`)
    .then(function (response) {
      return response.json();
  
  
    })
    .then(function (data) {
      // this used to display icon
      let iconurl = "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png"
      $('.wicon').attr('src', iconurl);
  
      // this is used to display city
      $('.city').each(function () {
        $('.city').text(data.timezone);
      });
  
      // this is used to display temperature
      $('.temp').each(function () {
        let temp = Math.round(data.current.temp) + ' ' + '°C'
        $('.temp').text(temp)
      });
  
      // this is used to display date
      $('.date').each(function () {
        let date = new Date(data.current.dt * 1000).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
        $('.date').text(date)
      });
  
      // this is used to display time
      $('.time').each(function () {
        let time = moment().format('LTS');
        $('.time').text(time)
      });
  
      console.log(data)
    });
}

// Change the city on select
$('#myselect').on('change', function (e) {
  e.preventDefault()
  var optionSelected = $("option:selected", this);
  var valueSelected = this.value;
  
  if (valueSelected == '1') {
    changeCity('https://api.openweathermap.org/data/2.5/onecall?lat=52.5244&lon=13.4105&exclude=hourly,daily&units=metric&appid=');
  }
  else if (valueSelected == '2') {
    changeCity('https://api.openweathermap.org/data/2.5/onecall?lat=28.66&lon=77.21&exclude=hourly,daily&units=metric&appid=');
  }
  else if (valueSelected == '3') {
    changeCity('https://api.openweathermap.org/data/2.5/onecall?lat=41.85&lon=-87.65&exclude=hourly,daily&units=metric&appid=');
  }
  else if (valueSelected == '4') {
    changeCity('https://api.openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&exclude=hourly,daily&units=metric&appid=');
  }
  else if (valueSelected == '5') {
    changeCity('https://api.openweathermap.org/data/2.5/onecall?lat=48.8534&lon=2.3488&exclude=hourly,daily&units=metric&appid=');
  }
  else{
    changeCity('https://api.openweathermap.org/data/2.5/onecall?lat=52.5244&lon=13.4105&exclude=hourly,daily&units=metric&appid=')
  }

 } );

  //* Use .on as event listener for submit type
$("form").on("submit", function (e) {
  e.preventDefault();

//* Loop through textareas to place content in localStorage
  $("textarea").each(function (indexInArray, element) { 
   localStorage.setItem(element.id, element.value);
});
});

//* Use localStorage to show values on page
$("document").ready(function (e) {
  highlightCurrentHour(); // invoke immediately so there is no visual delay 
  $("textarea").each(function (indexInArray, element) {
    let value = localStorage.getItem(element.id);
    element.value = value;
  });
})

