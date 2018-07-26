import React, {Component} from 'react'
import Swiper from 'swiper'
import {connect} from 'react-redux'
import {getSwiper} from '../../../redux/actions'

// import pic1 from './images/01.jpg'
import './MsiteSwiper.less'

class MsiteSwiper extends Component {
  componentDidMount(){
    this.props.getSwiper();
  }
  componentDidUpdate(){
    new Swiper ('.swiper-container', {
      //direction: 'vertical',
      loop: true,
      pagination: { // 如果需要分页器
        el: '.swiper-pagination',
      }
    })
  }
  render() {
    const swiperList=this.props.swiperList;
    // console.log(swiperList)
    return (
      <div className="m_swiper_wrap">
        <div className="swiper-container m-swiper-container">
          <div className="swiper-wrapper m-swiper-wrapper" >
            {
              swiperList.map((obj,index)=>(
                <div className="swiper-slide" key={index}>
                  <img src={obj.picUrl} alt="a"/>
                </div>
              ))
            }
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

export default connect(
  state=>({swiperList:state.swiperList}),
  {getSwiper}
)(MsiteSwiper)