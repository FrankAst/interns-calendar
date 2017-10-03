import React from 'react';
import s from './DayPicker.scss';
import getDaysInMonth from 'date-fns/get_days_in_month';
import getDay from 'date-fns/get_day';

export default class DayPicker extends React.Component {
  makeMonth() {
    var numberOfDays = getDaysInMonth(new Date(2017, 4));
    let shift = getDay(new Date(2017, 4));
    const daysOfMonth = [];
    const daysOfMonthJSX = [];
    for (var i = 1; i <= numberOfDays; ++i) {
      while (shift !== 0) {
        daysOfMonth.push('');
        shift = shift - 1;
      }
      daysOfMonth.push(i);
    }
    daysOfMonth.forEach((day, i) => {
      daysOfMonthJSX.push(<button key={i}>{day}</button>);
    });

    return daysOfMonthJSX;
  }
  render() {
    return <div className={s.main}>{this.makeMonth()}</div>;
  }
}
