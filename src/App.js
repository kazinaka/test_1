import React, { useEffect, useState } from 'react';
import image from './images/GetMedia.jpeg';
import { getWeatherData } from "./WeatherService";
import MinWidgets from "./components/MinWidgets";

function App() {
    const [city, setCity] = useState('Miami');
    const [weather, setWeather] = useState(null);
    const [units, setUnits] = useState("metric");

    useEffect(() => {
        const fetchWeatherData = async () => {
            try {
                const data = await getWeatherData(city, units);
                setWeather(data);
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };
        fetchWeatherData();
    }, [city, units]);

    const enterTap = (event) => {
        if (event.keyCode === 13) {
            setCity(event.target.value);
        }
    };

    const toggleUnits = () => {
        setUnits((prevUnits) => (prevUnits === "metric" ? "imperial" : "metric"));
    };

    return (
        <div className="App" style={{ backgroundImage: `url(${image})` }}>
            <div className="overlay">
                {weather && (
                    <div className="container">
                        <div className="section section_input">
                            <input
                                type="text"
                                placeholder="Enter City"
                                onKeyDown={enterTap}
                            />
                            <button onClick={toggleUnits}>
                                {units === "metric" ? "°F" : "°C"}
                            </button>
                        </div>

                        <div className="section section_weather">
                            <div>
                                <h2>{weather.name}, {weather.country}</h2>
                                <img src={weather.iconURL} alt="" />
                                <h2>{weather.main}</h2>
                            </div>

                            <div>
                                <h1>{`
                                    ${weather.temp.toFixed()}
                                    ${units === "metric" ? '°C' : '°F'}
                                `}</h1>
                            </div>
                        </div>

                        <MinWidgets
                            weather={weather}
                            units={units}
                        />
                    </div>
                )}
            </div>
        </div>
    );
}

export default App;
