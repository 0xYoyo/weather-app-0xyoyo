const firstHalf = "https://api.openweathermap.org/data/2.5/weather?q=";
const secondHalf = "&units=metric&appid=156bb9cf48ba3e68c0f016cc2573fce6";
async function getWeather(city) {
  try {
    const fullAPI = firstHalf + city + secondHalf;
    const response = await fetch(fullAPI);
    const responseJson = await response.json();
    console.log(responseJson);
    const weatherObj = {
      cityName: responseJson.name + ", ",
      countryCode: responseJson.sys.country,
      temperature: responseJson.main.temp + "° Celsius",
      windSpeed: "Wind: " + responseJson.wind.speed + " m/s",
      state: responseJson.weather[0].description,
    };
    console.log(weatherObj);
    return weatherObj;
  } catch (error) {
    console.log(error);
    alert("Please try again with a different city");
  }
}

const btn = document.querySelector("button");
const input = document.querySelector("input");
btn.addEventListener("click", async function (event) {
  const cityValue = input.value;
  const obj = await getWeather(cityValue);
  const location = document.querySelector("#location");
  const temp = document.querySelector("#temp");
  const speed = document.querySelector("#speed");
  const description = document.querySelector("#description");
  location.textContent = obj.cityName + obj.countryCode;
  temp.textContent = obj.temperature;
  speed.textContent = obj.windSpeed;
  description.textContent = obj.state;
});

input.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    btn.click();
  }
});
