import React, { Component } from 'react';
import './MessageBoard.css';

export default class MessageBoard extends Component {
  constructor(){
    super();
    this.handlerSubmit=this.handlerSubmit.bind(this);
  }
  handlerSubmit(e){
    e.preventDefault();
  }
  render() {
    return (
      <div className='form-div'>
        <form action="">
          <p className='title'>欢迎给我们留言</p>
          <textarea className='writable' name="messageBoard" id="" rows="4" maxLength='300' placeholder='请填写留言信息'></textarea>
          <input className='writable' type="text" placeholder='请填写您的姓名' maxLength='20' />
          <input className='writable' type="text" placeholder='请填写您的手机' maxLength='20' />
          <input className='writable' type="text" placeholder='请填写您的电话' maxLength='20' />
          <input className='writable' type="text" placeholder='请填写您的邮箱' maxLength='20' />

          <button className='sub' onClick={this.handlerSubmit}>提交留言</button>

        </form>
      </div>
    )
  }
}
