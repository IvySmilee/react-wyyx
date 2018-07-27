import React, {Component} from 'react'
import {NavLink} from 'react-router-dom'
import PubSub from 'pubsub-js'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {getNavTags} from '../../../redux/actions'

import './MsiteHeader.less'

class MsiteHeader extends Component {
  state={
    index:-1,
    isFirst:true
  };
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
  goTo=(index)=>{
    // console.log(this);
    this.setState({
      index:index,
      isFirst:false
    });
    // console.log(PubSub);
    const detailInfo=this.props.navTagList[index];
    // console.log(detailInfo)
    PubSub.publish('detail',detailInfo);
  };
  goFirst=()=>{
    this.setState({
      // firstIndex:true
      index:-1,
      isFirst:true
    })
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
            <li className="first" >{/*this.props.path==='/app/msite/main'   */}
              <NavLink className={this.state.isFirst? 'tag active' :'tag'} to='/app/msite/main'
                onClick={this.goFirst}>推荐</NavLink>
            </li>
            {
              navTagList.map((tagObj,index)=>(
                <li key={index}>
                  <NavLink className={this.state.index===index? 'tag active' :'tag'} to={`/app/msite/detail/${index}`}
                    onClick={()=>{this.goTo(index)}}>
                    {tagObj.name}</NavLink>
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