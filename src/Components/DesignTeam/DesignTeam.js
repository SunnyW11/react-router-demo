import React, { Component } from 'react';
import './DesignTeam.css';

export default class DesignTeam extends Component {
  render() {
    return (
      <div className='designTeam'>
        <ul className='midbox'>
          {this.props.prams.map(function(item,index){
            return (
              <li data-key={index} key={index}>
                <div><img src={item.pic} alt=""  width='100px' height='100px'/></div>
                <div><h2>{item.name}</h2></div>
                <p className='job'>{item.job}</p>
                <div className='phoneNumber'>
                  <span><img src={item.telIcon} alt="" width='26px' height='26px'/></span>
                  <p>{item.tel}</p>
                </div>
                <div className='phoneNumber'>
                  <span><img src={item.emailIcon} alt="" width='26px' height='26px'/></span>
                  <p>{item.email}</p>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}