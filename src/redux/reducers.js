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

/*msite*/
const initNavTagList=[];
function navTagList (state=initNavTagList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_M_HEADER:
      return action.data;
    default:
      return state;
  }
}

const initSwiperList=[];
function swiperList (state=initSwiperList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_M_SWIPER:
      return action.data;
    default:
      return state;
  }
}

const initBrandList=[];
function brandServeList (state=initBrandList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_M_BRAND:
      return action.data;
    default:
      return state;
  }
}

const initNewGoods=[];
function newGoodsList (state=initNewGoods,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_M_NEW:
      return action.data;
    default:
      return state;
  }
}

const initBetterGoods=[];
function betterGoodsList (state=initBetterGoods,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_M_BETTER:
      return action.data;
    default:
      return state;
  }
}

const initLimitedGoodsObj={};
function limitedGoodsObj (state=initLimitedGoodsObj,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_M_LIMITED:
      return action.data;
    default:
      return state;
  }
}

const initSpecialGoods=[];
function specialGoodsList (state=initSpecialGoods,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_M_SPECIAL:
      return action.data;
    default:
      return state;
  }
}

const initMainList=[];
function mainList (state=initMainList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_M_MAINLIST:
      return action.data;
    default:
      return state;
  }
}

/*shiwu*/
const initBannerList=[];
function sBannerList (state=initBannerList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_S_BANNER:
      return action.data;
    default:
      return state;
  }
}

const initSlideList=[];
function slideList (state=initSlideList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_S_SLIDE:
      return action.data;
    default:
      return state;
  }
}

const initRecommendList=[];
function recommendList (state=initRecommendList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_S_RECOMMEND:
      return action.data;
    default:
      return state;
  }
}

const initTFList=[];
function tfList (state=initTFList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_S_TF:
      return action.data;
    default:
      return state;
  }
}

const initZPList=[];
function zpList (state=initZPList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_S_ZP:
      return action.data;
    default:
      return state;
  }
}

const initYXList=[];
function yxList (state=initYXList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_S_YX:
      return action.data;
    default:
      return state;
  }
}

const initMoreList=[];
function moreList (state=initMoreList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_S_MORE:
      return action.data;
    default:
      return state;
  }
}

/*sort*/
const initSortList=[];
function sortList (state=initSortList,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_SORT_LIST:
      return action.data;
    default:
      return state;
  }
}

/*captcha*/
const initCaptcha=[];
function captcha (state=initCaptcha,action){
  // console.log(state);
  // console.log(action.data);
  switch (action.type){
    case RECEIVE_CAPTCHA:
      return action.data;
    default:
      return state;
  }
}


//向外暴露一个整合多个函数产生的reducer，给到state对象下，即state：{navTagList...}
export default combineReducers({
  navTagList,
  swiperList,
  brandServeList,
  newGoodsList,
  betterGoodsList,
  limitedGoodsObj,
  specialGoodsList,
  mainList,

  sBannerList,
  slideList,
  recommendList,
  tfList,
  zpList,
  yxList,
  moreList,

  sortList,

  captcha
});
//整合的reducer管理的状态：{user：{}}