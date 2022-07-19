// This calls Luxon API to keep current day and time 
const DateTime = luxon.DateTime; // Call Luxon API for time
const dt = DateTime.now(); // Set current date

// show the current date in header
function showDate() {
  $('#todayDate').html(dt.toLocaleString(DateTime.DATE_HUGE)); 
}

setInterval(showDate, 1000); // call for the current hour every second


// Pull the background image into the header
function myFunction() {
  document.body.style.backgroundColor = "#f3f3f3";
  document.body.style.backgroundImage = "url('img_tree.png')";
}

// $(function() {
//     let imageUrl = 'https://apod.nasa.gov/apod/image/2207/Quintet_JwstHstEtcGendler_2413.jpg';
//     $("#headerArea").css("background-image", "url(" + imageUrl + ")");
// });


// This is used for Calling NASA API
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

      fetch(`${url}${api_key}`)
        .then(function(response){
          return response.json();
        })
        .then(function (data) {
          let imageUrl = data.hdurl;
          $("#headerArea").css("background-image", "url(" + imageUrl + ")");
          document.getElementById('explanation').textContent = data.explanation
          console.log(data)
        });

  // This is used for Calling Open Weather API
const urlWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=52.52&lon=13.405&exclude=hourly,daily&units=metric&appid='
const api_key_2 = config.OPEN_WEATHER_API_KEY


  fetch(`${urlWeather}${api_key_2}`)
    .then(function(response){
      return response.json(); 
      
      
      })
      .then(function (data){
        let iconurl = "http://openweathermap.org/img/w/" + data.current.weather[0].icon + ".png"
        $('.wicon').attr('src', iconurl);
        document.getElementById('city').textContent = 'City:' +' ' +  data.timezone
        document.getElementById('temp').textContent = data.current.temp + ' ' + ' °C'
        document.getElementById('date1').textContent = new Date(data.current.dt*1000).toLocaleDateString("en-GB", {day: "numeric", month:  "short", year: "numeric"});
        document.getElementById('time').textContent = new Date(data.current.dt*1000).toLocaleDateString("en-GB", {weekday: "short", hour: "numeric", minute: "numeric"});
        console.log(data)
      });
      
  // this saves the list of cities
  // $( function() {
  //   var availableTags = [
  //     "Berlin",
  //     "New Delhi",
  //     "Chicago",
  //     "London",
  //     "Paris",
  //     "San Francisco",
  //     "New York",
  //     "Barcelona",
  //     "Madrid",
  //     "Athens",
  //     "Mumbai",
  //     "Cairo"
  //   ];
  //   $( "#tags" ).autocomplete({
  //     source: availableTags
  //   });
  // } );