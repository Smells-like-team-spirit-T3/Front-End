import React, {Component} from 'react';
import { DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import "./CalendarStyles.css";
import axios from 'axios';

const styles = {
  wrap: {
    display: "flex",
    margin: "40px",
    marginTop: "10px"
  },
  left: {
    marginRight: "20px"
  },
  main: {
    flexGrow: "1",
  }
};

class Calendar extends Component {
  
  constructor(props) {
    super(props);

    const tripEvents = [];
    const colors = [
      "#6aa84f",
      "#f1c232",
      "#cc4125",
      "#3abc8c"
    ];

    this.props.trip.events.forEach(event => {
      tripEvents.push({
        start: event.startDate, // "2022-05-27T12:00:00",
        end: event.endDate, // "2022-05-27T13:00:00",
        id: event.id,
        text: event.title, 
        backColor: colors[Math.floor(Math.random() * colors.length)]
      });
    })

    this.state = {
      startDate: this.props.trip.startDate,
      tripEvents: tripEvents
    };
  }

  render() {
    return (
      <div style={styles.wrap}>
        <div style={styles.left}>
          <DayPilotNavigator
            selectMode={"week"}
            showMonths={2}
            skipMonths={3}
            selectionDate={this.props.trip.startDate}
            startDate={this.props.trip.startDate}
            onTimeRangeSelected={ args => {
              this.setState({
                startDate: args.day
              });
            }}
          />
          <button 
               type="button" 
               className="btn-save-events" 
               onClick={ async () => {

                // newEvents = current events in memory
                const dp = this.calendar;
                dp.clearSelection();
                const newEvents = [];
                dp.events.list.forEach(async event => {
                  await newEvents.push({
                    title: event.text,
                    startDate: event.start.value,
                    endDate: event.end.value
                  });
                })
                
                const baseUrl = 'https://tripcalendarapi.azurewebsites.net/api/';

                // DELETE all events in db
                this.props.trip.events.forEach(async event => {
                  const res = await axios.delete(baseUrl + "events/" + String(event.id),);
                  console.log(res);
                });
                
                // POST all events in db
                console.log(newEvents);
                newEvents.forEach(async event => {
                  const res = await axios.post(baseUrl + "events?id=" + String(this.props.id), event);
                  console.log(res);
                });

                window.location.reload();

               }}>
               Save
          </button>
          <button 
               type="button" 
               className="btn-cancel-save-events" 
               onClick={() => window.location.reload()}>
               Cancel
          </button>
        </div>

        <div style={styles.main}>
        <DayPilotCalendar
          viewType={"Week"}
          durationBarVisible={false}
          startDate={this.state.startDate}
          events={this.state.tripEvents}
          ref={component => {
            this.calendar = component && component.control;
          }}
          timeRangeSelectedHandling={"Enabled"}
          onTimeRangeSelected={ async args => {
              const dp = this.calendar;
              const modal = await DayPilot.Modal.prompt("Create a new event:", "Event 1");
              dp.clearSelection();
              if (!modal.result) { return; }
              dp.events.add({
                start: args.start,
                end: args.end,
                id: DayPilot.guid(),
                text: modal.result
              });
            }}
          eventDeleteHandling={"Update"}
          onEventClick={ async args => {
              const dp = this.calendar;
              const modal = await DayPilot.Modal.prompt("Update event text:", args.e.text());
              if (!modal.result) { return; }
              const e = args.e;
              e.data.text = modal.result;
              dp.events.update(e);
            }
          } 
        />
        </div>
      </div>
    );
  }
}

export default Calendar;