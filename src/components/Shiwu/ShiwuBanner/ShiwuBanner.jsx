import React, {Component} from 'react'
import Swiper from 'swiper'

import pic from './images/01.jpg'
import './ShiwuBanner.less'

export default class InitLayer extends Component {
  componentDidMount(){
    new Swiper ('.swiper-container', {
      //direction: 'vertical',
      loop: true,
    })
  }
  render() {
    return (
      <div className="s_banner">
        <div className="swiper">
          <div className="swiper-container s-swiper-container">
            <div className="swiper-wrapper s-swiper-wrapper" >
              <a className="swiper-slide s-swiper-slide" href="javascript:;"
                 v-for="(obj,index) in bannerList" >
                <img className="slide-bg" src={pic}/>
                <div className="slide-content">
                  <div className="name">--公益金共和国--</div>
                  <div className="title">精英怪还有空</div>
                  <div className="info">喜欢法国红酒</div>
                </div>
              </a>
              <a className="swiper-slide s-swiper-slide" href="javascript:;">
                 <img className="slide-bg" src={pic}/>
                 <div className="slide-content">
                   <div className="name">--严选推荐--</div>
                   <div className="title">海边度假必看攻略</div>
                   <div className="info">不去海边浪一浪，夏天算白过了</div>
                 </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}