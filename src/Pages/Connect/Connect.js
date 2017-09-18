import React, { Component } from 'react';
import Title from '../../Components/Title/Title';
import StaticBanner from '../../Components/StaticBanner/StaticBanner';
import LatestNews from '../../Components/LatestNews/LatestNews';

import './Connect.css';

const staticBanner={
  imgUrl:'../pic/banner5.jpg',
  name:'联系我们',
  englishName:'connect us'
}
const Title1 = {
  chineseTitle: '联系我们',
  englishTitle: 'connect us',
  introduceTitle: '我们以最快的方式给你回应'
}
export default class Connect extends Component{
  render (){
    return (
      <div className='connect'>
        <StaticBanner params={staticBanner}/>
        <Title prams={Title1} />
      </div>
    );
  }
}