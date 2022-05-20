import React, {Component} from 'react';
import { DayPilot, DayPilotCalendar, DayPilotNavigator} from "@daypilot/daypilot-lite-react";
import "./CalendarStyles.css";

const styles = {
  wrap: {
    display: "flex"
  },
  left: {
    marginRight: "10px"
  },
  main: {
    flexGrow: "1"
  }
};


const events = [
  {
    id: 1,
    text: "Event 1",
    start: "2001-11-19T10:30:00",
    end: "2001-11-19T13:00:00"
  },
  {
    id: 2,
    text: "Event 2",
    start: "2001-11-20T09:30:00",
    end: "2001-11-20T11:30:00",
    backColor: "#6aa84f"
  },
  {
    id: 3,
    text: "Event 3",
    start: "2001-11-21T12:00:00",
    end: "2001-11-21T15:00:00",
    backColor: "#f1c232"
  },
  {
    id: 4,
    text: "Event 4",
    start: "2001-11-22T11:30:00",
    end: "2001-11-22T14:30:00",
    backColor: "#cc4125"
  },
];

class Calendar extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      startDate: this.props.trip.startDate
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
            startDate={this.props.trip.startDate}
            selectionDate={this.props.trip.startDate}
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
          events={events}
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