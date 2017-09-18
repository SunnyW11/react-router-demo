import React from 'react';
import './ServiceArea.css';

export default function ServiceArea (props){
  const elements=props.params.map((item,index)=>{
    return (
      <div key={index} className='item'>
        <img src={item.imgUrl} alt="" width='100px' height='100px'/>
        <p>{item.title}</p>
        <span>{item.shortIntroduction}</span>
      </div>
    );
  });
  return (
    <div className='serviceArea'>
      <div className='midbox'>
        {elements}
      </div>
    </div>
  );
}