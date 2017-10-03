import React from 'react';
import s from './InputUpDown.scss';
import SvgIcon from '../SvgIcon';

export default class InputUpDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: this.props.value,
    };
  }

  //when parent send new value we have to update local states
  componentWillReceiveProps(nextProps) {
    if (nextProps.value !== this.state.value) {
      this.setState({ value: nextProps.value });
    }
  }

  //help method for change value and send to the parent
  changeValue(dt) {
    const { min, max, cycle, onChange } = this.props;
    const { value } = this.state;
    let newValue = value + dt;
    if (min !== undefined && newValue < min) {
      if (cycle && max !== undefined) newValue = max;
      else return;
    }
    if (max !== undefined && newValue > max) {
      if (cycle && min !== undefined) newValue = min;
      else return;
    }
    this.setState({ value: newValue });
    if (onChange) onChange(newValue); //problem!!!!!!! why it does not see updated state????(if pass value instead newValue)
  }

  //if user will press and hold a button, then speed scrolling will turn on
  onDelay(cb) {
    this.timeoutId = setTimeout(() => {
      if (!this.intervalId) this.intervalId = setInterval(cb, 90);
    }, 300);
  }

  //Deleting all timers and intervals if they exists
  clearTimers = () => {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  };

  //when click to value, appear table with values where user can pick. It's just event that will handled by parent
  pickValueByHand = () => {
    if (this.props.pickValueByHand) this.props.pickValueByHand(this.state.value);
  };

  //insert '0' if value is between 0 and 9 (2=>02, etc.)
  prettierValue = val => {
    if (val >= 0 && val <= 9) return '0' + val.toString();
    else return val;
  };

  increase = () => {
    this.clearTimers();
    this.changeValue(1);
  };

  speedIncrease = () => {
    this.clearTimers();
    this.onDelay(() => this.changeValue(1));
  };

  decrease = () => {
    this.changeValue(-1);
  };

  speedDecrease = () => {
    this.onDelay(() => this.changeValue(-1));
  };

  render() {
    const {
      increase,
      speedIncrease,
      decrease,
      speedDecrease,
      clearTimers,
      pickValueByHand,
      prettierValue,
    } = this;
    const { value } = this.state;

    return (
      <div className={s.main}>
        <button onClick={increase} onMouseDown={speedIncrease} onMouseUp={clearTimers}>
          <SvgIcon file="arrow_up" wh={50} />
        </button>
        <button onClick={pickValueByHand}>
          <span className={s.values}>{prettierValue(value)}</span>
        </button>
        <button onClick={decrease} onMouseDown={speedDecrease} onMouseUp={clearTimers}>
          <SvgIcon file="arrow_down" wh={50} />
        </button>
      </div>
    );
  }
}
