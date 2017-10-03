import React from 'react';
import s from './ClockPanel.scss';
import InputUpDown from '../InputUpDown/InputUpDown';
import SvgIcon from '../SvgIcon';
import format from 'date-fns/format';

export default function ClockPanel(props) {
  return (
    <div className={s.main}>
      <InputUpDown
        value={parseInt(format(props.time, 'HH'), 10)}
        pickValueByHand={props.pickHoursByHand}
        onChange={props.onChangeHours}
        min={0}
        max={23}
        cycle
      />
      <div className={s.separator}>:</div>
      <InputUpDown
        value={parseInt(format(props.time, 'mm'), 10)}
        pickValueByHand={props.pickMinutesByHand}
        onChange={props.onChangeMinutes}
        min={0}
        max={59}
        cycle
      />
      <button className={s.switch}>
        <SvgIcon file="calendar" wh={20} />
      </button>
    </div>
  );
}
