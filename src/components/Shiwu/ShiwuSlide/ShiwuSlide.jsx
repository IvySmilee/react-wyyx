import React, {Component} from 'react'
import BScroll from 'better-scroll'

import './ShiwuSlide.less'

export default class InitLayer extends Component {
  componentDidMount(){
    new BScroll('.s_slide-container',{
      scrollX:true,
      click:true, //默认禁止点击的
      probeType:2,//因为惯性滑动不会触发
      eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
    })
  }
  render() {
    return (
      <div className="s_slide">

        <div className="s_slide-container">
          <div className="slide-wrapper" >
            <a className="slide_item" href="javascript:;"
               v-for="(obj,index) in slideList" >
            <div className="slide-bg"></div>
            <div className="total-txt">328篇文章</div>
            <div className="slide-txt">额风格如何</div>
          </a>
          <a className="slide_item" href="javascript:;">
            <div className="slide-bg"></div>
            <div className="total-txt">328篇文章</div>
            <div className="slide-txt">
              严选推荐
            </div>
          </a>
            <a className="slide_item" href="javascript:;">
              <div className="slide-bg"></div>
              <div className="total-txt">328篇文章</div>
              <div className="slide-txt">
                严选推荐
              </div>
            </a>
            <a className="slide_item" href="javascript:;">
              <div className="slide-bg"></div>
              <div className="total-txt">328篇文章</div>
              <div className="slide-txt">
                严选推荐
              </div>
            </a>
            <a className="slide_item" href="javascript:;">
              <div className="slide-bg"></div>
              <div className="total-txt">328篇文章</div>
              <div className="slide-txt">
                严选推荐
              </div>
            </a>
            <a className="slide_item" href="javascript:;">
              <div className="slide-bg"></div>
              <div className="total-txt">328篇文章</div>
              <div className="slide-txt">
                严选推荐
              </div>
            </a>
        </div>
      </div>
    </div>
    )
  }
}