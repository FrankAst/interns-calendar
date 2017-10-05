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
      isClockShow: false,
      isCalendarShow: false,
      hideAll: false,
    };
  }

  plusMonth() {
    const tmpDate = this.state.time;
    tmpDate.setMonth(tmpDate.getMonth() + 1);
    console.log(tmpDate);
    this.setState({ tmpDate });
  }
  minusMonth() {}

  onChangeHours = value => {
    const newTime = df.setHours(this.state.time, value);
    this.setState({ time: newTime });
  };

  onChangeMinutes = value => {
    const newTime = df.setMinutes(this.state.time, value);
    this.setState({ time: newTime });
  };

  pickHoursByHand = () => {};

  pickMinutesByHand = () => {};

  showClock = bool => {
    if (this.state.isCalendarShow !== this.state.isClockShow)
      this.setState({ isClockShow: bool, isCalendarShow: !bool });
    else this.setState({ isClockShow: bool });
  };

  showCalendar = bool => {
    if (this.state.isCalendarShow !== this.state.isClockShow)
      this.setState({ isCalendarShow: bool, isClockShow: !bool });
    else this.setState({ isCalendarShow: bool });
    this.setState({ isCalendarShow: bool });
  };

  // hideAll = bool => {
  //   if (bool) {
  //     this.setState({ isCalendarShow: false, isClockShow: false });
  //   }
  // };

  render() {
    const { isCalendarShow, isClockShow, time } = this.state;
    const {
      showCalendar,
      showClock,
      onChangeHours,
      onChangeMinutes,
      pickHoursByHand,
      pickMinutesByHand,
      // hideAll,
    } = this;
    return (
      <div className={s.gridItem}>
        <input
          className={s.main}
          onClick={() => showCalendar(true)}
          type="text"
          value={df.format(time, 'DD.MM.YYYY - HH:mm')}
          readOnly
        />

        {isClockShow && (
          <Clock
            time={time}
            onChangeHours={onChangeHours}
            onChangeMinutes={onChangeMinutes}
            pickHoursByHand={pickHoursByHand}
            pickMinutesByHand={pickMinutesByHand}
            showCalendar={showCalendar}
            // hide={hideAll}
          />
        )}
        {isCalendarShow && (
          <Calendar
            //  hide={hideAll}
            plusMonth={this.plusMonth}
            showClock={showClock}
          />
        )}
      </div>
    );
  }
}
