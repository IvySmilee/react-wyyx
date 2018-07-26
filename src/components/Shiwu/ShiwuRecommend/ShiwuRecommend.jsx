import React, {Component} from 'react'

import pic from './images/02.jpg'
import './ShiwuRecommend.less'

export default class InitLayer extends Component {
  render() {
    return (
      <div className="s_recommend">
        <div className="r_header">为你推荐</div>
        <a className="r_main_post" href="javascript:;">
          <div className="post_wrap">
            <div className="name">
              <div className="name_title" >
                热法尔范
              </div>{/*<!--recommendBanner-->*/}
            </div>
          </div>
          <div className="post_info">
            <div className="title_price">
              <span className="title">大幅度</span>
              <span className="price">55元起</span>
            </div>
            <div className="subtitle">温热贵糖股份提货人太突然</div>
          </div>
        </a>
        <a className="r_item" href="javascript:;">
          <div className="r_item_left">
            <div className="user">
              <div className="avatar">
                <img src={pic} alt="a"/>
              </div>
              <div className="name">滑块</div>
            </div>
            <div className="title">三个</div>
            <div className="subtitle">天荒夜谈</div>
          </div>
          <div className="r_item_right">
            <div className="topicTag">
              <div className="tag">据官方的</div>
            </div>
          </div>
        </a>
        <a className="r_item" href="javascript:;">
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