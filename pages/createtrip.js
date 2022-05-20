import { globalBody, mainPageBody } from './style';
import { useState } from 'react';

export default function CreateTrip() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [destination, setDestination] = useState('')

    const handleConfirm = () => {
        doStuff();
        notify('Stuff is done.');
        handleSubmit();
        setOpen(false);
    };


    const submitTrip = (e) =>{
        e.preventDefault()
        console.log("SUBMIT...")
        console.log(startDate)
        console.log(endDate)
        console.log(destination)
        var notification = "Your trip to " + destination.toUpperCase() + " from " + startDate + " to " + endDate + ". \nDo you want to create new trip?"
        alert(notification)
    }

    return (
        <div className='container'>

            <main>
                <h1 className="title">
                    Create your trip
                </h1>
                <br/>
            
                <form onSubmit={(e) => submitTrip(e)}>
                    <label htmlFor="sdate">Departure</label>
                    <input type="date" id="sdate" name="startdate" onChange={(e) => setStartDate(e.target.value)}/>

                    <label htmlFor="edate">Return</label>
                    <input type="date" id="edate" name="enddate" onChange={(e) => setEndDate(e.target.value)}/>

                    <label htmlFor="country">Destination</label>
                    <input type="text" id="dest" name="dest" list="cities" onChange={(e) => setDestination(e.target.value)}/>
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

            <style jsx>
                {mainPageBody}
            </style>

            <style jsx global>
                {globalBody}
            </style>
        </div> 
    )
}