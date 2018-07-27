import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMoreList} from '../../../redux/actions'

import './ShiwuMore.less'

class ShiwuMore extends Component {
  componentDidMount(){
    this.props.getMoreList();
  }
  render() {
    const moreList=this.props.moreList;
    // console.log(moreList);
    return (
      <div className="s_more">
        <div className="m_header">
          <div className="title">更多精彩</div>
        </div>
        <div className="m_content">
          {
            moreList.map((item,index)=>(
              <span className="content_item" key={index}>
                {
                  item.picList.length===0 &&
                  <div className="img_wrap one_pic" style={{backgroundImage:`url(${item.itemPicUrl})`}}></div>
                }

                {
                  item.picList.length>0 &&
                  <div className="img_wrap three_img_wrap">
                    <div className="img_wrap pic1" style={{backgroundImage:`url(${item.picList[0]})`}}></div>
                    <div className="right">
                      <div className="img_wrap pic2" style={{backgroundImage:`url(${item.picList[1]})`}} ></div>
                      <div className="img_wrap pic3" style={{backgroundImage:`url(${item.picList[2]})`}} ></div>
                    </div>
                  </div>
                }
                <div className="desc">{item.title}</div>
              </span>
            ))
          }
         {/* <a className="content_item">

            <div className="img_wrap one_pic"></div>
            <div className="img_wrap three_img_wrap">
              <div className="img_wrap pic1" ></div>
              <div className="right">
                <div className="img_wrap pic2" ></div>
              <div className="img_wrap pic3" ></div>
            </div>
            </div>

            <div className="desc">就看你们</div>
          </a>*/}

        </div>
      </div>
    )
  }
}

export default connect(
  state=>({moreList:state.moreList}),
  {getMoreList}
)(ShiwuMore)