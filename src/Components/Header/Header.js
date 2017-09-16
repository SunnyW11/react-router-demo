import React from 'react';
import {Link} from 'react-router-dom';
import './header.css';

export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='midbox headerbox'>
          <a href="#" className='logo'><img src='../pic/logo.png'/></a>
          <ul>
            <li><Link to='/home'>主页</Link></li>
            <li><Link to='/aboutUs'>关于我们</Link></li>
            <li><Link to='/product'>产品展示</Link></li>
            <li><Link to='/news'>资讯中心</Link></li>
            <li><Link to='/connect'>联系我们</Link></li>
          </ul>
        </div>
      </div>
    );
  }
}