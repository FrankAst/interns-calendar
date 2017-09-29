import React from 'react';
import './InputUpDown.css';
import SvgIcon from '../SvgIcon';

export default function InputUpDown(props) {
  return (
    <div className={props.className}>
      <button className="buttonUp" onClick={() => props.increase()}>
        <SvgIcon file="arrow_up" wh={30} />
      </button>
      <div className="unit">{props.time}</div>
      <button className="buttonDown" onClick={() => props.decrease()}>
        <SvgIcon file="arrow_down" wh={30} />
      </button>
    </div>
  );
}
