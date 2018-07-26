/*包含多个用于生成新的state的reducer函数的模块*/

//引入合并函数模块
import {combineReducers} from 'redux'

//引入action的type模块
import {
  RECEIVE_M_HEADER,
  RECEIVE_M_SWIPER,
  RECEIVE_M_BRAND,
  RECEIVE_M_NEW,
  RECEIVE_M_BETTER,
  RECEIVE_M_LIMITED,
  RECEIVE_M_SPECIAL,
  RECEIVE_M_MAINLIST,
  RECEIVE_S_BANNER,
  RECEIVE_S_SLIDE,
  RECEIVE_S_RECOMMEND,
  RECEIVE_S_TF,
  RECEIVE_S_ZP,
  RECEIVE_S_YX,
  RECEIVE_S_MORE,
  RECEIVE_SORT_LIST,
  RECEIVE_CAPTCHA
} from './action-types'

const initNavTagList=[];
function navTagList (state=initNavTagList,action){
  console.log(state);
  console.log(action.data);
  switch (action.type){
    case RECEIVE_M_HEADER:
      return action.data;
    default:
      return state;
  }
}

//向外暴露一个整合多个函数产生的reducer，给到state对象下，即state：{navTagList...}
export default combineReducers({
  navTagList
});
//整合的reducer管理的状态：{user：{}}