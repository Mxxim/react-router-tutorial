import React from 'react'
import {Link, IndexLink} from 'react-router'
import NavLink from './NavLink'
import Home from './Home'

export default React.createClass({
  render() {
    return (
        <div>
          <h1>Hello, React Router!</h1>
          <ul role="nav">
              <li>
                  <NavLink to="/" onlyActiveOnIndex={true}>Home</NavLink>
              </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/repos">Repos</NavLink>
            </li>
          </ul>

            {/*if we have any children in App, and if not, render Home*/}

            {this.props.children || <Home/>}
        </div>
    )
  }
})


/* React Router is constructing your UI like this:
// at /about
<App>
<About/>
</App>

// at /repos
<App>
<Repos/>
</App>
*/
