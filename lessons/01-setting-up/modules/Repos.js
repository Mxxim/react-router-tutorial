import React from 'react'
import {browserHistory} from 'react-router'
import NavLink from './NavLink'

export default React.createClass({

    contextTypes: {
        router: React.PropTypes.object
    },

    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/repos/${userName}/${repo}`;
        console.log(path);
        this.context.router.push(path);
        // browserHistory.push(path);
    },

    render() {
        return (
            <div>
                <h2>Repos</h2>

                {/* add some links */}
                <ul>
                    <li><NavLink to="/repos/reactjs/react-router">React Router</NavLink></li>
                    <li><NavLink to="/repos/facebook/react">React</NavLink></li>
                    <li>
                        <from onSubmit={this.handleSubmit}>
                            <input type="text" placeholder="userName"/> / {' '}
                            <input type="text" placeholder="repo"/>{' '}
                            <button type="submit">Go</button>
                        </from>
                    </li>
                </ul>

                {/* will render `Repo.js` when at /repos/:userName/:repoName */}
                {this.props.children}
            </div>
        )
    }
})