import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import './LatestNews.css';

export default class LatestNews extends Component {
  constructor() {
    super();
    this.hoverEvent = this.hoverEvent.bind(this);
    this.onmouseleaveEvent = this.onmouseleaveEvent.bind(this);
  }
  hoverEvent(e) {
    e.preventDefault();
    e.currentTarget.getElementsByTagName('p')[0].style.color = '#37c386';
  }
  onmouseleaveEvent(e) {
    e.preventDefault();
    e.currentTarget.getElementsByTagName('p')[0].style.color = 'black';
  }
  render() {
    const li = this.props.params.map((item, index) => {
      return (
        <Link to={'/news/' + index} key={index}>
          <li key={index} onMouseEnter={this.hoverEvent} onMouseLeave={this.onmouseleaveEvent}>
            <img src={item.imgUrl} alt="" width='100%' />
            <div className='bottom-world'>
              <p ref='p'>{item.title}</p>
              <span>{item.time}</span>
            </div>
          </li>
        </Link>
      )
    });
    return (
      <div className='latestNews'>
        <ul className='midbox'>
          {li}
        </ul>
      </div>
    );
  }
}