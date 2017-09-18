import React ,{ Component } from 'react';
import StaticBanner from '../../Components/StaticBanner/StaticBanner';
import Title from '../../Components/Title/Title';
import ServiceArea from '../../Components/ServiceArea/ServiceArea';
import Gallery from '../../Components/Gallery/Gallery';
import './Product.css';

const staticBanner={
  imgUrl:'../pic/banner3.jpg',
  name:'产品展示',
  englishName:'show product'
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

const Title1 = {
  chineseTitle: '产品图片',
  englishTitle: 'product picture',
  introduceTitle: '纯手工出品 诚意推荐'
}

const Title2 = {
  chineseTitle: '服务范围',
  englishTitle: 'service area',
  introduceTitle: '手工领域的佼佼者'
}
const serviceArea =[
  {
    imgUrl:'../pic/fw1.jpg',
    title:'陶瓷工艺品',
    shortIntroduction:'描述陶瓷是我国古代劳动人民的重大发明之一,欧洲人也视中国陶瓷为无价之宝。欧洲人把瓷器叫做China,久而久之就成了中国的英文名称。'
  },
  {
    imgUrl:'../pic/fw2.jpg',
    title:'手创娃娃',
    shortIntroduction:'描述人生理念与未来种种，以一种毛线穿针般的细蜜的口吻，提醒着你，尚待很多值得投入感情的事物。当每 毛呢娃娃被创造出来，便就找到了更多温暖的情绪。'
  },
  {
    imgUrl:'../pic/fw3.jpg',
    title:'手绘油画',
    shortIntroduction:'画是以用快干性的植物油调和颜料，在画布亚麻布，纸板或木板上进行制作的一个画种。油画是西洋画的主要画种之一。'
  },
  {
    imgUrl:'../pic/fw4.jpg',
    title:'家庭装饰',
    shortIntroduction:'力图对整个家庭装修过程进行规范化描述，以指导广大家庭装修业主和装修工程企业的规范运作。从设计谈起，收录了大量的设计图并先进性和指导性。'
  },
  {
    imgUrl:'../pic/fw5.jpg',
    title:'树脂工艺礼品',
    shortIntroduction:'树脂工艺品是以树脂为主要原料，通过模具浇注成型，制成各种造型美观形象逼真等，并可制成各种仿真效果。如仿汉白玉、仿木等树脂工艺品。'
  },
  {
    imgUrl:'../pic/fw6.jpg',
    title:'纯手工织布',
    shortIntroduction:'手织布的织造工艺极为复杂，从采棉纺线到上机织布等大小72道工序全部采用纯手工工艺。它的图案可以从22种色线变幻出1990多种图案。'
  },
];

export default class Product extends Component{
  render (){
    return (
      <div className='product'>
        <StaticBanner params={staticBanner}/>
        <Title prams={Title1} />
        <Gallery prams={Gallery1} />
        <Title prams={Title2} />
        <ServiceArea params={serviceArea} />
      </div>
    );
  }
}