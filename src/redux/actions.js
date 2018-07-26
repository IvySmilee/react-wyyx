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

import {
  reqNavTagsList,
  reqSwiperList,
  reqBransServe,
  reqNewGoods,
  reqBetterGoods,
  reqLimitedGoods,
  reqSpecialGoods,
  reqMainList,

  reqBannerList,
  reqSlideList,
  reqRecommendList,
  reqTFList,
  reqZPList,
  reqYXList,
  reqMoreList,

  reqSortList,
  reqCaptcha
} from '../api'


const receiveNavTagsList=(navTagList)=>({type:RECEIVE_M_HEADER,data:navTagList});
export const getNavTags=()=>{
  return async dispatch=>{
    const res=await reqNavTagsList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveNavTagsList(res.data))
    }
  }
};

const receiveSwiperList=(swiperList)=>({type:RECEIVE_M_SWIPER,data:swiperList});
export const getSwiper=()=>{
  return async dispatch=>{
    const res=await reqSwiperList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveSwiperList(res.data))
    }
  }
};

const receiveBransServe=(brandServeList)=>({type:RECEIVE_M_BRAND,data:brandServeList});
export const getBransServe=()=>{
  return async dispatch=>{
    const res=await reqBransServe();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveBransServe(res.data))
    }
  }
};

const receiveNewGoods=(newGoodsList)=>({type:RECEIVE_M_NEW,data:newGoodsList});
export const getNewGoods=()=>{
  return async dispatch=>{
    const res=await reqNewGoods();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveNewGoods(res.data))
    }
  }
};

const receiveBetterGoods=(betterGoodsList)=>({type:RECEIVE_M_BETTER,data:betterGoodsList});
export const getBetterGoods=()=>{
  return async dispatch=>{
    const res=await reqBetterGoods();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveBetterGoods(res.data))
    }
  }
};

const receiveLimitedGoods=(limitedGoodsObj)=>({type:RECEIVE_M_LIMITED,data:limitedGoodsObj});
export const getLimitedGoods=()=>{
  return async dispatch=>{
    const res=await reqLimitedGoods();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveLimitedGoods(res.data))
    }
  }
};

const receiveSpecialGoods=(specialGoodsList)=>({type:RECEIVE_M_SPECIAL,data:specialGoodsList});
export const getSpecialGoods=()=>{
  return async dispatch=>{
    const res=await reqSpecialGoods();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveSpecialGoods(res.data))
    }
  }
};

const receiveMainList=(mainList)=>({type:RECEIVE_M_MAINLIST,data:mainList});
export const getMainList=()=>{
  return async dispatch=>{
    const res=await reqMainList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveMainList(res.data))
    }
  }
};

/*shiwu*/
const receiveBannerList=(bannerList)=>({type:RECEIVE_S_BANNER,data:bannerList});
export const getBannerList=()=>{
  return async dispatch=>{
    const res=await reqBannerList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveBannerList(res.data))
    }
  }
};

const receiveSlideList=(slideList)=>({type:RECEIVE_S_SLIDE,data:slideList});
export const getSlideList=()=>{
  return async dispatch=>{
    const res=await reqSlideList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveSlideList(res.data))
    }
  }
};

const receiveRecommendList=(recommendList)=>({type:RECEIVE_S_RECOMMEND,data:recommendList});
export const getRecommendList=()=>{
  return async dispatch=>{
    const res=await reqRecommendList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveRecommendList(res.data))
    }
  }
};

const receiveTFList=(tfList)=>({type:RECEIVE_S_TF,data:tfList});
export const getTFList=()=>{
  return async dispatch=>{
    const res=await reqTFList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveTFList(res.data))
    }
  }
};

const receiveZPList=(zpList)=>({type:RECEIVE_S_ZP,data:zpList});
export const getZPList=()=>{
  return async dispatch=>{
    const res=await reqZPList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveZPList(res.data))
    }
  }
};

const receiveYXList=(yxList)=>({type:RECEIVE_S_YX,data:yxList});
export const getYXLook=()=>{
  return async dispatch=>{
    const res=await reqYXList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveYXList(res.data))
    }
  }
};

const receiveMoreList=(moreList)=>({type:RECEIVE_S_MORE,data:moreList});
export const getMoreList=()=>{
  return async dispatch=>{
    const res=await reqMoreList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveMoreList(res.data))
    }
  }
};

/*sort*/
const receiveSortList=(sortList)=>({type:RECEIVE_SORT_LIST,data:sortList});
export const getSortList=()=>{
  return async dispatch=>{
    const res=await reqSortList();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveSortList(res.data))
    }
  }
};

/*captcha*/
const receiveCaptcha=(captcha)=>({type:RECEIVE_CAPTCHA,data:captcha});
export const getCaptcha=()=>{
  return async dispatch=>{
    const res=await reqCaptcha();
    // console.log(res);
    // console.log(res.data);
    if(res.code===0){
      dispatch(receiveCaptcha(res.data))
    }
  }
};