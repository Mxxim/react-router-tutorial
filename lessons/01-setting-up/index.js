import React from 'react'
import { render } from 'react-dom'
import {Router, hashHistory, browserHistory} from 'react-router'
import routes from './modules/routes'

// render(<App/>, document.getElementById('app'))
render((
    <Router routes={routes} history={browserHistory}>
    {/*<Router history={hashHistory}>*/}
    </Router>
), document.getElementById('app'));
