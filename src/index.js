function showCity(event) {
    event.preventDefault();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}

let formElement = document.querySelector("#form");
formElement.addEventListener("submit", showCity);