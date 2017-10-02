import React from 'react';
import MonthPicker from '../MonthPicker/MonthPicker';
import DayPicker from '../DayPicker/DayPicker';
import format from 'date-fns/format';
import s from './MainPanel.scss';

export default class MainPanel extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }
  plusMonth() {
    const tmpDate = this.state.time;
    tmpDate.setMonth(tmpDate.getMonth() + 1);
    console.log(tmpDate);
    this.setState({ tmpDate });
  }
  minusMonth() {}

  makeWeek() {
    const daysOfWeek = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
    const daysOfWeekJSX = [];
    daysOfWeek.forEach((day, i) => {
      daysOfWeekJSX.push(<div key={i}>{day}</div>);
    });
    return daysOfWeekJSX;
  }
  render() {
    return (
      <div className={s.main}>
        <MonthPicker
          month={format(this.state.time, 'MMMM')}
          year={format(this.state.time, 'YYYY')}
          plus={() => this.plusMonth()}
          minus={() => this.minusMonth()}
        />
        <DayPicker />
        <div className={s.weekDays}>{this.makeWeek()}</div>
        <button className={s.switch}>Clock</button>
      </div>
    );
  }
}
