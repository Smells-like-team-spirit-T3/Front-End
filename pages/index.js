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

        <h1>Main Page - do something</h1>

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
