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

    if(value.moonPhase < 0.25) {moonStyle = "bad center-text"; moonMessage = "BAD";}
    if(value.moonPhase < 0.50) {moonStyle = "poor center-text"; moonMessage = "poor";}
    if(value.moonPhase < 0.75) {moonStyle = "good center-text"; moonMessage = "good";}
    else {moonStyle = "peak"; moonMessage="PEAK";}

    if(value.visibility < 0.25) {visStyle = "bad center-text"; visMessage = "BAD";}
    if(value.visibility < 0.50) {visStyle = "poor center-text"; visMessage = "poor";}
    if(value.visibility < 0.75) {visStyle = "good center-text"; visMessage = "good";}
    else {visStyle = "peak center-text"; visMessage="PEAK";}
    
    if(value.cloudCover < 0.25) {cloudStyle = "peak center-text"; cloudMessage = "PEAK";}
    if(value.cloudCover < 0.50) {cloudStyle = "good center-text"; cloudMessage = "good";}
    if(value.cloudCover < 0.75) {cloudStyle = "poor center-text"; cloudMessage = "poor";}
    else {cloudStyle = "bad center-text"; cloudMessage="BAD";}

    return (
        <table className="forecast">
            <tr className="weekday">
                <th colspan="2" className="day">
                    {convertDate(value.time)}
                </th>
            </tr>
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
        </table>
    )
};

export default Forecast;
