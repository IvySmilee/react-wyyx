import React, {Component} from 'react'

import pic from './images/limitTime/01.png'
import './MsiteLimitTime.less'

export default class InitLayer extends Component {
  render() {
    return (
      <div className="m_limit_time">
        <a className="limit_link" href="#">
          <div className="left_info">
            <div className="title">严选限时购</div>
            <div className="timimg">
              <span>00</span> : <span>52</span> : <span>35</span>
            </div>
            <div className="next">下一场：10:00开始</div>
          </div>
          <div className="right_wrap">
            <div className="img_wrap">
              <img src={pic}/>
          </div>
          <div className="price_wrap">
            <span className="price">￥66</span>
            <span className="price">￥99</span>
          </div>
      </div>
  </a>
  </div>
    )
  }
}