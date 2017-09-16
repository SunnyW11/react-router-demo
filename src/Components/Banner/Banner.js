import React,{Component} from 'react';
import './Banner.css'

export default class Banner extends Component {
  render(){
    return(
      <div className='banner'>
        <ul className='picBox'>
          <li className='active'><img src="../pic/banner.jpg" alt="" width='100%' height='100%'/></li>
          <li><img src="../pic/banner2.jpg" alt=""  width='100%' height='100%'/></li>
        </ul>
        <div className='circle'>
          <a href="javascript:return false;" className='active'></a>
          <a href="javascript:return false;"></a>
        </div>
        <a href="javascript:return false;" className='btn-pre' >
          <img src="../pic/hover_left.png" alt=""/>
        </a>
        <a href="javascript:return false;" className='btn-next' >
           <img src="../pic/hover_right.png" alt=""/>
        </a>
      </div>
    )
  }
}