import React, {Component} from 'react'
import PubSub from 'pubsub-js'
import {withRouter} from 'react-router-dom'

import pic from './image/03.png'
import './MsiteDetai.less'


class MsiteDetai extends Component {
  state={
    detailInfo:{}
  };
  componentDidMount(){
    if(!this.pub){
      this.pub=PubSub.subscribe('detail',(msg,detailInfo)=>{
        this.setState({
          detailInfo:detailInfo
        });
        console.log(this.state.detailInfo);
      });
    }
  };
  componentDidUpdate(){
    if(!this.pub){
      this.pub=PubSub.subscribe('detail',(msg,detailInfo)=>{
        this.setState({
          detailInfo:detailInfo
        });
        console.log(this.state.detailInfo);
      });
    }
  };

  render() {
    // console.log(this);
    const detailInfo=this.state.detailInfo;
    // const index=this.props.match.params.id;
    // console.log(index);
    return (
      <div className="msitedetai">
        {
          detailInfo &&
          <div className="detail-wrap">
            <div className="f-mb20">
              <img src={detailInfo.bannerUrl} alt=""/>
            </div>
            { detailInfo.subCateList &&
            detailInfo.subCateList.map((subCate,index)=>(
              <div className="wrap" key={index}>
                <div className="title">
                  <div >
                    <span className="name">{subCate.name}</span>
                    <span className="desc">{subCate.frontName}</span>
                  </div>
                </div>
                <div className="item">
                  <ul v-if="navTagList[index]">
                    {
                      detailInfo.subCateList.map((subCate,index)=>(
                        <li key={index}>
                          <img src={subCate.wapBannerUrl} alt=""/>
                          <span className="ellipsis">{subCate.frontDesc}</span>
                          <span>{subCate.frontName}</span>
                          <span>￥ {Math.floor(Math.random()*30+100)}</span>
                        </li>
                      ))
                    }
                  </ul>
                </div>
              </div>
            ))
            }
          </div>
        }
      </div>
    )
  }
}
export default withRouter(MsiteDetai)