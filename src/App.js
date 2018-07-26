import React,{Component} from 'react'
import {Switch,Route,Redirect} from 'react-router-dom'

import Msite from './containers/Msite/Msite'
import Shiwu from './containers/Shiwu/Shiwu'
import Sort from './containers/Sort/Sort'
import Cart from './containers/Cart/Cart'
import Profile from './containers/Profile/Profile'
import FooterGuide from './components/FooterGuide/FooterGuide'
import Login from './containers/Login/Login'

export default class App extends Component{
  render(){
    return (
      <div id='root'>
        <Switch>
          <Route path='/app/msite' component={Msite}/>
          <Route path='/app/shiwu' component={Shiwu}/>
          <Route path='/app/sort' component={Sort}/>
          <Route path='/app/cart' component={Cart}/>
          <Route path='/app/profile' component={Profile}/>
          <Redirect to='/app/msite'/>
        </Switch>
        <FooterGuide/>
      </div>
    )
  }
}