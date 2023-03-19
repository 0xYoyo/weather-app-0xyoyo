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
      windSpeed: responseJson.wind.speed,
      state: responseJson.weather[0].description,
    };
    console.log(weatherObj);
    return weatherObj;
  } catch (error) {
    console.log(error);
  }
}
getWeather("tel aviv");
