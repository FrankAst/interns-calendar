import React from 'react';
import s from './PickerPanel.scss';
import InputUpDown from '../InputUpDown/InputUpDown';

export default function PickerPanel(props) {
  return (
    <div className={s.main}>
      <InputUpDown
        className="hours"
        time={props.hours}
        increase={() => props.increaseHours()}
        decrease={() => props.decreaseHours()}
        speedScroll={(isDelayPressed, action) => props.speedScroll(isDelayPressed, 'hours', action)}
      />
      <div className={s.separator}>:</div>
      <InputUpDown
        className="minutes"
        time={props.minutes}
        increase={() => props.increaseMinutes()}
        decrease={() => props.decreaseMinutes()}
        speedScroll={(isDelayPressed, action) =>
          props.speedScroll(isDelayPressed, 'minutes', action)}
      />
    </div>
  );
}
