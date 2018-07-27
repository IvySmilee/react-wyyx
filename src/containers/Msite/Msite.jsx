import React, {Component} from 'react'
import {Switch,Route,Link} from 'react-router-dom'
import {withRouter} from 'react-router-dom'

import './Msite.less'
import MsiteHeader from '../../components/Msite/MsiteHeader/MsiteHeader'
import MsiteMain from './MsiteMain/MsiteMain'
import MsiteDetai from './MsiteDetai/MsiteDetai'


class Msite extends Component {

  render() {
    return (
      <div id="msite">
        {/*搜索区*/}
        <MsiteHeader className="msite_header_item" name="top"/>
        {/*<!--主内容区-->*/}
        <Switch>
          <Route path='/app/msite/main' component={MsiteMain}/>
          <Route path='/app/msite/detail/:id' component={MsiteDetai}/>
          <Route component={MsiteMain}/>
        </Switch>
        {/*<!--锚点-->*/}
        <a className="go-top" target="#top" >
          <i/>
        </a>
      </div>
    )
  }
}
export default withRouter(Msite)