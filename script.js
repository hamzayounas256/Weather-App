const apiKey = "7e76f5faca045dd0bf9d40097fce6b03";
const apiUrl =
	"https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
	const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
	var data = await response.json();

	// console.log(data);
	document.querySelector(".city").innerHTML = data.name;
	document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
	document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
	document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
	if (data.weather[0].main == "Clouds") {
		weatherIcon.src = "./assets/clouds.png";
	} else if (data.weather[0].main == "Clear") {
		weatherIcon.src = "./assets/clear.png";
	} else if (data.weather[0].main == "Drizzle") {
		weatherIcon.src = "./assets/drizzle.png";
	} else if (data.weather[0].main == "Mist") {
		weatherIcon.src = "./assets/mist.png";
	} else if (data.weather[0].main == "Rain") {
		weatherIcon.src = "./assets/rain.png";
	} else if (data.weather[0].main == "Snow") {
		weatherIcon.src = "./assets/snow.png";
	}
}

searchBtn.addEventListener("click", () => {
	checkWeather(searchBox.value);
});
