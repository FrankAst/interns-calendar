import React from 'react';
import s from './InputText.scss';
import PickerPanel from '../PickerPanel/PickerPanel';
import getMinutes from 'date-fns/get_minutes';
import getHours from 'date-fns/get_hours';
import format from 'date-fns/format';
import addMinutes from 'date-fns/add_minutes';
import addHours from 'date-fns/add_hours';

export default class InputText extends React.Component {
  constructor() {
    super();
    this.state = {
      hours: format(getHours(new Date()), 'HH'),
      minutes: format(getMinutes(new Date()), 'mm'),
    };
  }
  // increaseHours() {
  //   let hours = this.prettierHours(this.state.hours + 1);
  //   this.setState({
  //     hours: hours,
  //   });
  // }
  increaseHours() {
    const hours = format(getHours(addHours(new Date(), 1)), 'HH');
    alert(hours);
  }
  decreaseHours() {
    let hours = this.prettierHours(this.state.hours - 1);
    this.setState({
      hours: hours,
    });
  }
  increaseMinutes() {
    let minutes = this.prettierMinutes(this.state.minutes + 1);
    this.setState({
      minutes: minutes,
    });
  }
  decreaseMinutes() {
    let minutes = this.prettierMinutes(this.state.minutes - 1);
    this.setState({
      minutes: minutes,
    });
  }
  prettierHours(hour) {
    if (hour > 23) hour = 0;
    if (hour < 0) hour = 23;
    return hour;
  }
  prettierMinutes(minute) {
    if (minute > 59) minute = 0;
    if (minute < 0) minute = 59;
    return minute;
  }
  render() {
    return (
      <div className={s.gridItem}>
        <input
          className={s.main}
          type="text"
          defaultValue={this.state.hours + ' : ' + this.state.minutes}
        />
        <PickerPanel
          hours={this.state.hours}
          minutes={this.state.minutes}
          increaseHours={() => this.increaseHours()}
          decreaseHours={() => this.decreaseHours()}
          increaseMinutes={() => this.increaseMinutes()}
          decreaseMinutes={() => this.decreaseMinutes()}
        />
      </div>
    );
  }
}
