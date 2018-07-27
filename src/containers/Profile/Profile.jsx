import React, {Component} from 'react'
import {Route,NavLink} from 'react-router-dom'

import Login from '../Login/Login'
import Header from './../../components/Header/Header'
import './Profile.less'
import pic from './images/02.jpg'

export default class Profile extends Component {
  render() {
    return (
      <div className="profile">
        {/*<div >*/}
          <Header/>
          <div className="p-main">
            <div className="title">
              <img src={pic}/>
            </div>

            <div className="login-wrap">
              <NavLink className="login phone-login check" to="/app/login" component={Login}>
                <i className="icon phone-icon"/>
                <span className="txt phone-txt">手机号码登录</span>
              </NavLink>
              <NavLink className="login email-login" to="/app/login" component={Login}>{/* to="/login" component={Login}*/}
                <i className="icon email-icon"/>
                <span className="txt email-txt">邮箱帐号登录</span>
              </NavLink>
              <div className="register">
                <span className="re-txt">手机号快捷注册</span>
                <i className="re-icon"/>
              </div>
            </div>

            <div className="others">
              <div className="item">
                <i className="item-icon wechat"/>
                <span className="item-name">微信</span>
              </div>
              <div className="item">
                <i className="item-icon qq"/>
                <span className="item-name">QQ</span>
              </div>
              <div className="item">
                <i className="item-icon wb"/>
                <span className="item-name">微博</span>
              </div>
            </div>
          </div>
        {/*</div>*/}
        {/*<router-view  v-show="$route.meta.isShowProfile"></router-view>*/}
      </div>
    )
  }
}