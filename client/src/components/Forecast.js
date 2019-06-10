import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/Forecast.css';


function convertDate(time) {

    let  weekday = new Array("sunday", "monday", "tuesday", "wednesday",
        "thursday", "friday", "saturday");

    let date = new Date(time * 1000);
    return weekday[date.getDay()];
}

function Forecast({value}) {
    return (
        <Container className="forecast">
            <Row className="weekday">
                <Col>
                    <h1>{convertDate(value.time)}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Moon Phase</p>
                </Col>
                <Col>
                    {value.moonPhase}
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Visibility</p>
                </Col>
                <Col>
                    {value.visibility}
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>Cloud Cover</p>
                </Col>
                <Col>
                    {value.cloudCover}
                </Col>
            </Row>
        </Container>
    )
};

export default Forecast;
