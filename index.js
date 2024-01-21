const icon = document.getElementById('icon');
const description = document.querySelector('.description');
const temprature = document.querySelector('.temprature>span');
const place = document.querySelector('.place');
const humidValue = document.getElementById('humidValue');
const windSpeed = document.getElementById('windSpeed');
function renderApp(data) {
    icon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
    icon.alt = data.weather[0].description;
    description.textContent = data.weather[0].description;

    temprature.textContent = Math.round(data.main.temp);
    place.textContent = data.name;

    humidValue.textContent = data.main.humidity;
    windSpeed.textContent = data.wind.speed;
}

function fetchWeather(place) {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${place}&appid=324ba46de7f87bd6fe3cde2cbdcd22d8&units=metric`;
    fetch(URL)
        .then((resp) => resp.json())
        .then((data) => {
            if (data.cod !== 200) {
                console.error('Invalid response', data);
                alert(data.message);
                return;
            }
            console.log(data);
            renderApp(data);
        })
        .catch((err) => {
            console.error('catch block', err);
        });
}

fetchWeather('Murwara');