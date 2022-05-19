import Head from 'next/head'
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

        <h1>Welcome to Let'sGoTogether</h1>

        <div className="grid">
          <a href="/createtrip" className="card">
            <h3>Create your trip &rarr;</h3>
            <p>Start creating a new vacation right here.</p>
          </a>

          <a href="/entercode" className="card">
            <h3>See your trip &rarr;</h3>
            <p>Already created a trip. Enter your code here.</p>
          </a>
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
