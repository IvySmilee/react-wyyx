import React, {Component} from 'react'
import BScroll from 'better-scroll'

import pic from './images/01.jpg'
import './ShiwuTenFifteen.less'

export default class InitLayer extends Component {
  componentDidMount(){
    new BScroll('.tf_slide_wrap',{
      scrollX:true,
      click:true, //默认禁止点击的
      probeType:2,//因为惯性滑动不会触发
      eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
    })
  }
  render() {
    return (
      <div className="s_tenfifeen">
        <div className="tf_header">十点一刻</div>
        <div className="tf_slide_wrap">
          <div className="tf_slide">
            <a className="slide_item" href="">
             <div className="line-title">— 今日话题 —</div>
             <div className="title">关于单身</div>
             <div className="desc">聊聊单身的好处</div>
             <div className="joins">
               <div className="inner">
                 <div className="avatars">
                   <img className="avatar" src={pic}/>
                   <img className="avatar" src={pic}/>
                   <img className="avatar" src={pic}/>
                   <div className="avatar more">
                     <span></span>
                     <span></span>
                     <span></span>
                   </div>
                 </div>
                 <div className="joined">550人参与话题</div>
               </div>
             </div>
           </a>

          <a className="slide_item" href="">
            <div className="for_more">
              <div className="check_more">查看全部话题</div>
              <div className="more_icon"></div>
            </div>
          </a>
        </div>
      </div>
  </div>
    )
  }
}