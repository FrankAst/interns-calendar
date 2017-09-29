import React from 'react';
import s from './InputText.scss';
import PickerPanel from '../PickerPanel/PickerPanel';
import format from 'date-fns/format';
export default class InputText extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
    };
  }

  increaseHours() {
    const tmpDate = this.state.time;
    tmpDate.setHours(tmpDate.getHours() + 1);
    this.setState({ tmpDate });
  }

  decreaseHours() {
    const tmpDate = this.state.time;
    tmpDate.setHours(tmpDate.getHours() - 1);
    this.setState({ tmpDate });
  }
  increaseMinutes() {
    const tmpDate = this.state.time;
    tmpDate.setMinutes(tmpDate.getMinutes() + 1);
    this.setState({ tmpDate });
  }
  decreaseMinutes() {
    const tmpDate = this.state.time;
    tmpDate.setMinutes(tmpDate.getMinutes() - 1);
    this.setState({ tmpDate });
  }

  render() {
    return (
      <div className={s.gridItem}>
        <input className={s.main} type="text" value={format(this.state.time, 'HH:mm')} />
        <PickerPanel
          hours={format(this.state.time, 'HH')}
          minutes={format(this.state.time, 'mm')}
          increaseHours={() => this.increaseHours()}
          decreaseHours={() => this.decreaseHours()}
          increaseMinutes={() => this.increaseMinutes()}
          decreaseMinutes={() => this.decreaseMinutes()}
        />
      </div>
    );
  }
}
