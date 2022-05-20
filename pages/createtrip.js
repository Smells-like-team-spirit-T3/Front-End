import { globalBody, mainPageBody } from './style';
import { useState } from 'react';
import { Dialog } from '@material-ui/core';
import { DialogTitle } from '@material-ui/core';
import { DialogContent } from '@material-ui/core';
import { DialogContentText } from '@material-ui/core';
import { DialogActions } from '@material-ui/core';
import { Button } from '@material-ui/core';
import { ReactDOM } from 'react';

// import { Dialog } from 'react-native-simple-dialogs';
export default function CreateTrip() {

    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')
    const [destination, setDestination] = useState('')

    const [openDialog, setOpenDialog] = useState('')


    const confirmNewTrip = (startDate, endDate, destination) => {
        setOpenDialog(false)
        console.log("API Calling...")
    }
      
      const handleClose = () => {
        setOpenDialog(false);
      };


    const submitTrip = (e) =>{
        e.preventDefault()
        setOpenDialog(true)
    }

    var notification = "Your trip to " + destination.toUpperCase() + " from " + startDate + " to " + endDate + ". \nDo you want to create new trip?"

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

                <Dialog open={openDialog} onClose={handleClose}>
                    <DialogTitle>
                        New Trip Confirmation
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
                        <Button onClick={confirmNewTrip} color="primary" autoFocus>
                            Continue
                        </Button>
                    </DialogActions>
                </Dialog>
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