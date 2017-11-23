import React, { Component } from 'react';
import '../Styles/Calendar.css';

let months = [
  {
    month: "January",
    lastDay: 31
  },
  {
    month: "February",
    lastDay: 28
  },
  {
    month: "March",
    lastDay: 31
  },
  {
    month: "April",
    lastDay: 30
  },
  {
    month: "May",
    lastDay: 31
  },
  {
    month: "June",
    lastDay: 30
  },
  {
    month: "July",
    lastDay: 31
  },
  {
    month: "August",
    lastDay: 31
  },
  {
    month: "September",
    lastDay: 30
  },
  {
    month: "October",
    lastDay: 31
  },
  {
    month: "November",
    lastDay: 30
  },
  {
    month: "December",
    lastDay: 31
  },
];

let daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dateToday = new Date();
let monthToday = dateToday.getMonth();
let dayToday = dateToday.getDate() + 5;
let dayOfWeek = dateToday.getDay();


class Calendar extends Component {
  constructor () {
    super ();
    this.state = {
      currentMonth: months[monthToday].month,
      currentDayName: daysOfWeek[dayOfWeek],
      currentDay: dayToday,
      monthDayDayOfWeek: []
    };
  }

  componentWillMount() {
    let result = [];
    let day = dayToday;
    let dayName = dayOfWeek;
    let month = monthToday;

    for (let i = 0 ; i < 10 ; i++){
      let indivDay = {
        day, dayName, month
      };
      result.push(indivDay);

      if (day + 1 > months[month].lastDay) {
        day = 1;
        month++;
      } else {
        day++;
      }

      if (dayName + 1 > 6) {
        dayName = 1;
      } else {
        dayName++;
      }
    }
    this.setState({
      monthDayDayOfWeek: result
    });
  }

  render() {
    return (
      <div className="Calendar">
        <h2>Today is {this.state.currentDayName}, {this.state.currentMonth} {this.state.currentDay}</h2>
        <h3>What day are you planning on going skiing?</h3>
        <h5>Due to Forecast Limitations we can only serve predictions for the next 10 days.</h5>
        <div className="Calendar-squares">
          {this.state.monthDayDayOfWeek.map((day, index) => {
            console.log(this.state.monthDayDayOfWeek);
            if (index === 0) {
              return (
                <div className="day"><span className="month">{months[day.month].month}</span><span className="today">Today!</span><span className="dayNum">{day.day}</span><span className="dayOfWeek">{daysOfWeek[day.dayName]}</span></div>
              );
            } else {
              return (
              <div className="day"><span className="month">{months[day.month].month}</span><span className="dayNum">{day.day}</span><span className="dayOfWeek">{daysOfWeek[day.dayName]}</span></div>
              );
            }
          })}
        </div>
      </div>
    )
  }
}

export default Calendar;


// import React, { Component } from 'react';
// import '../Styles/Calendar.css';

// let months = [
//   {
//     month: "November",
//     firstDay: 4,
//     lastDay: 30
//   },
//   {
//     month: "December",
//     firstDay: 6,
//     lastDay: 31
//   },
//   {
//     month: "January",
//     firstDay: 2,
//     lastDay: 31
//   },
//   {
//     month: "February",
//     firstDay: 5,
//     lastDay: 28
//   },
//   {
//     month: "March",
//     firstDay: 5,
//     lastDay: 31
//   },
//   {
//     month: "April",
//     firstDay: 1,
//     lastDay: 30
//   }  
// ];


// class Calendar extends Component {
//   constructor () {
//     super ();
//     this.state = {
//       month:"November",
//       monthIndex: 0,
//       monthStructure: []
//     };
//     this.forwardMonth = this.forwardMonth.bind(this);
//     this.backwardMonth = this.backwardMonth.bind(this);
//     this.generateMonthStructure = this.generateMonthStructure.bind(this);
//   }

//   forwardMonth () {
//     this.setState( {
//       month: months[Math.min(5, this.state.monthIndex + 1)].month,
//       monthIndex: Math.min(5, this.state.monthIndex + 1)
//     });
//   }

//   backwardMonth () {
//     this.setState( {
//       month: months[Math.max(0, this.state.monthIndex - 1)].month,
//       monthIndex: Math.max(0, this.state.monthIndex - 1)
//     });
//   }

//   generateMonthStructure (monthIndex) {
//     let dayCount = 0;
//     let totalCount = months[monthIndex].firstDay + months[monthIndex].lastDay;
//     let result = [];

//     for (dayCount ; dayCount <= 41; dayCount ++ ) {
//       if (!(dayCount < months[monthIndex].firstDay - 1) && dayCount < totalCount - 1) {
//         result.push(dayCount - months[monthIndex].firstDay + 2);
//       } else {
//         result.push('');
//       }
//     }

//     if (result[35] === '') {
//       result = result.slice(0, 35);
//     }
//     return result;
//   }



//   render () {
//     console.log(this.state);
//     return (
//       <div className="Calendar-Wrap">
//         <button onClick={this.backwardMonth}>{this.state.monthIndex > 0 ? months[this.state.monthIndex - 1].month : ""}</button>
//         <div className="Calendar">
//           <h3>{this.state.month}</h3>
//           <div className="week">  
//             {this.generateMonthStructure(this.state.monthIndex).map(day => {
//               return (<div className="day">{day}</div>);
//             })}
//           </div>          
//         </div>
//         <button onClick={this.forwardMonth}>{this.state.monthIndex < 5 ? months[this.state.monthIndex + 1].month : ""}</button>
        
//       </div>
//     )
//   }
// }

// export default Calendar;