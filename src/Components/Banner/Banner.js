import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Banner.css'

export default class Banner extends Component {
  constructor(props) {
    super(props);
    this.autoChange = this.autoChange.bind(this);
    this.timer = this.timer.bind(this);
    this.handlerMouserEnter = this.handlerMouserEnter.bind(this);
    this.handlerMouserLeave = this.handlerMouserLeave.bind(this);
    this.handlerCircleClick = this.handlerCircleClick.bind(this);
    this.state = {
      crrentIndex: 0,
      len: props.params.length - 1,
      isHover: false
    };
  }

  componentDidMount() {
    this.timer();
  }

  componentWillUnmount() {
    clearInterval(this.timerCtrl)
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.bannerParams !== nextProps.bannerParams) {
      return true;
    }
    if (this.state.crrentIndex !== nextState.crrentIndex) {
      return true;
    }
    return false;
  }

  autoChange(addOrDec) {
    if (addOrDec == 'add') {
      this.setState({ crrentIndex: this.state.crrentIndex + 1 }, () => {
        if (this.state.crrentIndex > this.state.len) {
          this.setState({ crrentIndex: 0 });
        }
      });
    }
    else{
      this.setState({ crrentIndex: this.state.crrentIndex - 1 }, () => {
        if (this.state.crrentIndex < 0) {
          this.setState({ crrentIndex: this.state.len });
        }
      });
    }
  }

  timer() {
    this.timerCtrl = setInterval(() => {
      this.autoChange('add');
    }, 3500);
  }

  handlerMouserEnter() {
    this.setState({ isHover: true }, () => clearInterval(this.timerCtrl))
  }

  handlerMouserLeave() {
    this.setState({ isHover: false }, () => this.timer())
  }

  handlerCircleClick(e) {
    console.log(e.currentTarget.dataset.eq);//获取的是对应的index
    var i = e.currentTarget.dataset.eq;
    this.setState({ crrentIndex: i });
  }

  render() {
    const li = this.props.params.map((item, key) => {
      return (
        <li key={key} className={key == this.state.crrentIndex ? ' active' : ''}>
          <img src={item.imgUrl} alt="" width='100%' height='100%' />
        </li>
      )
    });
    const circle = this.props.params.map((item, key) => {
      return (
        <span key={key} className={key == this.state.crrentIndex ? ' active' : ''}
          data-eq={key}
          onClick={this.handlerCircleClick}
        >
        </span>
      )
    });
    return (
      <div className='banner' onMouseEnter={this.handlerMouserEnter} onMouseLeave={this.handlerMouserLeave}>
        <ul className='picBox'>
          {li}
        </ul>

        <div className='circle'>
          {circle}
        </div>

        <a href="javascript:return ;" className='btn-prev' onClick={(e) => { this.autoChange('dec');e.stopPropagation() }} >
          <img src="../pic/hover_left.png" alt="" />
        </a>
        <a href="javascript:return ;" className='btn-next' onClick={(e) => { this.autoChange('add');e.stopPropagation() }}>
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