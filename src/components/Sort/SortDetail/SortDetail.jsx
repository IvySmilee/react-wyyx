import React, {Component} from 'react'
import PropTypes from 'prop-types'
import pic from './images/01.jpg'
import './SortDetail.less'

export default class InitLayer extends Component {
  static propTypes={
    detailObj:PropTypes.object.isRequired
  }
  render() {
    const detailObj=this.props.detailObj;
    return (

      <div className="sort-detail" v-if="sortList.length>0">
        <div className="detail-post">
          <img src={detailObj.bannerUrl}/>
        </div>
        <div className="detail-content">
          <div className="detail-title">
            <span>{detailObj.name}</span>
          </div>
          <ul className="detail-list">
            {
              detailObj.subCateList.map((obj,index)=>(
                <li className="list-item" key={index}>
                  <a className="item-link">
                    <img className="item-img" src={obj.bannerUrl} />
                    <div className="item-info">{obj.name}</div>
                  </a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    )
  }
}