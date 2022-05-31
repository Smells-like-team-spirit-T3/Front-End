// import { globalBody, mainPageBody } from './style';
import { useState } from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import axios from 'axios';
// import './style.css'

export default function CreateTrip() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [destination, setDestination] = useState('')
    const [title, setTitle] = useState('Untitled Trip')
    const [participants, setParticipants] = useState('')


    const [openDialog, setOpenDialog] = useState()


    const confirmNewTrip = (startDate, endDate, destination, title, participants) => {
        // Call CREATE TRIP API
        var newTrip = {
            "title": title,
            "startdate": startDate,
            "enddate": endDate,
            "cost": 0,
            "amountparticipants": Number(participants),
            "event": []
        }

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post('https://tripcalendarapi.azurewebsites.net/api/trips', JSON.stringify(newTrip), config)
        .then(function(response) {
            console.log(response)
        })
        .catch(function(error) {
            console.log(error)
        });

        // TODO: REDIRECT
    }
      
      const handleClose = () => {
        setOpenDialog(false);
      };


    const submitTrip = (e) =>{
        e.preventDefault()
        // Open Confirmation Dialog
        setOpenDialog(true)
    }

    var notification = "Your trip to " + destination.toUpperCase() + 
    " from " + startDate + " to " + endDate +
    " for " + participants + " people. \nDo you want to create new trip?"

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

                    <label htmlFor="title">Trip Title</label>
                    <input type="text" id="title" name="title" onChange={(e) => setTitle(e.target.value)}/>

                    <label htmlFor="participants">Participants</label>
                    <input type="number" pattern="[0-9]*" id="participants" name="participants" onChange={(e) => setParticipants(e.target.value)}/>
                    
                    <input type="submit" value="Submit"/> 
                </form>

                <Dialog open={openDialog} onClose={handleClose}>
                    <DialogTitle>
                        {title} - Confirmation
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            {notification}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Back
                        </Button>
                        <Button onClick={() => confirmNewTrip(startDate, endDate, destination, title, participants)} color="primary" autoFocus>
                            Continue
                        </Button>
                    </DialogActions>
                </Dialog>
            </main>

           

            <footer>
                Powered by{' '} Team Three
            </footer>

        </div> 
    )
}