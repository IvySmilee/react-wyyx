import React, {Component} from 'react'

import pic from './images/01.jpg'
import './ShiwuLook.less'

export default class InitLayer extends Component {
  render() {
    return (
      <div className="s_look">
        <div className="l_header">严选LOOK</div>
        <a className="l_content" href="javascript:;">
          <div className="video_wrap">
            <div className="videos">
              <span className="play_icon"></span>
              <div className="time">39S</div>
            </div>
          </div>
          <div className="topic_info">
            <div className="author_info">
              <div className="avatar">
                <img src={pic}/>
              </div>
              <div className="name">选妹</div>
            </div>
            <div className="desc">唤自然系列</div>
          </div>
        </a>
      </div>
    )
  }
}