import React from 'react';
import s from './InputText.scss';
// import PickerPanel from '../PickerPanel/PickerPanel';
import Calendar from '../Calendar/MainPanel/MainPanel';
import format from 'date-fns/format';
export default class InputText extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date(),
      isDelayPressed: false,
      intervalId: 0,
      delayId: 0,
    };
  }

  speedScroll(isDelayPressed, whichUnitOfTime, action) {
    if (isDelayPressed) {
      let delayId = setTimeout(() => {
        let id = setInterval(() => {
          if (whichUnitOfTime === 'hours') {
            if (action === 'increase') {
              this.increaseHours();
            } else if (action === 'decrease') {
              this.decreaseHours();
            }
          } else if (whichUnitOfTime === 'minutes') {
            if (action === 'increase') {
              this.increaseMinutes();
            } else if (action === 'decrease') {
              this.decreaseMinutes();
            }
          }
        }, 100);
        this.setState({ intervalId: id });
      }, 300);
      this.setState({ delayId: delayId });
    } else {
      clearInterval(this.state.intervalId);
      clearTimeout(this.state.delayId);
    }
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
        <input className={s.main} type="text" value={format(this.state.time, 'HH:mm')} readOnly />
        {/* <PickerPanel
          hours={format(this.state.time, 'HH')}
          minutes={format(this.state.time, 'mm')}
          increaseHours={() => this.increaseHours()}
          decreaseHours={() => this.decreaseHours()}
          increaseMinutes={() => this.increaseMinutes()}
          decreaseMinutes={() => this.decreaseMinutes()}
          speedScroll={(isDelayPressed, whichUnitOfTime, action) =>
            this.speedScroll(isDelayPressed, whichUnitOfTime, action)}
        /> */}
        <Calendar />
      </div>
    );
  }
}
