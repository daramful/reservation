import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import Routes from "./Routes";
import NavBar from "./components/NavBar/navBar";
import Calendar from "./components/calendar";

// import 'react-big-calendar/lib/less/styles.css';

// let allViews = Object.keys(BigCalendar.Views).map(k => BigCalendar.Views[k])

// let Basic = React.createClass({
//   render(){
//     return (
//       <BigCalendar
//         {...this.props}
//         events={events}
//         views={allViews}
//         step={60}
//         defaultDate={new Date(2015, 3, 1)}
//       />
//     )
//   }
// })

// import 'react-big-calendar/lib/less/styles.less';
// import './styles.less';
// import './prism.less';
// import Basic from './demos/basic';
// import Selectable from './demos/selectable';
// import Cultures from './demos/cultures';
// import Popup from './demos/popup';
// import Rendering from './demos/rendering';
// import CustomView from './demos/customView';
// import Timeslots from './demos/timeslots';
// import Dnd from './demos/dnd';

// let demoRoot = 'https://github.com/onursimsek94/react-big-calendar/tree/master/examples/demos'

// const Example = React.createClass({
//   getInitialState(){
//     return {
//       selected: 'basic',
//     };
//   },

//   render() {
//     let selected = this.state.selected;
//     let Current = {
//       basic: Basic,
//       selectable: Selectable,
//       cultures: Cultures,
//       popup: Popup,
//       rendering: Rendering,
//       customView: CustomView,
//       timeslots: Timeslots,
//       dnd: Dnd,
//     }[selected];

//     return (
//       <div className='example'>
//         <Current className='demo' />
//       </div>
//     );
//   },

//   select(selected, e){
//     e.preventDefault();
//     this.setState({ selected })
//   }
// });

// render(<Example/>, document.getElementById('root'));

class App extends Component {
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Reservation</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavBar href="/signup">Signup</NavBar>
              <NavBar href="/login">Login</NavBar>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
        <Calendar />

      </div>
    );
  }
}

export default App;