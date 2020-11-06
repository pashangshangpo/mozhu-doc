import React from 'react'
import { HashRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import Home from './router/home'
import Depot from './router/depot'
import Article from './router/article'
import Special from './router/special'
import Infoarticle from './router/infoarticle'

class Routes extends React.Component {
  render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact={true} path='/' component={Home} />
          <Route exact={true} path='/home' component={Home} />
        </Switch>
        <Route path='/depot' component={Depot} />
        <Route path='/article' component={Article} />
        <Route path='/special' component={Special} />
        <Route path='/infoarticle' component={Infoarticle} />
      </HashRouter>
    )
  }
}

export default Routes
