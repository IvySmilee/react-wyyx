import React, {Component} from 'react'

import pic from './images/01.jpg'
import './SortDetail.less'

export default class InitLayer extends Component {
  render() {
    return (
      <div className="sort-detail" v-if="sortList.length>0">
        <div className="detail-post">
          <img src={pic}/>
        </div>
        <div className="detail-content">
          <div className="detail-title">
            <span>空间分类</span>
          </div>
          <ul className="detail-list">
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
            <li className="list-item">
              <a className="item-link">
                <img className="item-img" src={pic} />
                <div className="item-info">固化剂</div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}