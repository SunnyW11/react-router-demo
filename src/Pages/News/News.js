import React, { Component } from 'react';
import Title from '../../Components/Title/Title';
import StaticBanner from '../../Components/StaticBanner/StaticBanner';
import NewsList from '../../Components/NewsList/NewsList';
import NewsBanner from '../../Components/NewsBanner/NewsBanner';

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
const LatestNewsList =[
  {
    imgUrl:'../pic/news2.jpg',
    title:'听说上海的年轻人最近周末都去做手工了',
    time:'2017-09-12',
    shortWord:'开店整一年来，张柳已和许多像玖平一样想“先来玩一次”的顾客打过交道。她知道成就感对于体验课的重要性——上完课后有多少成就感直接决定了顾客对于一堂课的评价高低。而对课程的评价好坏会左右该名顾客，以及更多口碑影响范围内顾客下一次消费的决定。'
  },
  {
    imgUrl:'../pic/news3.jpg',
    title:'重拾手工乐趣 传统工艺悄然复兴',
    time:'2017-09-12',
    shortWord:'开店整一年来，张柳已和许多像玖平一样想“先来玩一次”的顾客打过交道。她知道成就感对于体验课的重要性——上完课后有多少成就感直接决定了顾客对于一堂课的评价高低。而对课程的评价好坏会左右该名顾客，以及更多口碑影响范围内顾客下一次消费的决定。'
  },
  {
    imgUrl:'../pic/news4.jpg',
    title:'那些快手上的青年匠人 捡起了被淡忘的传统手工艺',
    time:'2017-09-12',
    shortWord:'开店整一年来，张柳已和许多像玖平一样想“先来玩一次”的顾客打过交道。她知道成就感对于体验课的重要性——上完课后有多少成就感直接决定了顾客对于一堂课的评价高低。而对课程的评价好坏会左右该名顾客，以及更多口碑影响范围内顾客下一次消费的决定。'
  }
];
const LatestNewsList2 =[
  {
    imgUrl:'../pic/news2.jpg',
    title:'听说上海的年轻人最近周末都去做手工了',
    time:'2017-09-12',
    shortWord:'开店整一年来，张柳已和许多像玖平一样想“先来玩一次”的顾客打过交道。她知道...'
  },
  {
    imgUrl:'../pic/news3.jpg',
    title:'重拾手工乐趣 传统工艺悄然复兴',
    time:'2017-09-12',
    shortWord:'开店整一年来，张柳已和许多像玖平一样想“先来玩一次”的顾客打过交道。她知道...'
  },
  {
    imgUrl:'../pic/news4.jpg',
    title:'那些快手上的青年匠人 捡起了被淡忘的传统手工艺',
    time:'2017-09-12',
    shortWord:'开店整一年来，张柳已和许多像玖平一样想“先来玩一次”的顾客打过交道。她知道...'
  }
];

export default class News extends Component{
  render (){
    return (
      <div className='news'>
        <StaticBanner params={staticBanner}/>
        <Title prams={Title1} />
        <NewsList params={LatestNewsList} />
        <div className='midbox'>
          <div style={{width:'500px'}}>
          <NewsBanner params={LatestNewsList2} />
        </div>
        </div>
      </div>
    );
  }
}