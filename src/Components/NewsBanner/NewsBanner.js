import React, { Component } from 'react';
import './NewsBanner.css';

export default class NewsBanner extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
    this.timer = this.timer.bind(this);
    this.state = {
      crrentIndex: 0,
    };
  }

  change() {
    this.setState({ crrentIndex: this.state.crrentIndex + 1 });
    if (this.state.crrentIndex > 2) {
      this.setState({ crrentIndex: 0 });
    }
  }

  timer() {
    // 全局变量  window.timerCtrl
    window.timerCtrl = setInterval(() => {
      // console.log(this.state.crrentIndex)
      this.change();
    }, 3000);
  }

  componentDidMount() {
    this.timer();
  }

  // 组件销毁后  清除定时器
  componentWillUnmount() {
    clearInterval(window.timerCtrl);
  }
  render() {
    // 根据props 遍历生成Li
    const li = this.props.params.map((item, key) => {
      return (
        <li key={key} className={key === this.state.crrentIndex ? ' active' : ''}>
          <img src={item.imgUrl} alt="" width='100%' />
          <div className='word-container'>
            <p ref='p'>{item.title}</p>
            <span>{item.shortWord}</span>
          </div>
        </li>)
    });

    // 根据props 遍历生成btn
    const btn = this.props.params.map((item, key) => {
      return (
        <button key={key} className={key === this.state.crrentIndex ? ' active' : ''}>
          {Number(key) + 1}
        </button>
      )
    });

    //返回
    return (
      <div className='newsBanner'>
        <ul>
          {li}
        </ul>
        <div className='pageBtn'>
          {btn}
        </div>
      </div>
    );
  }
}