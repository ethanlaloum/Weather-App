const apiKey = "62147ed888ef5886eb3066cacbaa0a22";
const apiUrl = "https://api.openweathermap.org/data/2.5/forecast?units=metric&q=";
const searchBox = document.querySelector(".search input");
const searchButton = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");
const searchInput = document.querySelector('.search input');
const weatherElement = document.querySelector('.weather');
const sliderContainerElement = document.querySelector('.slider-container');
weatherElement.style.display = 'none';
sliderContainerElement.style.display = 'none';

function conversion_time(apiTime)
{
    const hours = new Date(apiTime).getHours();
    const formatedHours = hours < 10 ? `0${hours}` : hours;
    return formatedHours + "h";
}

function imageWeather(data, index)
{
    switch (data.list[index].weather[0].main) {
        case "Clear":
            return "images/clear.png";
        case "Clouds":
            return "images/clouds.png";
        case "Mist":
            return "images/mist.png";
        case "Rain":
            return "images/rain.png";
        case "Snow":
            return "images/snow.png";
        case "Thunderstorm":
            return "images/thunderstorm.png";
        default:
            break;
    }
}

async function fetchData(city)
{
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`)
    if (response.ok)
        return response.json();
    else
        throw new Error("Erreur lors de la requette api")
}

function checkWeather(data)
{
    console.log(data);
    document.querySelector(".city").innerHTML = data.city.name;
    document.querySelector(".temp").innerHTML = Math.round(data.list[0].main.temp) + "°";
    document.querySelector(".humidity").innerHTML = data.list[0].main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.list[0].wind.speed + " km/h";
    switch (data.list[0].weather[0].main) {
        case "Clear":
            weatherIcon.src = "images/clear.png";
            break;
        case "Clouds":
            weatherIcon.src = "images/clouds.png";
            break;
        case "Mist":
            weatherIcon.src = "images/mist.png";
            break;
        case "Rain":
            weatherIcon.src = "images/rain.png";
            break;
        case "Snow":
            weatherIcon.src = "images/snow.png";
            break;
        case "Thunderstorm":
            weatherIcon.src = "images/thunderstorm.png";
            break;
        default:
            break;
    }
    const time = conversion_time(data.list[0].dt_txt);
    const time3 = conversion_time(data.list[1].dt_txt);
    const time6 = conversion_time(data.list[2].dt_txt);
    const time9 = conversion_time(data.list[3].dt_txt);
    const time12 = conversion_time(data.list[4].dt_txt);
    const time15 = conversion_time(data.list[5].dt_txt);
    const time18 = conversion_time(data.list[6].dt_txt);
    const time21 = conversion_time(data.list[7].dt_txt);
    const time24 = conversion_time(data.list[8].dt_txt);
    const time27 = conversion_time(data.list[9].dt_txt);
    const time30 = conversion_time(data.list[10].dt_txt);
    const time33 = conversion_time(data.list[11].dt_txt);
    const time36 = conversion_time(data.list[12].dt_txt);
    const time39 = conversion_time(data.list[13].dt_txt);
    const time42 = conversion_time(data.list[14].dt_txt);
    const time45 = conversion_time(data.list[15].dt_txt);
    const time48 = conversion_time(data.list[16].dt_txt);
    document.querySelector(".current-time").innerHTML = time;
    document.querySelector(".current-temp").innerHTML = Math.round(data.list[0].main.temp) + " °";
    document.querySelector(".weather-now").src = imageWeather(data, 0);

    document.querySelector(".time-3").innerHTML = time3;
    document.querySelector(".temp-3").innerHTML = Math.round(data.list[1].main.temp) + " °";
    document.querySelector(".weather3").src = imageWeather(data, 1);

    document.querySelector(".time-6").innerHTML = time6;
    document.querySelector(".temp-6").innerHTML = Math.round(data.list[2].main.temp) + " °";
    document.querySelector(".weather6").src = imageWeather(data, 2);

    document.querySelector(".time-9").innerHTML = time9;
    document.querySelector(".temp-9").innerHTML = Math.round(data.list[3].main.temp) + " °";
    document.querySelector(".weather9").src = imageWeather(data, 3);

    document.querySelector(".time-12").innerHTML = time12;
    document.querySelector(".temp-12").innerHTML = Math.round(data.list[4].main.temp) + " °";
    document.querySelector(".weather12").src = imageWeather(data, 4);

    document.querySelector(".time-15").innerHTML = time15;
    document.querySelector(".temp-15").innerHTML = Math.round(data.list[5].main.temp) + " °";
    document.querySelector(".weather15").src = imageWeather(data, 5);

    document.querySelector(".time-18").innerHTML = time18;
    document.querySelector(".temp-18").innerHTML = Math.round(data.list[6].main.temp) + " °";
    document.querySelector(".weather18").src = imageWeather(data, 6);

    document.querySelector(".time-21").innerHTML = time21;
    document.querySelector(".temp-21").innerHTML = Math.round(data.list[7].main.temp) + " °";
    document.querySelector(".weather21").src = imageWeather(data, 7);

    document.querySelector(".time-24").innerHTML = time24;
    document.querySelector(".temp-24").innerHTML = Math.round(data.list[8].main.temp) + " °";
    document.querySelector(".weather24").src = imageWeather(data, 8);

    document.querySelector(".time-27").innerHTML = time27;
    document.querySelector(".temp-27").innerHTML = Math.round(data.list[9].main.temp) + " °";
    document.querySelector(".weather27").src = imageWeather(data, 9);

    document.querySelector(".time-30").innerHTML = time30;
    document.querySelector(".temp-30").innerHTML = Math.round(data.list[10].main.temp) + " °";
    document.querySelector(".weather30").src = imageWeather(data, 10);

    document.querySelector(".time-33").innerHTML = time33;
    document.querySelector(".temp-33").innerHTML = Math.round(data.list[11].main.temp) + " °";
    document.querySelector(".weather33").src = imageWeather(data, 11);

    document.querySelector(".time-36").innerHTML = time36;
    document.querySelector(".temp-36").innerHTML = Math.round(data.list[12].main.temp) + " °";
    document.querySelector(".weather36").src = imageWeather(data, 12);

    document.querySelector(".time-39").innerHTML = time39;
    document.querySelector(".temp-39").innerHTML = Math.round(data.list[13].main.temp) + " °";
    document.querySelector(".weather39").src = imageWeather(data, 13);

    document.querySelector(".time-42").innerHTML = time42;
    document.querySelector(".temp-42").innerHTML = Math.round(data.list[14].main.temp) + " °";
    document.querySelector(".weather42").src = imageWeather(data, 14);

    document.querySelector(".time-45").innerHTML = time45;
    document.querySelector(".temp-45").innerHTML = Math.round(data.list[15].main.temp) + " °";
    document.querySelector(".weather45").src = imageWeather(data, 15);

    document.querySelector(".time-48").innerHTML = time48;
    document.querySelector(".temp-48").innerHTML = Math.round(data.list[16].main.temp) + " °";
    document.querySelector(".weather48").src = imageWeather(data, 16);
}

searchInput.addEventListener('input', function() {
    this.value = this.value.toUpperCase();
});

searchButton.addEventListener("click", () => {
    fetchData(searchBox.value)
        .then(data => {
            checkWeather(data)
        })
        .catch(error => {
            console.error("Error fetching weather data:", error.message)
            window.alert("Erreur lors de la recherche de la meteo. Veuillez vérifier le nom de la ville.")
        })
    weatherElement.style.display = 'block';
        sliderContainerElement.style.display = 'block';
});
