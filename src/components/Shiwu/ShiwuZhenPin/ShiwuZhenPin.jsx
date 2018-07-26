import React, {Component} from 'react'

import pic from './images/01.jpg'
import './ShiwuZhenPin.less'

export default class InitLayer extends Component {
  render() {
    return (
      <div className="s_zhenpin">
        <div className="z_header">严选甄品</div>
        <a className="z_main_post" >
          <div className="post_wrap">
            <div className="name">
              <div className="name_title">刚刚</div>
            </div>
          </div>
          <div className="post_info">
            <div className="title_price">
              <span className="title">胡会计和</span>
              <span className="price">998元起</span>
            </div>
            <div className="subtitle">石头人啥都想吃</div>
          </div>
        </a>
        <a className="z_item" href="javascript:;">
          <div className="r_item_left">
            <div className="user">
              <div className="avatar">
                <img src={pic}/>
              </div>
              <div className="name">丁磊</div>
            </div>
            <div className="title">这款有机茶叶饮料，无糖不怕胖</div>
            <div className="subtitle">云萃龙井茶饮料限时69.8元一箱</div>
          </div>
          <div className="r_item_right">
            <div className="topicTag">
              <div className="tag">丁磊的好货推荐</div>
            </div>
          </div>
        </a>
        <a className="z_item" href="javascript:;">
          <div className="r_item_left">
            <div className="user">
              <div className="avatar">
                <img src={pic}/>
              </div>
              <div className="name">丁磊</div>
            </div>
            <div className="title">这款有机茶叶饮料，无糖不怕胖</div>
            <div className="subtitle">云萃龙井茶饮料限时69.8元一箱</div>
          </div>
          <div className="r_item_right">
            <div className="topicTag">
              <div className="tag">丁磊的好货推荐</div>
            </div>
          </div>
        </a>
      </div>
    )
  }
}