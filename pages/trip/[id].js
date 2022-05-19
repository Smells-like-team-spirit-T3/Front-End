import { useRouter } from 'next/router'
import 'react-week-calendar/dist/style.css';
import TripCalendar from '../components/TripCalendar'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { globalBody, mainPageBody } from '../style';
import Head from 'next/head';

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
        <div className='container'>
          <Head>
            <title>Let's GoTogether</title>
            <link rel="icon" href="https://img.icons8.com/fluency/48/000000/beach.png"/>
          </Head>
          <main>
            <h1>Loading...</h1>
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
      );
  }

  return (
    <div>
        <TripCalendar trip={trip}/>
    </div>
  )
}