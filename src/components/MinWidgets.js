import React from 'react';
import "../minWidgets.css";

const MinWidgets = ({ weather, units }) => {
    const tempUnits = units === 'metric' ? '°C' : '°F';
    const windUnits = units === 'metric' ? 'm/s' : 'mph';

    const minWidgets = [
        {
            id: 'feels_like',
            title: "Feels Like",
            data: weather.feels_like.toFixed(),
            unit: tempUnits,
        },
        {
            id: 'humidity',
            title: "Humidity",
            data: weather.humidity.toFixed(),
            unit: '%',
        },
        {
            id: 'pressure',
            title: "Pressure",
            data: weather.pressure.toFixed(),
            unit: 'hPa',
        },
        {
            id: 'wind_speed',
            title: "Wind Speed",
            data: weather.speed.toFixed(),
            unit: windUnits,
        }
    ];

    return (
        <div className="section min_widgets">
            {minWidgets.map(({ id, title, data, unit }) => (
                <div className="mini_card" key={id}>
                    <div className="mini_card_title">
                        {/* Include an icon here if needed */}
                        <p>{title}</p>
                    </div>
                    <p>{`${data}, ${unit}`}</p>
                </div>
            ))}
        </div>
    );
};

export default MinWidgets;
