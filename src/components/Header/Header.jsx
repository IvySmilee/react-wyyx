import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'

import './Header.less'

export default class InitLayer extends Component {
  render() {
    return (
      <div className="s_header">
        <div className="head_wrap">
          <NavLink className="home_link icon" to="/msite"/>
          <NavLink className="logo_link  icon" to="/msite"/>
          <div className="right">
            <NavLink className="search_link i" to="/msite"/>
            <NavLink className="cart_link i" to="/cart"/>
          </div>
        </div>
      </div>
    )
  }
}