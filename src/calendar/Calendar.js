import React, {Component} from 'react';
import { DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import "./CalendarStyles.css";

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
    this.props.trip.events.forEach(event => {
      tripEvents["push"]({
        start: event.startDate, // "2022-05-27T12:00:00",
        end: event.endDate, // "2022-05-27T13:00:00",
        id: event.id,
        text: event.title // backColor
      });
    })
    
    console.log(tripEvents);

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