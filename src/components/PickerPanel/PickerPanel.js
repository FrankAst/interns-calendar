import React from 'react';
import s from './PickerPanel.scss';
import InputUpDown from '../InputUpDown/InputUpDown';

export default class PickerPanel extends React.Component {
  render() {
    return (
      <div className={s.main}>
        <InputUpDown
          className="hours"
          time={this.props.hours}
          increase={() => this.props.increaseHours()}
          decrease={() => this.props.decreaseHours()}
        />
        <div className={s.separator}>:</div>
        <InputUpDown
          className="minutes"
          time={this.props.minutes}
          increase={() => this.props.increaseMinutes()}
          decrease={() => this.props.decreaseMinutes()}
        />
      </div>
    );
  }
}
