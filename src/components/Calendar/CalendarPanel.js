import React from 'react';
import MonthPicker from '../MonthPicker/MonthPicker';
import DayPicker from '../DayPicker/DayPicker';
import SvgIcon from '../SvgIcon';
// import OutsideClickHandler from '../OutsideClickHandler';
import format from 'date-fns/format';
import s from './CalendarPanel.scss';

export default class CalendarPanel extends React.Component {
  constructor() {
    super();
    this.state = { time: new Date() };
  }

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
          plus={() => this.props.plusMonth()}
          minus={() => this.props.minusMonth()}
        />
        <DayPicker />
        <div className={s.weekDays}>{this.makeWeek()}</div>
        <button className={s.switch} onClick={() => this.props.showClock(true)}>
          <SvgIcon file="clock" wh={24} />
        </button>
        {/* <OutsideClickHandler onOutsideClick={() => this.props.hide(true)} /> */}
      </div>
    );
  }
}
