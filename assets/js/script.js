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

// This is used for Calling Open Weather API
const urlWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=52.52&lon=13.405&exclude=hourly,daily&units=metric&appid='
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
      let temp = data.current.temp + ' ' + '°C'
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

$( function() {
  var availableTags = [
    "Berlin",
    "New Delhi",
    "Chicago",
    "London",
    "Paris",
    "San Francisco",
    "New York",
    "Barcelona",
    "Madrid",
    "Athens",
    "Mumbai",
    "Cairo"
  ];
  $( "#tags" ).autocomplete({
    source: availableTags
  });
} );