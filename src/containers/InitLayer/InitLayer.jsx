//初始页面组件
import React,{Component} from 'react'
import {NavLink} from 'react-router-dom'

import top1 from './images/top1.jpg'
import top2 from './images/top2.jpg'
import bottom from './images/bottom.jpg'
import './InitLayer.less'

export default class InitLayer extends Component{
  render(){
    return (
      <div className="initLayer_wrap">
        <div className="initLayer_top">
          <img src={top1}/>
          <img src={top2}/>
        </div>
        <div className="initLayer_bottom">
          <img src={bottom}/>
          <span className="download_btn"/>
          <NavLink className="goMisite_btn" to='/app'/>
        </div>
      </div>
    )
  }
}