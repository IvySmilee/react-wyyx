import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getZPList} from '../../../redux/actions'

import pic from './images/01.jpg'
import './ShiwuZhenPin.less'

class ShiwuZhenPin extends Component {
  componentDidMount(){
    this.props.getZPList();
  }
  render() {
    const zpList=this.props.zpList;
    // console.log(zpList);
    return (
      <div className="s_zhenpin">
        <div className="z_header">严选甄品</div>
        {
          zpList.length!==0 &&
          <a className="z_main_post" href={zpList.zhenOne.schemeUrl}>
            <div className="post_wrap" style={{backgroundImage:`url(${zpList.zhenOne.picUrl})`}}>
              <div className="name">
                <div className="name_title">{zpList.zhenOne.nickname}</div>
              </div>
            </div>
            <div className="post_info">
              <div className="title_price">
                <span className="title">{zpList.zhenOne.title}</span>
                <span className="price">{zpList.zhenOne.priceInfo}元起</span>
              </div>
              <div className="subtitle">{zpList.zhenOne.subtitle}</div>
            </div>
          </a>
        }
        {
          zpList.length !== 0 &&
          zpList.zhenpins.map((obj,index)=>(
            <a className="z_item" href={obj.schemeUrl} key={index}>
              <div className="r_item_left">
                <div className="user">
                  <div className="avatar">
                    <img src={obj.avatar}/>
                  </div>
                  <div className="name">{obj.nickname}</div>
                </div>
                <div className="title">{obj.title}</div>
                <div className="subtitle">{obj.subtitle}</div>
              </div>
              <div className="r_item_right"  style={{backgroundImage:`url(${obj.picUrl})`}}>
                <div className="topicTag">
                  <div className="tag">{obj.typeName}</div>
                </div>
              </div>
            </a>
          ))
        }
      </div>
    )
  }
}
export default connect(
  state=>({zpList:state.zpList}),
  {getZPList}
)(ShiwuZhenPin)