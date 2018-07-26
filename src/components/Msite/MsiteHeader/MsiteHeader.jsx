import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {getNavTags} from '../../../redux/actions'

import './MsiteHeader.less'

class MsiteHeader extends Component {
  componentDidMount(){
    // console.log(this);
    // this.props.getNavTags();
    // console.log('1',this.props.navTagList);

    if(!this.scroll){
       this.scroll=new BScroll('.head_nav',{
        probeType:2,
        scrollX:true,
        click:true,
      })
    }else{
      this.scroll.refresh();
    }
  };
 /* componentDidUpdate(){
    new BScroll('.head_nav',{
      probeType:2,
      scrollX:true,
      click:true,
    })
  };*/
  render() {
    console.log('1',this.props.navTagList);
    return (
      <div className="m_head_wrap">
        {/*<!--搜索区-->*/}
        <div className="head_top">
          <NavLink className="logo" to="/app/msite"/>
          <div className="search">
            <i/>
            <span>搜索商品, 共10726款好物</span>
          </div>
        </div>

        {/*<!--头部导航区-->*/}
        <div className="head_nav">
          <ul>
            <li className="first" >
              <NavLink className="tag active" to='/app/msite/main'>推荐</NavLink>
            </li>
            <li>
              <NavLink className="tag active" to='/app/msite/detail'>居家</NavLink>
            </li>
            <li>
              <NavLink className="tag" to='/app/msite/detail'>特区2</NavLink>
            </li>
            <li>
              <NavLink className="tag" to='/app/msite/detail'>特色3</NavLink>
            </li>
            <li>
              <span className="tag">特色4</span>
            </li>
            <li>
              <span className="tag">特色5</span>
            </li>
            <li>
              <span className="tag">特色6</span>
            </li>
            <li>
              <span className="tag">特色7</span>
            </li>
            <li>
              <span className="tag">特色8</span>
            </li>
            <li>
              <span className="tag">特色9</span>
            </li>
            <li>
              <span className="tag">特色1</span>
            </li>
        </ul>
      </div>
    </div>
    )
  }
}

export default connect(
  state=>({navTagList:state.navTagList}), //接收reducer里面的函数的函数返回值
  {getNavTags} //接收异步action函数
)(MsiteHeader)