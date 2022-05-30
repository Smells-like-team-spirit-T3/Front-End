import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Calendar from './Calendar';

export default function TripCalendar() {
    let params = useParams();
    let id = params.id;
    const baseUrl = '/trips';

    const [isLoading, setLoading] = useState(true);
    const [trip, setTrip] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await axios.get(baseUrl + "/" + String(id),);
            setTrip(result.data);
            setLoading(false);
        };
        fetchData();
    }, []);

    // console.log(trip);

    if (isLoading) {
        return (
          <div className='container'>
            <main>
              <h1>Loading...</h1>
            </main>
            <footer>
                Powered by{' '} Team Three
            </footer>
          </div>
        );
    }

    return (
        <div className='container'>
        
        <main>
        <h1 className="title">
        Let's plan our trip!
        </h1>

        <p className="description">
        This is the <code>{trip.title}</code> trip with code number <code>{id}</code>.
        </p>

        <Calendar trip={trip}/>

        </main>
        <footer>
              Powered by{' '} Team Three
        </footer>
        </div>
  )
}