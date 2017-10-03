import React from 'react';
import s from './InputText.scss';
import Clock from '../Clock/ClockPanel';
import df from 'date-fns';
import Calendar from '../Calendar/CalendarPanel';
export default class InputText extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      isClockShowing: true,
    };
  }
  onChangeHours = value => {
    value = df.setHours(this.state.time, value);
    this.setState({ time: value });
  };
  onChangeMinutes = value => {
    value = df.setMinutes(this.state.time, value);
    this.setState({ time: value });
  };
  pickHoursByHand = () => {};
  pickMinutesByHand = () => {};

  render() {
    return (
      <div className={s.gridItem}>
        <input
          className={s.main}
          type="text"
          value={df.format(this.state.time, 'DD.MM.YYYY - HH:mm')}
          readOnly
        />

        <Clock
          time={this.state.time}
          onChangeHours={this.onChangeHours}
          onChangeMinutes={this.onChangeMinutes}
          pickHoursByHand={this.pickHoursByHand}
          pickMinutesByHand={this.pickMinutesByHand}
        />

        <Calendar />
      </div>
    );
  }
}
