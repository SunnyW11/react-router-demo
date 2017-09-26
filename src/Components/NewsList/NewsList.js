import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NewsList.css';

export default class NewsList extends Component {
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
/*
  此组件可与LatestNews组件合并  待完成。。。
*/
  render() {
    const li = this.props.params.map((item, index) => {
      return (
        <li key={index} onMouseEnter={this.hoverEvent} onMouseLeave={this.onmouseleaveEvent}>
          <img src={item.imgUrl} alt="" width='100%' />
          <div className='bottom-world'>
            <Link to={'/news/'+index}>
              <p ref='p'>{item.title}</p>
            </Link>
            <hr />
            <span>{item.shortWord}</span>
          </div>
        </li>)
    });
    return (
      <div className='newsList'>
        <ul className='midbox'>
          {li}
        </ul>
      </div>
    );
  }
}