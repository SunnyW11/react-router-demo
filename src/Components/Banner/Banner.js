import React, { Component } from 'react';
import PropTypes from 'prop-types'; // ES6 
import './Banner.css'

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.change = this.change.bind(this);
    this.timer = this.timer.bind(this);
    this.state = {
      crrentIndex: 0,
      len: props.params.length - 1
    };
  }

  change() {
    // this.setState({ crrentIndex: this.state.crrentIndex + 1 });
    // if (this.state.crrentIndex > this.state.len) {
    //   this.setState({ crrentIndex: 0 });
    // }
    this.setState({ crrentIndex: this.state.crrentIndex + 1 }, () => {
      if (this.state.crrentIndex > this.state.len) {
        this.setState({ crrentIndex: 0 });
      }
    });
  }

  timer() {
    // const length = this.props.params.length;
    // this.setState({ len: length });

    // 全局变量  window.timerCtrl
    this.timerCtrl = setInterval(() => {
      // console.log(this.state.crrentIndex)
      this.change();
    }, 6000);
  }

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.timerCtrl)
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


Banner.propTypes = {
  params: PropTypes.array.isRequired
}

Banner.defaultProps = {
  params: [
    { imgUrl: '../pic/banner.jpg' },
    { imgUrl: '../pic/banner2.jpg' }
  ]
}