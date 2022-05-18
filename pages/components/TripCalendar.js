import WeekCalendar from 'react-week-calendar';
import { mainPageBody, globalBody } from '../style';
import React from 'react';
import 'react-week-calendar/dist/style.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function TripCalendar(props) {
    const [isLoading, setLoading] = useState(true);
    const [trip, setTrip] = useState([]);

    useEffect(() => {
        axios.get(`/trips/1`).then((response) => {
            setTrip(response.data);
            setLoading(false);
        });
    }, []);

    if (isLoading) {
        return (
            <p>Loading...</p>
        );
    }

    return (
        <div className='container'>
            <link rel="stylesheet/less" type="text/css" href="style.less" />
            <script src="less.js" type="text/javascript"></script>
            <main>
                <h1 className="title">
                Let's plan our trip!
                </h1>

                <p className="description">
                This is the trip with code number <code>{props.pid}</code>
                </p>

                <p>
                    <ul>
                    {
                        trip.events.map(event =>
                            <li key={event.id}>{event.title},  {event.startDate},  {event.endDate}</li>
                            )
                    }
                    </ul>
                </p>

                <WeekCalendar   numberOfDays={7} 
                                dayFormat={"ddd, DD.MM"}
                                scaleUnit={20}
                                cellHeight={30}
                                />
            </main>
            <style jsx>
                {mainPageBody}
            </style>

            <style jsx global>
                {globalBody}
            </style> 
        </div>
    )
}