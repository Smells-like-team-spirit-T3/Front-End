import './style.css'

export default function Home() {

    return (
      <div className="container">
  
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
      </div>
    )
  }
  