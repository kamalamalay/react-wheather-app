
import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';

import './cardListItem.css';

const CardListItem = ({date}) => {


    const _url = "http://api.weatherapi.com";

    const monthes = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    console.log(date)
    const month = date.getMonth();
    const calendarDate = date.getDate();
    console.log(month, calendarDate)

    const [city, setCity] = useState([]);
    const [temperature, setTemp] = useState([]);
    const [icon, setIcon] = useState([]);

    useEffect(() => {
        fetch(`${_url}/v1/history.json?key=5841ce9cd29548d597d174607211809&q=Moscow&dt=2021-${month + 1}-${calendarDate}`)
            .then(res => res.json())
            .then(data => { 
                setCity(data.location.name)
                setTemp(data.forecast.forecastday[0].day.maxtemp_c)
                setIcon(data.forecast.forecastday[0].day.condition.icon)
            })
    },)

    return (
            <li className="card_item">
                <Card border="success" style={{ width: '18rem' }}>
                    <Card.Header >{city}</Card.Header>
                    <Card.Body>
                        <Card.Title>{calendarDate}, {monthes[month]}</Card.Title>
                        <Card.Text>{temperature}°C</Card.Text>
                        <Card.Text><img src={icon} alt="wheather__icon" /></Card.Text>
                    </Card.Body>
                </Card>
            </li>
    )
}

export default CardListItem;