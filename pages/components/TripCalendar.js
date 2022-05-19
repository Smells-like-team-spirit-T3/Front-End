import WeekCalendar from 'react-week-calendar';
import { mainPageBody, globalBody } from '../style';
import React from 'react';
import 'react-week-calendar/dist/style.css';
import Head from 'next/head';
import moment from 'moment';

export default function TripCalendar(props) {

    const trip = props.trip;
    const startDateVar = new Date(trip.startDate);
    const endDateVar = new Date(trip.endDate);
    const numberOfDays = (endDateVar.getTime() - startDateVar.getTime()) / (1000*60*60*24) + 1;
    
    return (
        <div className='container'>
            <link rel="stylesheet/less" type="text/css" href="style.less" />
            <script src="less.js" type="text/javascript"></script>
            <Head>
                <title>Let's GoTogether</title>
                <link rel="icon" href="https://img.icons8.com/fluency/48/000000/beach.png"/>
            </Head>
            <main>
                <h1 className="title">
                Let's plan our trip!
                </h1>

                <p className="description">
                This is the <code>{trip.title}</code> trip with code number <code>{trip.id}</code>.
                </p>

                <WeekCalendar   firstDay={moment(trip.startDate)}
                                numberOfDays={numberOfDays} 
                                dayFormat={"ddd, DD.MM"}
                                />
            </main>

            <footer>
              Powered by{' '} Team Three
            </footer>
            <style jsx>
                {mainPageBody}
            </style>

            <style jsx global>
                {globalBody}
            </style> 
        </div>
    )
}