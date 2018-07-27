import React, {Component} from 'react'
import './Shiwu.less'

import Header from '../../components/Header/Header'
import ShiwuBanner from '../../components/Shiwu/ShiwuBanner/ShiwuBanner'
import ShiwuSlide from '../../components/Shiwu/ShiwuSlide/ShiwuSlide'
import ShiwuRecommend from '../../components/Shiwu/ShiwuRecommend/ShiwuRecommend'
import ShiwuTenFifteen from '../../components/Shiwu/ShiwuTenFifteen/ShiwuTenFifteen'
import ShiwuZhenPin from '../../components/Shiwu/ShiwuZhenPin/ShiwuZhenPin'
import ShiwuLook from '../../components/Shiwu/ShiwuLook/ShiwuLook'
import ShiwuMore from '../../components/Shiwu/ShiwuMore/ShiwuMore'

export default class Shiwu extends Component {
  render() {
    return (
      <div className="shiwu">
        <Header  name="top"/>
        <div className="s_content">
          <ShiwuBanner/>
          <ShiwuSlide className="s_content_item"/>
          <ShiwuRecommend className="s_content_item"/>
          <ShiwuTenFifteen className="s_content_item"/>
          <ShiwuZhenPin className="s_content_item"/>
          <ShiwuLook className="s_content_item"/>
          <ShiwuMore/>
        </div>
       {/* <!--锚点-->*/}
        <a className="go-top" href="#top">
          <i></i>
        </a>
      </div>
    )
  }
}