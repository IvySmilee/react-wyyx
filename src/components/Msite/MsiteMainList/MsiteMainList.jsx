import React, {Component} from 'react'
import {connect} from 'react-redux'
import {getMainList} from '../../../redux/actions'

// import pic from './images/jujia/01.png'
import './MsiteMainList.less'

class MsiteMainList extends Component {
  componentDidMount(){
    this.props.getMainList();
  }
  render() {
    const mainList=this.props.mainList;
    // console.log(mainList);
    return (

      <div className="m_list">
        {
          mainList.map((obj,index)=>(
            <div className="list_item" key={index}>
              <header className="item_head">{obj.name}好物</header>
              <ul className="item_goods_list">
                {
                  obj.itemList.map((obj1,index)=>(
                    <li className="item" key={index}>
                      <a className="item_link" >
                        <div className="item_img_wrap">
                          <img src={obj1.primaryPicUrl}/>
                          <div className="img_info">{obj1.simpleDesc}</div>
                        </div>
                        {obj1.itemTagList.length>0?
                          <div className="item_tag">
                            {
                              obj1.itemTagList.map((tag,index)=>(
                                <p className="tag" key={index}>{tag.name}</p>
                              ))
                            }
                          </div>
                          : ''
                        }

                        <div className="item_title">{obj1.name}</div>
                        <div className="item_price">￥{obj1.retailPrice}</div>
                      </a>
                    </li>
                  ))
                }
                <li  className="item item_more">
                  <a className="item_link more" href="">
                    <p className="more_title">更多居家好物</p>
                    <i className="more_icon"></i>
                  </a>
                </li>
              </ul>
            </div>
          ))
        }

      </div>
    )
  }
}

export default connect(
  state=>({mainList:state.mainList}),
  {getMainList}
)(MsiteMainList)