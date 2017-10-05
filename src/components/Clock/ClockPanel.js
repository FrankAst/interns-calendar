import React from 'react';
import s from './ClockPanel.scss';
import InputUpDown from '../InputUpDown/InputUpDown';
// import OutsideClickHandler from '../OutsideClickHandler';
import SvgIcon from '../SvgIcon';

export default function ClockPanel(props) {
  return (
    <div className={s.main}>
      <InputUpDown
        value={props.time.getHours()}
        pickValueByHand={props.pickHoursByHand}
        onChange={props.onChangeHours}
        min={0}
        max={23}
        cycle
      />
      <div className={s.separator}>:</div>
      <InputUpDown
        value={props.time.getMinutes()}
        pickValueByHand={props.pickMinutesByHand}
        onChange={props.onChangeMinutes}
        min={0}
        max={59}
        cycle
      />
      <button className={s.switch} onClick={() => props.showCalendar(true)}>
        <SvgIcon file="calendar" wh={20} />
      </button>
      {/* <OutsideClickHandler onOutsideClick={() => console.log('done')} /> */}
    </div>
  );
}
