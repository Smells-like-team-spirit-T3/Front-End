import WeekCalendar from 'react-week-calendar';
import { mainPageBody, globalBody } from '../style';
import React from 'react';
import 'react-week-calendar/dist/style.css';

export default function TripCalendar(props) {

    const trip = props.trip;
    
    return (
        <div className='container'>
            <link rel="stylesheet/less" type="text/css" href="style.less" />
            <script src="less.js" type="text/javascript"></script>
            <main>
                <h1 className="title">
                Let's plan our trip!
                </h1>

                <p className="description">
                This is the <code>{trip.title}</code> trip with code number <code>{trip.id}</code>.
                </p>

                <p>
                start date: <code> {trip.startDate.slice(0,10)}</code>, 
                end date: <code> {trip.endDate.slice(0,10)}</code>,
                cost: <code>&euro;{trip.cost.toLocaleString('en-UK')} </code>	
                </p>

                
                <ul>Events:
                {
                    trip.events.map(event =>
                        <li key={event.id}>{event.title},  {event.startDate},  {event.endDate}</li>
                        )
                }
                </ul>

                
               

                <WeekCalendar   numberOfDays={7} 
                                dayFormat={"ddd, DD.MM"}
                                scaleUnit={20}
                                cellHeight={30}
                                eventComponent={()=>{1+1;}}
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