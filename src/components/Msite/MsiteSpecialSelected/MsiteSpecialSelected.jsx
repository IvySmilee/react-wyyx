import React, {Component} from 'react'
import BScroll from 'better-scroll'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {getSpecialGoods} from '../../../redux/actions'

import pic from './images/topic/01.jpg'
import './MsiteSpecialSelected.less'

class MsiteSpecialSelected extends Component {
  componentDidMount(){
    this.props.getSpecialGoods();

  }
  componentDidUpdate(){
    new BScroll('.special_item',{
      startX:0,
      scrollX:true,
      click:true, //默认禁止点击的
      probeType:2,//因为惯性滑动不会触发
      eventPassthrough:'vertical',//解决横向滑动时，纵向不能滑屏的问题
    })
  }
  render() {
    const specialGoodsList=this.props.specialGoodsList;
    // console.log(specialGoodsList);
    return (
      <div className="m_special_selected">
        <header className="items_head">
          <a className="head_content" href="">
            <span className="more">专题精选</span>
            <i className="icon"></i>
          </a>
        </header>
        <div className="special_item">
          <ul className="itemList">
            {
              specialGoodsList.map((obj,index)=>(
                <li className="item" key={index}>
                  <Link className="item_img" to={obj.linkUrl}>
                    <img src={obj.itemPicUrl} alt=""/>
                  </Link>
                  <div className="item_info">
                    <h4 className="title">{obj.title}</h4>
                    <span className="price">￥{obj.priceInfo}起</span>
                  </div>
                  <div className="introduce">{obj.subtitle}</div>
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
  state=>({specialGoodsList:state.specialGoodsList}),
  {getSpecialGoods}
)(MsiteSpecialSelected)