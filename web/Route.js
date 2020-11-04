import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import Home from './router/home'
import Depot from './router/depot'

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/home' component={Home} />
        </Switch>
        <Route path='/depot' component={Depot} />
      </HashRouter>
    )
  }
}

export default Routes
