import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getRecommendList} from '../../../redux/actions'

// import pic from './images/02.jpg'
import './ShiwuRecommend.less'

class ShiwuRecommend extends Component {
  componentDidMount(){
    this.props.getRecommendList();
  }
  render() {
    const recommendList=this.props.recommendList;
    // console.log(recommendList);
    return (
      <div className="s_recommend">
        <div className="r_header">为你推荐</div>
        {
          recommendList.length!==0 &&
            <a className="r_main_post" href="javascript:;">
              <div className="post_wrap">
                <div className="name1">
                  <div className="name1_title" >
                    {recommendList.recommendBanner.nickname}
                  </div>{/*<!--recommendBanner-->*/}
                </div>
              </div>
              <div className="post_info">
                <div className="title_price">
                  <span className="title">{recommendList.recommendBanner.title}</span>
                  <span className="price">{recommendList.recommendBanner.priceInfo}元起</span>
                </div>
                <div className="subtitle">{recommendList.recommendBanner.subtitle}</div>
              </div>
            </a>
        }
        {
          recommendList.length!==0 &&
          recommendList.recommends.map((recommend,index)=>(
            <a className="r_item" href="javascript:;" key={index}>
              <div className="r_item_left">
                <div className="user">
                  <div className="avatar">
                    <img src={recommend.avatar} alt="a"/>
                  </div>
                  <div className="name">{recommend.nickname}</div>
                </div>
                <div className="title">{recommend.title}</div>
                <div className="subtitle">{recommend.subtitle}</div>
              </div>
              <div className="r_item_right" style={{backgroundImage:`url(${recommend.picUrl})`}}>
                <div className="topicTag">
                  <div className="tag">{recommend.typeName}</div>
                </div>
              </div>
            </a>
          ))
        }

      </div>
    )
  }
}

export default connect(
  state=>({recommendList:state.recommendList}),
  {getRecommendList}
)(ShiwuRecommend)