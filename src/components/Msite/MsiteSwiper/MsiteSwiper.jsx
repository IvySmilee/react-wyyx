import React, {Component} from 'react'
import Swiper from 'swiper'

import pic1 from './images/01.jpg'
import './MsiteSwiper.less'

export default class InitLayer extends Component {
  componentDidMount(){
    new Swiper ('.swiper-container', {
      //direction: 'vertical',
      loop: true,
      pagination: { // 如果需要分页器
        el: '.swiper-pagination',
      }
    })
  }
  render() {
    return (
      <div className="m_swiper_wrap">
        <div className="swiper-container m-swiper-container">
          <div className="swiper-wrapper m-swiper-wrapper" >
            <div className="swiper-slide m-swiper-slide">
              <img src={pic1} alt="a"/>
            </div>
            <div className="swiper-slide">
              <img src={pic1} alt="a"/>
            </div>
            <div className="swiper-slide">
              <img src={pic1} alt="a"/>
            </div>
            <div className="swiper-slide">
              <img src={pic1} alt="a"/>
            </div>
          </div>
          {/*<!-- 如果需要分页器 -->*/}
          <div className="swiper-pagination m-swiper-pagination"/>
        </div>
        <div className="swiper_service">
          <ul className="service_list">
            <li className="service_item">
              <a className="item_content">
                <i className="confirm"/>
                <span className="brief_info">网易自营品牌</span>
              </a>
            </li>
            <li className="service_item">
              <a className="item_content">
                <i className="confirm"/>
                <span className="brief_info">30天无忧退货</span>
              </a>
            </li>
            <li className="service_item">
              <a className="item_content">
                <i className="confirm"/>
                <span className="brief_info">48小时快速退款</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}