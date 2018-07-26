import React, {Component} from 'react'
import BScroll from 'better-scroll'

import pic from './images/topic/01.jpg'
import './MsiteSpecialSelected.less'

export default class InitLayer extends Component {
  componentDidMount(){
    new BScroll('.special_item',{
      startX:0,
      scrollX:true,
      click:true, //默认禁止点击的
      probeType:2,//因为惯性滑动不会触发
      eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
    })
  }

  render() {
    return (
      <div className="m_special_selected">
        <header className="items_head">
          <a className="head_content" href="">
            <span className="more">专题精选</span>
            <i className="icon"></i>
          </a>
        </header>
        <div className="special_item">
          <ul className="itemList">
            <li className="item" v-for="(obj,index) in specialGoodsList" key="index">
              <a className="item_img" href="#">
              <img src={pic} alt=""/>
            </a>
            <div className="item_info">
              <h4 className="title">啊啊啊</h4>
              <span className="price">￥55起</span>
            </div>
            <div className="introduce">88</div>
          </li>
            <li className="item">
               <a className="item_img">
                 <img src={pic} alt=""/>
               </a>
               <div className="item_info">
                 <h4 className="title">网易智造3D可逆循环扇</h4>
                 <span className="price">￥499起</span>
               </div>
               <div className="introduce">创新可逆模式 空气对流循环</div>
             </li>
            <li className="item">
              <a className="item_img">
                <img src={pic} alt=""/>
              </a>
              <div className="item_info">
                <h4 className="title">网易智造3D可逆循环扇</h4>
                <span className="price">￥499起</span>
              </div>
              <div className="introduce">创新可逆模式 空气对流循环</div>
            </li>
            <li className="item">
              <a className="item_img">
                <img src={pic} alt=""/>
              </a>
              <div className="item_info">
                <h4 className="title">网易智造3D可逆循环扇</h4>
                <span className="price">￥499起</span>
              </div>
              <div className="introduce">创新可逆模式 空气对流循环</div>
            </li>
            <li className="item">
              <a className="item_img">
                <img src={pic} alt=""/>
              </a>
              <div className="item_info">
                <h4 className="title">网易智造3D可逆循环扇</h4>
                <span className="price">￥499起</span>
              </div>
              <div className="introduce">创新可逆模式 空气对流循环</div>
            </li>
          </ul>
      </div>
    </div>
    )
  }
}