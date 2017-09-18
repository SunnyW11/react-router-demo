import React, {Component} from 'react';
import Introduction from '../../Components/Introduction/Introduction';
import StaticBanner from '../../Components/StaticBanner/StaticBanner';
import Title from '../../Components/Title/Title';
import DesignTeam from '../../Components/DesignTeam/DesignTeam';
import './Aboutus.css';

const staticBanner={
  imgUrl:'../pic/banner3.jpg',
  name:'关于我们',
  englishName:'about us'
}
const Title2 = {
  chineseTitle: '设计团队',
  englishTitle: 'design team',
  introduceTitle: '原创创作 无与伦比'
}
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

export default class Aboutus extends Component {
  render(){
    return(
      <div>
        <StaticBanner params={staticBanner} />
        <Introduction />
        <Title prams={Title2} />
        <DesignTeam prams={designer} />
      </div>
    );
  }
}