import React, {Component} from 'react'

import pic from './images/jujia/01.png'
import './MsiteMainList.less'

export default class InitLayer extends Component {
  render() {
    return (
      <div className="m_list">
        {/*<!--特色区好物-->*/}
        <div className="list_item">
          <header className="item_head">居家好物</header>
          <ul className="item_goods_list">
            <li className="item">
              <a className="item_link" href="">
                <div className="item_img_wrap">
                  <img src={pic}/>
                  <div className="img_info">一键自由躺 选款师力荐</div>
                </div>
                <div className="item_tag">
                  <p className="tag">暑期特价</p>
                </div>
                <div className="item_title">自由躺 真皮电动功能沙发</div>
                <div className="item_price">￥2249</div>
              </a>
            </li>
            <li className="item">
              <a className="item_link" href="">
                <div className="item_img_wrap">
                  <img src={pic}/>
                  <div className="img_info">一键自由躺 选款师力荐</div>
                </div>
                <div className="item_tag">
                  <p className="tag">暑期特价</p>
                </div>
                <div className="item_title">自由躺 真皮电动功能沙发</div>
                <div className="item_price">￥2249</div>
              </a>
            </li>
            <li className="item">
              <a className="item_link" href="">
                <div className="item_img_wrap">
                  <img src={pic}/>
                  <div className="img_info">一键自由躺 选款师力荐</div>
                </div>
                <div className="item_tag">
                  <p className="tag">暑期特价</p>
                </div>
                <div className="item_title">自由躺 真皮电动功能沙发</div>
                <div className="item_price">￥2249</div>
              </a>
            </li>

            <li  className="item item_more">
              <a className="item_link more" href="">
                <p className="more_title">更多居家好物</p>
                <i className="more_icon"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}