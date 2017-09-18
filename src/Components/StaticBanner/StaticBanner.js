import React from 'react';
import './StaticBanner.css';

export default function StaticBanner (props){
  return (
    <div className='staticBanner'>
      <img src={props.params.imgUrl} alt=""/>
      <div className="word">
        <div className='bannnerTitle-zh'>{props.params.name}</div>
        <div className='bannnerTitle-en'>{props.params.englishName}</div>
      </div>
    </div>
  );
}