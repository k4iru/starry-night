import React from 'react';
import '../styles/Forecast.css';

function convertDate(time) {

    let  weekday = ["sunday", "monday", "tuesday", "wednesday",
        "thursday", "friday", "saturday"];

    // unix timestamp from api is in seconds, Date function takes time in milliseconds
    let date = new Date(time * 1000);
    return weekday[date.getDay()];
}

function Forecast({value}) {

    let moonStyle;
    let moonMessage;
    let visStyle;
    let visMessage;
    let cloudStyle;
    let cloudMessage;

    if(value.moonPhase <= 0.09 || value.moonPhase >= 0.91) {
        moonStyle = "peak center-text"; moonMessage = "PEAK";
    }
    else if(value.moonPhase <= 0.15 || value.moonPhase >= 0.85) {
        moonStyle = "good center-text"; moonMessage = "good";
    }
    else if(value.moonPhase <= 0.40 || value.moonPhase >= 0.60) {
        moonStyle = "poor center-text"; moonMessage = "poor";
    }
    else {moonStyle = "bad center-text"; moonMessage="BAD";
    }

    if(value.visibility < 0.50) {visStyle = "bad center-text"; visMessage = "BAD";}
    else if(value.visibility < 0.70) {visStyle = "poor center-text"; visMessage = "poor";}
    else if(value.visibility < 0.90) {visStyle = "good center-text"; visMessage = "good";}
    else {visStyle = "peak center-text"; visMessage="PEAK";}

    if(value.cloudCover < 0.10) {cloudStyle = "peak center-text"; cloudMessage = "PEAK";}
    else if(value.cloudCover < 0.30) {cloudStyle = "good center-text"; cloudMessage = "good";}
    else if(value.cloudCover < 0.50) {cloudStyle = "poor center-text"; cloudMessage = "poor";}
    else {cloudStyle = "bad center-text"; cloudMessage="BAD";}

    return (
        <table className="forecast">
            <thead>
                <tr className="weekday">
                    <th colspan="2" className="day">
                        {convertDate(value.time)}
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="title">
                        Lunar Phase
                    </td>
                    <td className={moonStyle}>
                        {moonMessage}
                    </td>
                </tr>
                <tr>
                    <td className="title">
                        Visibility
                    </td>
                    <td className={visStyle}>
                        {visMessage}
                    </td>
                </tr>
                <tr>
                    <td className="title">
                        Cloud Cover
                    </td>
                    <td className={cloudStyle}>
                        {cloudMessage}
                    </td>
                </tr>
            </tbody>
        </table>
    )
};

export default Forecast;
