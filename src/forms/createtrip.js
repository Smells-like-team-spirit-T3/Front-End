import './style.css'

export default function CreateTrip() {
    return (
        <div className='container'>

            <main>
                <h1 className="title">
                    Create your trip
                </h1>
                <br/>
            
                <form>
                    <label for="sdate">Departure</label>
                    <input type="date" id="sdate" name="startdate"/>

                    <label for="edate">Return</label>
                    <input type="date" id="edate" name="enddate"/>

                    <label for="country">Destination</label>
                    <input type="text" id="dest" name="dest" list="cities"/>
                    <datalist id="cities">
                        <option value="Paris">Paris</option>
                        <option value="Berlin">Berlin</option>
                        <option value="Prague">Prague</option>
                        <option value="Vienna">Vienna</option>
                        <option value="London">London</option>
                        <option value="Basel">Basel</option>
                    </datalist>

                    <input type="submit" value="Submit"/>
                </form>
            </main>

           

            <footer>
                Powered by{' '} Team Three
            </footer>

        </div> 
    )
}