import React, { Component } from 'react';
import './Gallery.css';

export default class Gallery extends Component {
  render() {
    return (
      <div className='gallery'>
        <div className='midbox'>
          <ul>
            {
              this.props.prams.url.map(function (item, index) {
                return <li key={index}><img src={item} alt="" /></li>;
              })
            }
          </ul>
        </div>
      </div>
    )
  }
}