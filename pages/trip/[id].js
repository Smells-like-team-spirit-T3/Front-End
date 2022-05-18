import { useRouter } from 'next/router'
import 'react-week-calendar/dist/style.css';
import TripCalendar from '../components/TripCalendar'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Trip() {

  const router = useRouter();

  const [isLoading, setLoading] = useState(true);
  const [trip, setTrip] = useState([]);
  
  useEffect(async() => {
      if(!router.isReady) return;
      const { id } = router.query;
      console.log(id);

      await axios.get(`/api/trips/${id}`).then((response) => {
        setTrip(response.data);
        setLoading(false);
      });
  }, [router.isReady]);

  if (isLoading) {
      return (
          <p>Loading...</p>
      );
  }

  return (
    <div>
        <TripCalendar trip={trip}/>
    </div>
  )
}