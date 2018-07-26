import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getLimitedGoods} from '../../../redux/actions'

import pic from './images/limitTime/01.png'
import './MsiteLimitTime.less'

class MsiteLimitTime extends Component {
  componentDidMount(){
    this.props.getLimitedGoods();
  }
  render() {
    const limitedGoodsObj=this.props.limitedGoodsObj;
    // console.log(limitedGoodsObj);
    return (
      <div className="m_limit_time">
        <a className="limit_link" href="#">
          <div className="left_info">
            <div className="title">严选限时购</div>
            <div className="timimg">
              <span>00</span> : <span>52</span> : <span>35</span>
            </div>
            <div className="next">下一场：10:00开始</div>
          </div>
          <div className="right_wrap">
            <div className="img_wrap">
              <img src={limitedGoodsObj.primaryPicUrl}/>
          </div>
          <div className="price_wrap">
            <span className="price">￥{limitedGoodsObj.activityPrice}</span>
            <span className="price">￥{limitedGoodsObj.originPrice}</span>
          </div>
      </div>
  </a>
  </div>
    )
  }
}

export default connect(
  state=>({limitedGoodsObj:state.limitedGoodsObj}),
  {getLimitedGoods}
)(MsiteLimitTime)