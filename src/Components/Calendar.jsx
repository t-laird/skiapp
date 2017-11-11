import React, { Component } from 'react';
import '../Styles/Calendar.css';

let months = [
  {
    month: "November",
    firstDay: 4,
    lastDay: 30
  },
  {
    month: "December",
    firstDay: 6,
    lastDay: 31
  },
  {
    month: "January",
    firstDay: 2,
    lastDay: 31
  },
  {
    month: "February",
    firstDay: 5,
    lastDay: 28
  },
  {
    month: "March",
    firstDay: 5,
    lastDay: 31
  },
  {
    month: "November",
    firstDay: 1,
    lastDay: 30
  }  
];


class Calendar extends Component {
  constructor () {
    super ();
    this.state = {
      month:"November",
      monthIndex: 0,
      monthStructure: []
    };
    this.forwardMonth = this.forwardMonth.bind(this);
    this.backwardMonth = this.backwardMonth.bind(this);
    this.generateMonthStructure = this.generateMonthStructure.bind(this);
  }

  forwardMonth () {
    this.generateMonthStructure();
    this.setState( {
      month: months[Math.min(5, this.state.monthIndex + 1)].month,
      monthIndex: Math.min(5, this.state.monthIndex + 1)
    });
  }

  backwardMonth () {
    this.generateMonthStructure();
    this.setState( {
      month: months[Math.max(0, this.state.monthIndex - 1)].month,
      monthIndex: Math.max(0, this.state.monthIndex - 1)
    });
  }

  generateMonthStructure () {
    let dayCount = 0;
    let totalCount = months[this.state.monthIndex].firstDay + months[this.state.monthIndex].lastDay;
    let result = [];

    for (dayCount ; dayCount <= 41; dayCount ++ ) {
      if (!(dayCount < months[this.state.monthIndex].firstDay - 1) && dayCount < totalCount - 1) {
        result.push(dayCount - months[this.state.monthIndex].firstDay + 2);
      } else {
        result.push('');
      }
    }

    if (result[35] === '') {
      result = result.slice(0, 35);
    }

    this.setState({
      monthStructure: result
    });
    
    console.log('generate map array');
    console.log(result);
  }

  // componentDidMount () {
  //   this.generateMonthStructure();
  // }

  componentWillMount () {
    this.generateMonthStructure();
  }


  render () {
    console.log(this.state);
    return (
      <div className="Calendar-Wrap">
        <button onClick={this.backwardMonth}>{this.state.monthIndex > 0 ? months[this.state.monthIndex - 1].month : ""}</button>
        <div className="Calendar">
          <h3>{this.state.month}</h3>
          <div className="week">  
            {this.state.monthStructure.map(day => {
              return (<div className="day">{day}</div>);
            })}
          </div>          
        </div>
        <button onClick={this.forwardMonth}>{this.state.monthIndex < 5 ? months[this.state.monthIndex + 1].month : ""}</button>
        
      </div>
    )
  }
}

export default Calendar;