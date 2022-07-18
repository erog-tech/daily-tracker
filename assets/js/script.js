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

$(function() {
    let imageUrl = 'https://apod.nasa.gov/apod/image/2207/Quintet_JwstHstEtcGendler_2413.jpg';
    $("#headerArea").css("background-image", "url(" + imageUrl + ")");
});

// This is used for Calling NASA API
const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = config.NASA_API_KEY

const fetchNASAData = async () => {
    try {
      const response = await fetch(`${url}${api_key}`)
      const data = await response.json()
      console.log('NASA APOD data', data)
      displayData(data)
    } catch (error) {
      console.log(error)
    }
  }
  
  const displayData = function(data) {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('explanation').textContent = data.explanation
  }
  
  fetchNASAData()

  // This is used for Calling Open Weather API
const urlWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=52.52&lon=13.405&exclude=hourly,daily&units=metric&appid='
const api_key_2 = config.OPEN_WEATHER_API_KEY

const fetchWeatherData = async () => {
    try {
      const response = await fetch(`${urlWeather}${api_key_2}`)
      const data = await response.json()
      console.log('Weather data', data)
      displayData_2(data)
    } catch (error) {
      console.log(error)
    }
  }
  const displayData_2 = data => {
    document.getElementById('temp').textContent = data.timezone + ': ' + data.current.temp + ' °C ' 
  }
  
  fetchWeatherData()