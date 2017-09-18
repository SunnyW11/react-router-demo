import React, { Component } from 'react';
import Banner from '../../Components/Banner/Banner'
import Introduction from '../../Components/Introduction/Introduction';
import Recommend from '../../Components/Recommend/Recommend';
import Title from '../../Components/Title/Title';
import Gallery from '../../Components/Gallery/Gallery';
import DesignTeam from '../../Components/DesignTeam/DesignTeam';
import LatestNews from '../../Components/LatestNews/LatestNews';

const Recommend1 = {
  title: '创意新奇浪漫可爱特别实用送男女生闺蜜鲜花手表',
  pictureUrl: '../pic/bg2.jpg',
  bgUrl: '../pic/bg.jpg'
}
const Recommend2 = {
  title: '一帆风顺帆船模型摆件地中海风格装饰品仿真船模型',
  pictureUrl: '../pic/pic8.png',
  bgUrl: '../pic/bg3.jpg'
}
const Title1 = {
  chineseTitle: '产品图片',
  englishTitle: 'product picture',
  introduceTitle: '纯手工出品 诚意推荐'
}
const Title2 = {
  chineseTitle: '设计团队',
  englishTitle: 'design team',
  introduceTitle: '原创创作 无与伦比'
}
const Title3 = {
  chineseTitle: '最新新闻',
  englishTitle: 'latest news',
  introduceTitle: '关注新闻最前线'
}
const Gallery1 = {
  url: [
    '../pic/item/pic7.jpg',
    '../pic/item/pic1.jpg',
    '../pic/item/pic2.jpg',
    '../pic/item/pic3.jpg',
    '../pic/item/pic4.jpg',
    '../pic/item/pic5.jpg',
    '../pic/item/pic6.jpg',
    '../pic/item/pic7.jpg',
  ]
};
const designer = [
  {
    pic: '../pic/team.jpg',
    name: 'Baby Joe',
    job: '设计师',
    telIcon: '../pic/phone.png',
    tel: '+1 (609) 567–8974',
    emailIcon: '../pic/mail.png',
    email: 'info@demolink.org'
  },
  {
    pic: '../pic/team3.jpg',
    name: 'Deer Smith',
    job: '设计助理',
    telIcon: '../pic/phone.png',
    tel: '+1 (609) 567–8974',
    emailIcon: '../pic/mail.png',
    email: 'info@demolink.org'
  },
  {
    pic: '../pic/team4.jpg',
    name: 'David Lee',
    job: '设计助理',
    telIcon: '../pic/phone.png',
    tel: '+1 (609) 567–8974',
    emailIcon: '../pic/mail.png',
    email: 'info@demolink.org'
  }
];

const LatestNewsList =[
  {
    imgUrl:'../pic/news2.jpg',
    title:'听说上海的年轻人最近周末都去做手工了',
    time:'2017-09-12'
  },
  {
    imgUrl:'../pic/news3.jpg',
    title:'重拾手工乐趣 传统工艺悄然复兴',
    time:'2017-09-12'
  },
  {
    imgUrl:'../pic/news4.jpg',
    title:'那些快手上的青年匠人 捡起了被淡忘的传统手工艺',
    time:'2017-09-12'
  }
];
export default class Home extends Component {
  render() {

    return (
      <div>
        <Banner />
        <Introduction />
        <Recommend prams={Recommend1} />
        <Title prams={Title1} />
        <Gallery prams={Gallery1} />
        <Recommend prams={Recommend2} />
        <Title prams={Title2} />
        <DesignTeam prams={designer} />
        <Title prams={Title3} />
        <LatestNews params={LatestNewsList}/>
      </div>
    );
  }
}