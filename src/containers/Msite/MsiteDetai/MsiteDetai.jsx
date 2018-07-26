import React, {Component} from 'react'

import pic from './image/03.png'
import './MsiteDetai.less'


export default class InitLayer extends Component {
  render() {
    return (
      <div className="msitedetai">
        <div className="detail-wrap" v-if="navTagList[index]">
          <div className="f-mb20" v-if="navTagList[index]">
            <img src={pic} alt=""/>
          </div>
          <div className="wrap" v-for="(subCate,index) in navTagList[index].subCateList">
            <div className="title">
              <div >
                <span className="name">法规回复</span>
                <span className="desc">信得过相互扶持</span>
              </div>
            </div>
            <div className="item">
              <ul v-if="navTagList[index]">
                <li  v-for="(subCate,index) in navTagList[index].subCateList">
                  <img src={pic} alt=""/>
                  <span className="ellipsis">所对应让动态画法几何硅宝科技</span>
                  <span>特色羽绒</span>
                  <span>￥ 66.6</span>
                </li>
                <li  v-for="(subCate,index) in navTagList[index].subCateList">
                  <img src={pic} alt=""/>
                  <span className="ellipsis">所对应让动态画法几何硅宝科技</span>
                  <span>特色羽绒</span>
                  <span>￥ 66.6</span>
                </li>
                <li  v-for="(subCate,index) in navTagList[index].subCateList">
                  <img src={pic} alt=""/>
                  <span className="ellipsis">所对应让动态画法几何硅宝科技</span>
                  <span>特色羽绒</span>
                  <span>￥ 66.6</span>
                </li>
                <li  v-for="(subCate,index) in navTagList[index].subCateList">
                  <img src={pic} alt=""/>
                  <span className="ellipsis">所对应让动态画法几何硅宝科技</span>
                  <span>特色羽绒</span>
                  <span>￥ 66.6</span>
                </li>
                <li  v-for="(subCate,index) in navTagList[index].subCateList">
                  <img src={pic} alt=""/>
                  <span className="ellipsis">所对应让动态画法几何硅宝科技</span>
                  <span>特色羽绒</span>
                  <span>￥ 66.6</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  }
}