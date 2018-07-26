import React, {Component} from 'react'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {getSlideList} from '../../../redux/actions'

import './ShiwuSlide.less'

class ShiwuSlide extends Component {
  componentDidMount(){
    this.props.getSlideList();
  }
  componentDidUpdate(){
    new BScroll('.s_slide-container',{
      scrollX:true,
      click:true, //默认禁止点击的
      probeType:2,//因为惯性滑动不会触发
      eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
    })
  }
  render() {
    const slideList=this.props.slideList;
    // console.log(slideList);
    return (
      <div className="s_slide">

        <div className="s_slide-container">
          <div className="slide-wrapper" >
            {
              slideList.map((obj,index)=>(
                <a className="slide_item" key={index}>
                  <div className="slide-bg" style={{backgroundImage:`url(${obj.picUrl})`}}></div>
                  <div className="total-txt">{obj.articleCount}</div>
                  <div className="slide-txt">{obj.title}</div>
                </a>
              ))
            }

        </div>
      </div>
    </div>
    )
  }
}

export default connect(
  state=>({slideList:state.slideList}),
  {getSlideList}
)(ShiwuSlide)