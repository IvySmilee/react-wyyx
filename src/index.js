import React from 'react';
import ReactDOM from 'react-dom';
import {HashRouter,Switch,Route,Redirect} from 'react-router-dom'
import {Provider} from 'react-redux'
import store from './redux/store'

import './mock/mockServer' //只需要引入即可

import './assets/reset.css'
import InitLayer from './containers/InitLayer/InitLayer';
import App from './App'
// import Msite from './containers/Msite/Msite'

ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Switch>
        <Route path='/app' component={App}/>
        <Route component={InitLayer}/>
      </Switch>
    </HashRouter>
  </Provider>
  , document.getElementById('root'));
