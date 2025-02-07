//https://api.openweathermap.org/data/2.5/weather?q={city name},{state code},{country code}&appid={API key}
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const API_KEY = '8c57b8750bc35b8c52903e520dc81b7b';

const getWeatherData = async (city, units = 'metric') => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    const getIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}.png`;

    const data = await fetch(URL)
        .then(res => res.json())
        .then(data => data)
    console.log(data)

    const {
        sys: {country},
        wind: {speed},
        weather,
        main: {temp, feels_like, humidity, pressure},
        name


    } = data;

    const {description, icon} = weather[0];


    return {
        country,
        name,
        speed,
        temp,
        feels_like,
        humidity,
        pressure,
        description,
        iconURL: getIconURL(icon)
    }


}

export {getWeatherData}



