import React, {Component} from 'react'
import BScroll from 'better-scroll'

import './Sort.less'
import SortDetail from './../../components/Sort/SortDetail/SortDetail'

export default class InitLayer extends Component {
  componentDidMount(){
    new BScroll('.s-left',{
      scrollY:true,
      click:true
    });
    new BScroll('.s-right',{
      scrollY:true,
      click:true,
      probeType:2,
      eventPassThough:true
    });
  }
  render() {
    return (
      <div className="sort">
        <div className="s-header">
          <div className="s-search-wrap">
            <i className="icon"/>
            <span className="txt">搜索商品, 共10850款好物</span>
          </div>
        </div>
        <div className="s-left">
          <ul className="sort-list">
            <li className="list-item active">推荐专区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
            <li className="list-item">爆品区</li>
          </ul>
        </div>
        <div className="s-right">
          <SortDetail/>
        </div>
      </div>
    )
  }
}