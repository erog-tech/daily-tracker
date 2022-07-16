const url = 'https://api.nasa.gov/planetary/apod?api_key='
const api_key = 'Y3nehypqs821f6ofvg9A9qu4pB9D3P83aAEk4xfK'

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
  
  const displayData = data => {
    document.getElementById('title').textContent = data.title
    document.getElementById('date').textContent = data.date
    document.getElementById('picture').src = data.hdurl
    document.getElementById('explanation').textContent = data.explanation
  }
  
  fetchNASAData()

const urlWeather = 'https://api.openweathermap.org/data/2.5/onecall?lat=52.52&lon=13.405&exclude=hourly,daily&units=metric&appid='
const api_key_2 = '3471f6859c5ebc2c8c031f9ab7932105'

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