import React, {Component} from 'react'
import {Switch,Route,Link,NavLink} from 'react-router-dom'
// import {withRouter} from 'react-router-dom'
import BScroll from 'better-scroll'
// import PubSub from 'pubsub-js'

import {connect} from 'react-redux'
import {getNavTags} from '../../redux/actions'

import './Msite.less'
// import MsiteHeader from '../../components/Msite/MsiteHeader/MsiteHeader'
import MsiteMain from './MsiteMain/MsiteMain'
import MsiteDetai from './MsiteDetai/MsiteDetai'


class Msite extends Component {
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
  render() {
    const navTagList=this.props.navTagList;

    return (
      <div id="msite">
        {/*搜索区*/}
        {/*<MsiteHeader className="msite_header_item" name="top"/>*/}
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
              <li className="first" >{/*this.props.path==='/app/msite/main'  */}
                <NavLink  to='/app/msite/main'
                          className={this.props.location.pathname==='/app/msite/main' || this.props.location.pathname==='/app/msite'? 'tag active' :'tag'}
                  >推荐</NavLink>
              </li>
              {
                navTagList.map((tagObj,index)=>(
                  <li key={index}>
                    <NavLink className={this.props.location.pathname===`/app/msite/detail/${index}`? 'tag active' :'tag'}
                             to={`/app/msite/detail/${index}`}>
                      {tagObj.name}
                    </NavLink>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        {/*<!--主内容区-->*/}
        <Switch>
          <Route path='/app/msite/main' component={MsiteMain}/>
          <Route path='/app/msite/detail/:id' component={MsiteDetai}/>
          <Route component={MsiteMain}/>
        </Switch>
        {/*<!--锚点-->*/}
        <a className="go-top" target="#top" >
          <i/>
        </a>
      </div>
    )
  }
}
// export default withRouter(Msite)
export default connect(
  state=>({navTagList:state.navTagList}), //接收reducer里面的函数的函数返回值
  {getNavTags} //接收异步action函数
)(Msite)