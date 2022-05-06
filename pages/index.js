import Head from 'next/head'

import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';

import { globalBody, mainPageBody } from './style';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Let's GoTogether</title>
        <link rel="icon" href="https://img.icons8.com/fluency/48/000000/beach.png"/>
      </Head>

      <main>
        <h1 className="title">
          Let's plan our trip!
        </h1>

        <p className="description">
          This is the trip with code number <code>204539232</code>
        </p>

        <div>
          <WeekCalendar/>
        </div>
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
