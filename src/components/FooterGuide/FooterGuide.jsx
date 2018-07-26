import React, {Component} from 'react'
import {withRouter} from 'react-router-dom'

import './FooterGuide.less'

class FooterGuide extends Component {
  render() {
    return (
      <footer className="footer_nav">
        <span className={`item ${this.props.location.pathname==='/app/msite'? 'active' : ''}`}
              onClick={()=>{this.props.history.replace('/app/msite')}}>
          <i className="msite_icon on"/>
          <span className="txt">首页</span>
        </span>
        <span className={`item ${this.props.location.pathname==='/app/shiwu'? 'active' : ''}`}
              onClick={()=>{this.props.history.replace('/app/shiwu')}}>
          <i className="shiwu_icon on"/>
          <span className="txt">识物</span>
        </span>
        <span className={`item ${this.props.location.pathname==='/app/sort'? 'active' : ''}`}
              onClick={()=>{this.props.history.replace('/app/sort')}}>
          <i className="sort_icon"/>
          <span className="txt">分类</span>
        </span>
        <span className={`item ${this.props.location.pathname==='/app/cart'? 'active' : ''}`}
              onClick={()=>{this.props.history.replace('/app/cart')}}>
          <i className="cart_icon"/>
          <span className="txt">购物车</span>
        </span>
        <span className={`item ${this.props.location.pathname==='/app/profile'? 'active' : ''}`}
              onClick={()=>{this.props.history.replace('/app/profile')}}>
          <i className="profile_icon"/>
          <span className="txt">个人</span>
        </span>
      </footer>
    )
  }
}

/*withRouter使一般组件，有路由组件的方法：以标签属性传入，存在props里面*/
export default withRouter(FooterGuide);