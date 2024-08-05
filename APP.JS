
let cityNaam=document.querySelector("#cityNaam");

    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': '44f8d35ed4msh76bc5ce9dc9cd64p135c22jsnbedf760a15f0',
            'x-rapidapi-host': 'weather-api138.p.rapidapi.com'
        }
    };

    async function fetchWeatherData(city) {

        cityNaam.innerHTML=city;
        const url = 'https://weather-api138.p.rapidapi.com/weather?city_name='+ city;

    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);


grnd_level.innerHTML= result.main.grnd_level
humidity.innerHTML= result.main.humidity
pressure.innerHTML= result.main.pressure
sea_level.innerHTML= result.main.sea_level
temp.innerHTML= result.main.temp
temp_max.innerHTML= result.main.temp_max
temp_min.innerHTML= result.main.temp_min
visibility.innerHTML= result.visibility
wind.innerHTML= result.wind.speed
winddeg.innerHTML= result.wind.deg
sunset.innerHTML= result.sys.sunset
sunrise.innerHTML= result.sys.sunrise



    } catch (error) {
        console.error(error);
    }
}

let submit=document.querySelector("#submit");

submit.addEventListener("click",(e)=>{
	e.preventDefault();
	fetchWeatherData(shahar.value);
})





fetchWeatherData("Bengaluru");


