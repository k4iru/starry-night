import React from 'react';
import Container from 'react-bootstrap/Container';
import '../styles/Forecast.css';

function convertDate(time) {

    let  weekday = new Array("sunday", "monday", "tuesday", "wednesday",
        "thursday", "friday", "saturday");

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

    if(value.moonPhase <= 0.05 || value.moonPhase >= 0.95) {
        moonStyle = "peak center-text"; moonMessage = "PEAK";
    }
    if(value.moonPhase <= 0.15 || value.moonPhase >= 0.85) {
        moonStyle = "good center-text"; moonMessage = "good";
    }
    if(value.moonPhase <= 0.40 || value.moonPhase >= 0.60) {
        moonStyle = "bad center-text"; moonMessage = "bad";
    }
    else {moonStyle = "bad center-text"; moonMessage="BAD";
    }

    if(value.visibility < 0.35) {visStyle = "bad center-text"; visMessage = "BAD";}
    if(value.visibility < 0.65) {visStyle = "poor center-text"; visMessage = "poor";}
    if(value.visibility < 0.85) {visStyle = "good center-text"; visMessage = "good";}
    else {visStyle = "peak center-text"; visMessage="PEAK";}

    if(value.cloudCover < 0.10) {cloudStyle = "peak center-text"; cloudMessage = "PEAK";}
    if(value.cloudCover < 0.30) {cloudStyle = "good center-text"; cloudMessage = "good";}
    if(value.cloudCover < 0.75) {cloudStyle = "poor center-text"; cloudMessage = "poor";}
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
                        Moon Phase
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
