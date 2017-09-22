import React, { Component } from 'react';
import './Banner.css'

export default class Banner extends Component {
  constructor() {
    super();
    this.change = this.change.bind(this);
    this.timer = this.timer.bind(this);
    this.state = {
      crrentIndex: 0,
      len: 0
    };
  }

  change() {

    this.setState({ crrentIndex: this.state.crrentIndex + 1 });
    if (this.state.crrentIndex > 1) {
      this.setState({ crrentIndex: 0 });
    }
  }

  timer() {
    // 全局变量  window.timerCtrl
    window.timerCtrl = setInterval(() => {
      // console.log(this.state.crrentIndex)
      this.change();
    }, 6000);
  }
  
  componentWillMount() {
    const length = this.props.params.length;
    this.setState({ len: length });
  }

  componentDidMount() {
    this.timer();
  }

  render() {
    const li = this.props.params.map((item, key) => {
      return (
        <li key={key} className={key === this.state.crrentIndex ? ' active' : ''}>
          <img src={item.imgUrl} alt="" width='100%' height='100%' />
        </li>
      )
    });
    const circle = this.props.params.map((item, key) => {
      return (
        <button key={key} className={key === this.state.crrentIndex ? ' active' : ''}>
        </button>
      )
    });
    return (
      <div className='banner'>
        <ul className='picBox'>
          {li}
        </ul>

        <div className='circle'>
          {circle}
        </div>

        <a href="javascript:return false;" className='btn-prev' >
          <img src="../pic/hover_left.png" alt="" />
        </a>
        <a href="javascript:return false;" className='btn-next' >
          <img src="../pic/hover_right.png" alt="" />
        </a>
      </div>
    )
  }
}