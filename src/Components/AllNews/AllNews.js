import React, { Component } from 'react';
import './AllNews.css';

export default class AllNews extends Component {
  render() {
    const li = this.props.params.map((item, index) => {
      return (
        <li key={index}>
          <div><span>{item.time}</span></div>
          <div>
            <p>{item.title}</p>
            <span>{item.shortWord}</span>
          </div>
        </li>
      );
    });

    return (
      <div>
        <ul>
          {li}
        </ul>
        <div className='btn-container'>
          <button>&lt;</button>
          <button className='active' >1</button>
          <button>2</button>
          <button>&gt;</button>
        </div>
      </div>
    );
  }
}