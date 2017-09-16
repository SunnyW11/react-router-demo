import React  from 'react';
import './Title.css';

export default function Title (props){
  return (
    <div className='titleBox'>
      <h1>{props.prams.chineseTitle}</h1>
      <div>
        <span>{props.prams.englishTitle}</span>
      </div>
      <p>{props.prams.introduceTitle}</p>
    </div>
  );
}