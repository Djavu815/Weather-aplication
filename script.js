const urlBase= `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = `960aa1b732d4668e3ca7205a674d1c5f`
const diffkelvin = 273.15

document.getElementById("searchButton").addEventListener(`click`, () => {
    const city = document.getElementById("cityInput").value;

    if (city) {
      fetchWeather(city)
    }else {
        alert("la ciudad ingresada no es valida")
        //TODO: Mostrar error en pantalla por parrafo
    }
})

function fetchWeather(city) {
    fetch(`${urlBase}?q=${city}&appid=${API_KEY}&lang=es`)
    .then(data => data.json())
    .then (data => showWeatherData(data))
}

function showWeatherData(data) {
    const divResponsedata = document.getElementById ("responseData")
    divResponsedata.innerHTML ="";

    const cityName =data.name
    const countryName = data.sys.country
    const temp = data.main.temp
    const humidity = data.main.humidity
    const description = data.weather[0].description
    const icon = data.weather[0].icon

    const cityInfo = document.createElement(`h2`)
    cityInfo.textContent = `${cityName}, ${countryName}`

    const tempInfo = document.createElement("p")
    tempInfo.textContent = `La temperatura es: ${Math.floor(temp-diffkelvin)}°C`

    const humidityInfo = document.createElement("p")
    humidityInfo.textContent = `La humedad es del ${humidity}%`

    const icoInfo = document.createElement("img")
    icoInfo.src = `https://openweathermap.org/img/wn/${icon}@2x.png`;

    const descriptionInfo = document.createElement("p")
    descriptionInfo.textContent = `La descripcion es: ${description}`

    divResponsedata.appendChild(cityInfo)
    divResponsedata.appendChild(tempInfo)
    divResponsedata.appendChild(humidityInfo)
    divResponsedata.appendChild(icoInfo)
    divResponsedata.appendChild(descriptionInfo)
    

}
