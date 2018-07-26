import React, {Component} from 'react'
import Swiper from 'swiper'
import {connect} from 'react-redux'
import {getBannerList} from '../../../redux/actions'

// import pic from './images/01.jpg'
import './ShiwuBanner.less'

class ShiwuBanner extends Component {
  componentDidMount(){
    this.props.getBannerList();
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
    const sBannerList=this.props.sBannerList;
    // console.log(sBannerList)
    return (
      <div className="s_banner">
        <div className="swiper">
          <div className="swiper-container s-swiper-container">
            <div className="swiper-wrapper s-swiper-wrapper" >
              {
                sBannerList.map((obj,index)=>(
                  <a className="swiper-slide s-swiper-slide" key={index}>
                    <img className="slide-bg" src={obj.picUrl}/>
                    <div className="slide-content">
                      <div className="name">--{obj.subTitle}--</div>
                      <div className="title">{obj.title}</div>
                      <div className="info">{obj.desc}</div>
                    </div>
                  </a>
                ))
              }

            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({sBannerList:state.sBannerList}),
  {getBannerList}
)(ShiwuBanner)