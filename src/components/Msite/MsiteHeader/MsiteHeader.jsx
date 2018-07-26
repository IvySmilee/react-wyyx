import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {getNavTags} from '../../../redux/actions'

import './MsiteHeader.less'

class MsiteHeader extends Component {
  componentDidMount(){
    this.props.getNavTags();

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
    // console.log('1',this.props.navTagList);
    const navTagList=this.props.navTagList;
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
            {
              navTagList.map((tagObj,index)=>(
                <li key={index}>
                  <NavLink className="tag" to={`/app/msite/detail/${index}`}>{tagObj.name}</NavLink>
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
  state=>({navTagList:state.navTagList}), //接收reducer里面的函数的函数返回值
  {getNavTags} //接收异步action函数
)(MsiteHeader)