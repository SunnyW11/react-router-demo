import React from 'react';
// import {Link} from 'react-router-dom';
import './header.css';
import {
  BrowserRouter as Router,
  Link,
  Route
} from 'react-router-dom';

// Route里面 children 和 component不同，children会一直显示 ，component则是在路由匹配的时候显示。    
const OldSchoolMenuLink = ({ label, to , activeOnlyWhenExact }) => (
  <Route path={to}  exact={activeOnlyWhenExact} children={({ match }) => (
    <li >
      <Link to={to} className={match ? 'active' : ''}>{label}</Link>
    </li>
  )}/>
)

/*此方法被抛弃*/
// <li><Link to='/home'>主页</Link></li>
// <li><Link to='/aboutUs'>关于我们</Link></li>
// <li><Link to='/product'>产品展示</Link></li>
// <li><Link to='/news'>资讯中心</Link></li>
// <li><Link to='/connect'>联系我们</Link></li>


export default class Header extends React.Component {
  render() {
    return (
      <div className='header'>
        <div className='midbox headerbox'>
          <a href="#" className='logo'><img src='../pic/logo.png'/></a>
          <ul>
              <OldSchoolMenuLink to="/" activeOnlyWhenExact={true} label="主页"/>
              <OldSchoolMenuLink to="/aboutUs" label="关于我们"/>
              <OldSchoolMenuLink to="/product" label="产品展示"/>
              <OldSchoolMenuLink to="/news" label="资讯中心"/>
              <OldSchoolMenuLink to="/connect" label="联系我们"/>
          </ul>
        </div>
      </div>
    );
  }
}