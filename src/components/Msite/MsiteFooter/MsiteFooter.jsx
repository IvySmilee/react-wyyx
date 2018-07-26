import React, {Component} from 'react'

import './MsiteFooter.less'

export default class InitLayer extends Component {
  render() {
    return (
      <div className="m_footer">
        <div className="footer_content">
          <div className="top">
            <a href="javascript:;">下载APP</a>
            <a href="javascript:;">电脑版</a>
          </div>
          <div className="bottom">
            <span>网易公司版权所有 © 1997-2018</span>
            <span>食品经营许可证：JY13301080111719</span>
          </div>
        </div>
      </div>
    )
  }
}