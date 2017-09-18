import React, { Component } from 'react';
import Title from '../../Components/Title/Title';
import StaticBanner from '../../Components/StaticBanner/StaticBanner';
import LatestNews from '../../Components/LatestNews/LatestNews';

import './News.css';

const staticBanner={
  imgUrl:'../pic/banner6.jpg',
  name:'资讯中心',
  englishName:'news center'
}
const Title1 = {
  chineseTitle: '资讯中心',
  englishTitle: 'news center',
  introduceTitle: '更多资讯尽在此'
}
export default class News extends Component{
  render (){
    return (
      <div className='news'>
        <StaticBanner params={staticBanner}/>
        <Title prams={Title1} />
      </div>
    );
  }
}