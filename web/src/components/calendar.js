import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
 // import 'react-big-calendar/lib/css/react-big-calendar.css';
// import 'node_modules/react-big-calendar/lib/css/react-big-calendar.css';
// import 'react-big-calendar/lib/less/styles.less'
// import './styles.less'
// import './prism.less'

import BigCalendar from 'react-big-calendar-like-google';
import moment from 'moment';

BigCalendar.setLocalizer(
  BigCalendar.momentLocalizer(moment)
);

// BigCalendar.momentLocalizer(moment);

// class Calendar extends Component {
//     constructor(props, context) {
//       super(props, context);
//     }

//     render() {
//       return (
//         <div>
//           <BigCalendar
//             culture='en-GB'
//             events={this.props.tasks}
//             views={['month', 'week']}/>
//         </div>
//       );
//     }
//   }

BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment));

class Calendar extends Component {
  constructor() {
    super();
    this.state = {
      events: [],
    };
  }

  render() {
    return (
      <div className="Calendar">
        <BigCalendar
          events={this.state.events}
        />
      </div>
    );
  }
}

export default Calendar