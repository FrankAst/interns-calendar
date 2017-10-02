import React from 'react';
import SvgIcon from '../../SvgIcon';
import s from './MonthPicker.scss';

export default class MonthPicker extends React.Component {
  render() {
    return (
      <div className={s.main}>
        <div className={s.month}>
          {this.props.month}, {this.props.year}
        </div>
        <button className={s.prevMonth} onClick={() => this.props.minus()}>
          <SvgIcon file="arrow_left" wh={20} />
        </button>
        <button className={s.nextMonth} onClick={() => this.props.plus()}>
          <SvgIcon file="arrow_right" wh={20} />
        </button>
      </div>
    );
  }
}
