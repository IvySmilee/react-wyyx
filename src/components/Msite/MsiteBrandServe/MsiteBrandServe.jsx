import React, {Component} from 'react'

import pic from './images/brand/01.png'
import './MsiteBrandServe.less'

export default class InitLayer extends Component {
  render() {
    return (
      <div className="m_brand_serve">
        <header className="big_title">
          <a className="more" href="javascript:;">
            <span>品牌制造商直供</span>
            <i></i>
          </a>
        </header>
        <div className="brand_container">
          <ul className="brand_list" >
            <li className="brand_item">
              <div className="item_info">
                <p className="item_title">认同和提高</p>
                <span className="item_price"><span>55</span>元起</span>
              </div>
              <img className="item_img" src={pic}/>
            </li>
            <li className="brand_item">
              <div className="item_info">
                <p className="item_title">认同和提高</p>
                <span className="item_price"><span>55</span>元起</span>
              </div>
              <img className="item_img" src={pic}/>
            </li>
            <li className="brand_item">
              <div className="item_info">
                <p className="item_title">认同和提高</p>
                <span className="item_price"><span>55</span>元起</span>
              </div>
              <img className="item_img" src={pic}/>
            </li>
            <li className="brand_item">
              <div className="item_info">
                <p className="item_title">认同和提高</p>
                <span className="item_price"><span>55</span>元起</span>
              </div>
              <img className="item_img" src={pic}/>
            </li>
            <li className="brand_item">
              <div className="item_info">
                <p className="item_title">认同和提高</p>
                <span className="item_price"><span>55</span>元起</span>
              </div>
              <img className="item_img" src={pic}/>
            </li>
          </ul>
        </div>
    </div>
    )
  }
}