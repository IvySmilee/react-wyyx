import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getBransServe} from '../../../redux/actions'

import pic from './images/brand/01.png'
import './MsiteBrandServe.less'

class MsiteBrandServe extends Component {
  componentDidMount(){
    this.props.getBransServe();
  }
  render() {
    const brandServeList=this.props.brandServeList.splice(0,4);
    // console.log(brandServeList);
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
            {
              brandServeList.map((obj,index)=>(
                <li className="brand_item" key={index}>
                  <div className="item_info">
                    <p className="item_title">{obj.name}</p>
                    <span className="item_price"><span>{obj.floorPrice}</span>元起</span>
                  </div>
                  <img className="item_img" src={obj.picUrl}/>
                </li>
              ))
            }
          </ul>
        </div>
    </div>
    )
  }
}

export default connect(
  state=>({brandServeList:state.brandServeList}),
  {getBransServe}
)(MsiteBrandServe)