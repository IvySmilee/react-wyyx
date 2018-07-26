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

/*同步action*/
const receiveNavTagsList=(navTagList)=>({type:RECEIVE_M_HEADER,data:navTagList});
/*异步action*/
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
