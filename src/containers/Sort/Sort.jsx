import React, {Component} from 'react'
import BScroll from 'better-scroll'
import {connect} from 'react-redux'
import {getSortList} from '../../redux/actions'

import './Sort.less'
import SortDetail from './../../components/Sort/SortDetail/SortDetail'

class Sort extends Component {
  state={
    clickIndex:0
  };
  componentDidMount(){
    this.props.getSortList();
  }
  componentDidUpdate(){
    //创建单例。避免重复渲染
    if(!this.scroll1){
     this.scroll1=new BScroll('.s-left',{
        scrollY:true,
        click:true
      });
    }
    if(!this.scroll2){
      this.scroll2=new BScroll('.s-right',{
        scrollY:true,
        click:true,
        probeType:2,
        eventPassThough:true
      });
    }

  }
  clickIndex(index){
    console.log('1');
    this.setState({
      clickIndex:index
    })
  }
  render() {
    const sortList=this.props.sortList;
     // console.log(sortList);
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

            {
              sortList.map((navTag,index)=>(
                <li className={this.state.clickIndex===index? "list-item active" :'list-item'} key={index}
                    onClick={()=>{this.clickIndex(index)}}>
                  {navTag.name}
                  </li>
              ))
            }
          </ul>
        </div>
        <div className="s-right">
          {
            sortList.length>0 && <SortDetail detailObj={sortList[this.state.clickIndex]}/>
          }
        </div>
      </div>
    )
  }
}

export default connect(
  state=>({sortList:state.sortList}),
  {getSortList}
)(Sort)