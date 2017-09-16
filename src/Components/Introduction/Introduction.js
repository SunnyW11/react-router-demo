import React, {Component} from 'react';
import './Introduction.css';

export default function Introduction(){
  return (
    <div className='introduction'>
      <div className='midbox introductionBox'>
        <div className='introductionLeft'>
          <img src="../pic/about.jpg" alt="" width='100%' height='100%'/>
        </div>
        <div className='introductionRight'>
          <p className='title'>关于我们</p>
          <p className='content'>
            深圳市一生一饰艺术品有限公司是一家集专业设计、规模化生产和国内外市场销售渠道于一体的工艺品专业生产企业。现拥有超过300名优秀技术人才，专业开发设计人员20余人，专业化礼品生产基地40000平方英尺，装备百余台国内先进 的礼品加工机械设备，是国内历史最悠久、技术最顶尖的礼品专业制造商之一，以其卓越的品牌影响力，引领整个行业。      
          </p>
        </div>
      </div>
    </div>
  )
}