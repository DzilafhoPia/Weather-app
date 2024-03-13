function displayTemperature(response){
    let temperatureElement = document.querySelector(".weather-app-temperature");
    let temperature = (response.data.temperature.current);
    let cityElement = document.querySelector("#city");

    cityElement.innerHTML = response.data.city;
    temperatureElement.innerHTML = Math.round(temperature);
  

}

function searchCity(city) {

let apiKey = "o06117b4208t4247594d2692ef95a3f5";
let apiUrl =`https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

axios.get(apiUrl).then (displayTemperature);

}

function showCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  

  searchCity(searchInput.value);
}

let formElement = document.querySelector("#search-form");
formElement.addEventListener("submit", showCity);

searchCity("Johannesburg");