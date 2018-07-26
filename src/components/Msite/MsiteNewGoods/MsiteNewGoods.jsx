import React, {Component} from 'react'
import BScroll from 'better-scroll'

import pic from './images/newProduct/04.png'
import './MsiteNewGoods.less'

export default class InitLayer extends Component {
  componentDidMount(){
    new BScroll('.items',{
      scrollX:true,
      click:true, //默认禁止点击的
      probeType:2,//因为惯性滑动不会触发
      eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
    })
  }
  render() {
    return (
      <div className="m_new_items">
        <header className="items_head">
          <a className="head_content" href="">
            <span className="title">新品首发</span>
            <div className="more">
              <span>查看全部</span>
              <i></i>
            </div>
          </a>
        </header>
        <div className="items">
          <ul className="itemList">
            {/*<li className="item" v-for="(obj,index) in newGoodsList" :key="index">
              <a className="item_info">
                <div className="img">
                  <img :src="obj.listPicUrl" alt="">
                </div>
                <p className="states" v-if="obj.promTag">{{obj.promTag}}</p>
                <div className="name">{{obj.name}}</div>
                <div className="info">{{obj.simpleDesc}}</div>
                <div className="price">￥{{obj.retailPrice}}</div>
              </a>
            </li>*/}

             <li className="item">
               <a className="item_info">
                 <div className="img">
                   <img src={pic} alt=""/>
                 </div>
                 <div className="name">网易智造3D可逆循环扇</div>
                 <div className="info">创新可逆模式 空气对流循环</div>
                 <div className="price">￥499</div>
               </a>
             </li>
            <li className="item">
              <a className="item_info">
                <div className="img">
                  <img src={pic} alt=""/>
                </div>
                <div className="name">网易智造3D可逆循环扇</div>
                <div className="info">创新可逆模式 空气对流循环</div>
                <div className="price">￥499</div>
              </a>
            </li>
            <li className="item">
              <a className="item_info">
                <div className="img">
                  <img src={pic} alt=""/>
                </div>
                <div className="name">网易智造3D可逆循环扇</div>
                <div className="info">创新可逆模式 空气对流循环</div>
                <div className="price">￥499</div>
              </a>
            </li>
            <li className="item">
              <a className="item_info">
                <div className="img">
                  <img src={pic} alt=""/>
                </div>
                <div className="name">网易智造3D可逆循环扇</div>
                <div className="info">创新可逆模式 空气对流循环</div>
                <div className="price">￥499</div>
              </a>
            </li>
            <li className="item">
              <a className="item_info">
                <div className="img">
                  <img src={pic} alt=""/>
                </div>
                <div className="name">网易智造3D可逆循环扇</div>
                <div className="info">创新可逆模式 空气对流循环</div>
                <div className="price">￥499</div>
              </a>
            </li>
            <li className="item more">
              <a className="see_total">
                <span className="txt">查看更多</span>
              </a>
            </li>
          </ul>
        </div>
    </div>
    )
  }
}