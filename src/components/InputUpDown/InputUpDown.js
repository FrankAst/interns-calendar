import React from 'react';
import './InputUpDown.css';
import SvgIcon from '../SvgIcon';

// https://date-fns.org/ - for working with Date
// https://eonasdan.github.io/bootstrap-datetimepicker/ - What we want to get
// https://react.rocks/tag/DatePicker - React examples

export default class InputUpDown extends React.Component {
  render() {
    this.state = {
      addNull: '',
    };

    // if (this.props.time >= 0 && this.props.time <= 9) this.state.addNull = '0';

    return (
      <div className={this.props.className}>
        <button className="buttonUp" onClick={() => this.props.increase()}>
          <SvgIcon file="arrow_up" wh={30} />
        </button>
        <div className="unit">
          {/* {this.state.addNull} */}
          {this.props.time}
        </div>
        <button className="buttonDown" onClick={() => this.props.decrease()}>
          <SvgIcon file="arrow_down" wh={30} />
        </button>
      </div>
    );
  }
}
