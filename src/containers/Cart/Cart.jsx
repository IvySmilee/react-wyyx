import React, {Component} from 'react'

import './Cart.less'

export default class Cart extends Component {
  render() {
    return (
      <div className="c_wrap">
        <div className="c_header">
          <span className="logo">购物车</span>
          <span className="coupon">领券</span>
        </div>
        <ul className="c_tags">
          <li className="tag_item">
            <span className="icon"/>
            <span className="tag">30天无忧退货</span>
          </li>
          <li className="tag_item">
            <span className="icon"/>
            <span className="tag">48小时快速退款</span>
          </li>
          <li className="tag_item">
            <span className="icon"/>
            <span className="tag">满88元免邮费</span>
          </li>
        </ul>
        <div className="c_content">
          <div className="c_cart">
            <div className="cart_img"/>
            <div className="cart_txt">去添加点什么吧</div>
          </div>
          <div className="c_login">
            <span className="log_btn" to="/login">登录</span>
          </div>
        </div>
      </div>
    )
  }
}