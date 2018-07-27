import React, {Component} from 'react'

import './MsiteMain.less'
import MsiteSwiper from '../../../components/Msite/MsiteSwiper/MsiteSwiper'
import MsiteBrandServe from '../../../components/Msite/MsiteBrandServe/MsiteBrandServe'
import MsiteNewGoods from '../../../components/Msite/MsiteNewGoods/MsiteNewGoods'
import MsiteBetterGoods from '../../../components/Msite/MsiteBetterGoods/MsiteBetterGoods'
import MsiteLimitTime from '../../../components/Msite/MsiteLimitTime/MsiteLimitTime'
import MsiteWelfare from '../../../components/Msite/MsiteWelfare/MsiteWelfare'
import MsiteSpecialSelected from '../../../components/Msite/MsiteSpecialSelected/MsiteSpecialSelected'
import MsiteMainList from '../../../components/Msite/MsiteMainList/MsiteMainList'
import MsiteFooter from '../../../components/Msite/MsiteFooter/MsiteFooter'

export default class MsiteMain extends Component {
  render() {
    return (
      <div className="msite-main">
        {/*<!--轮播图区-->*/}
        <MsiteSwiper className="msite_item"/>
        {/*<!--品牌直供区-->*/}
        <MsiteBrandServe className="msite_item"/>
        {/*<!--新品首发区-->*/}
        <MsiteNewGoods className="msite_item"/>
        {/*<!--好物精选-->*/}
        <MsiteBetterGoods className="msite_item"/>
        {/*<!--限时购-->*/}
        <MsiteLimitTime/>
        {/*<!--福利社-->*/}
        <MsiteWelfare className="msite_item"/>
        {/*<!--专题精选-->*/}
        <MsiteSpecialSelected className="msite_item"/>
        {/*<!--居家好物列表-->*/}
        <MsiteMainList className="msite_item"/>
        {/*<!--底部-->*/}
        <MsiteFooter/>
      </div>
    )
  }
}