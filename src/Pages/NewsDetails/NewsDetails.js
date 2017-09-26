import React, { Component } from 'react';
import StaticBanner from '../../Components/StaticBanner/StaticBanner';
import './NewsDetails.css';

const staticBanner = {
  imgUrl: '../pic/banner6.jpg',
  name: '新闻详情',
  englishName: 'news detail'
}

/**
 * 新闻详情页
 * 
 * @export
 * @class NewsDetails
 * @extends {Component}
 */
export default class NewsDetails extends Component {
  componentDidMount() {
    window.scrollTo(0, 300);
    // document.title='新闻详情';
  }
  render() {
    return (
      <div className='newsDetails'>   
        <StaticBanner params={staticBanner} />
        <div className='midbox'>
          <div className='article'>
            <h2 className='news-title'>标题：{this.props.match.params.id}</h2>
            <div>
              时间/作者/分类
            </div>
            <div className='shortWord'>
              新闻简介
            </div>
            <div className='news-text'>
              正文
            </div>
          </div>
        </div>
      </div>
    );
  }
}
