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