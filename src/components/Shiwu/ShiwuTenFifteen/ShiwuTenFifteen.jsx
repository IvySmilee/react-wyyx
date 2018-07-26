import React, {Component} from 'react'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {getTFList} from '../../../redux/actions'

import pic from './images/01.jpg'
import './ShiwuTenFifteen.less'

class ShiwuTenFifteen extends Component {
  componentDidMount(){
    this.props.getTFList();
  }
  componentDidUpdate(){
    new BScroll('.tf_slide_wrap',{
      scrollX:true,
      click:true, //默认禁止点击的
      probeType:2,//因为惯性滑动不会触发
      eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
    })
  }
  render() {
    const tfList=this.props.tfList;
    // console.log(tfList);
    return (
      <div className="s_tenfifeen">
        <div className="tf_header">十点一刻</div>
        <div className="tf_slide_wrap">
          <div className="tf_slide">
            {
              tfList.map((obj,index)=>(
                <a className="slide_item" href={obj.url} key={index}>
                  <div className="line-title">— 今日话题 —</div>
                  <div className="title">{obj.title}</div>
                  <div className="desc">{obj.desc}</div>
                  <div className="joins">
                    <div className="inner">
                      <div className="avatars">
                        {
                          obj.participantAvatar.map((avatar,index)=>(
                            <img className="avatar" src={avatar} key={index}/>
                          ))
                        }

                        <div className="avatar more">
                          <span></span>
                          <span></span>
                          <span></span>
                        </div>
                      </div>
                      <div className="joined">{obj.participantNum}人参与话题</div>
                    </div>
                  </div>
                </a>
              ))
            }

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

export default connect(
  state=>({tfList:state.tfList}),
  {getTFList}
)(ShiwuTenFifteen)