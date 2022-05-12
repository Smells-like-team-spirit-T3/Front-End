import WeekCalendar from 'react-week-calendar';
import 'react-week-calendar/dist/style.css';
import { calendarStyle } from '../style';

export default function TripCalendar() {
    return (
        <div>
            <link rel="stylesheet/less" type="text/css" href="style.less" />
            <script src="less.js" type="text/javascript"></script>
            <WeekCalendar   numberOfDays={7} 
                            dayFormat={"ddd, DD.MM"}
                            scaleUnit={20}
                            cellHeight={30}
                            />

            <style jsx>
                {calendarStyle}
            </style>    
        </div>
    )
}