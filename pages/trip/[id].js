import { useRouter } from 'next/router'
import 'react-week-calendar/dist/style.css';
import TripCalendar from '../components/TripCalendar'

export default function Trip() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
        <TripCalendar pid={id}/>
    </div>
  )
}