import React , {Component} from 'react';
import './Recommend.css';

export default class Recommend extends Component {
  componentDidMount(){
    // console.log(this.state);
    // console.log(this.title);
    // console.log(this.pictureUrl);
  }
  render(){
    return(
      <div className='recommend' style={{backgroundImage:`url(${this.props.prams.bgUrl})`}}>
        <div className='centerbox'>
          <div className='left'>
            <h2>良心出品 诚意推荐</h2>
            <h3>Conscience</h3>
            <p>{this.props.prams.title}</p>
            <button>查看更多</button>
          </div>
          <div className='right'>
            <img src={this.props.prams.pictureUrl} alt=""/>
          </div>
        </div>
      </div>
    );
  }

}